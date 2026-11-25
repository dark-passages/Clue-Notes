const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = '0.0.0.0';
const PORT = Number.parseInt(process.env.PORT || '3000', 10) || 3000;
const ROOT_DIR = path.resolve(__dirname);

const BLOCKED_FILES = new Set([
  'server.js',
  'package.json',
  'package-lock.json',
  'metadata.json',
]);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

function sendText(res, statusCode, body) {
  res.writeHead(statusCode, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(body);
}

function resolvePublicPath(requestPath) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(requestPath);
  } catch {
    return { error: 400 };
  }

  const normalized = path.posix.normalize(decodedPath);
  const relative = normalized === '/' ? 'index.html' : normalized.replace(/^\/+/, '');
  const segments = relative.split('/');

  if (
    segments.some(
      (seg) =>
        !seg ||
        seg === '..' ||
        seg.startsWith('.') ||
        seg === 'node_modules' ||
        seg === 'dist' ||
        seg === 'src'
    )
  ) {
    return { error: 403 };
  }

  if (segments.length === 1 && BLOCKED_FILES.has(segments[0])) {
    return { error: 403 };
  }

  const fullPath = path.resolve(ROOT_DIR, relative);
  if (fullPath !== ROOT_DIR && !fullPath.startsWith(ROOT_DIR + path.sep)) {
    return { error: 403 };
  }

  return { fullPath };
}

const server = http.createServer((req, res) => {
  const method = req.method || 'GET';
  if (method !== 'GET' && method !== 'HEAD') {
    return sendText(res, 405, 'Method Not Allowed');
  }

  const rawUrl = req.url || '/';
  const pathname = rawUrl.split('?')[0] || '/';

  if (pathname === '/health' || pathname === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    if (method === 'HEAD') return res.end();
    return res.end(JSON.stringify({ status: 'ok' }));
  }

  const resolved = resolvePublicPath(pathname);
  if (resolved.error) {
    return sendText(res, resolved.error, resolved.error === 400 ? 'Bad Request' : 'Forbidden');
  }

  let filePath = resolved.fullPath;

  fs.stat(filePath, (statErr, stats) => {
    if (statErr || !stats.isFile()) {
      // Fall back to index.html for SPA routes without file extensions
      if (!path.extname(pathname)) {
        filePath = path.join(ROOT_DIR, 'index.html');
        return serveFile(filePath, method, res);
      }
      return sendText(res, 404, 'Not Found');
    }

    serveFile(filePath, method, res);
  });
});

function serveFile(filePath, method, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const cacheControl =
    ext === '.html' || ext === '.js' || ext === '.json'
      ? 'no-cache'
      : 'public, max-age=86400';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return sendText(res, 404, 'Not Found');
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': data.length,
      'Cache-Control': cacheControl,
      'X-Content-Type-Options': 'nosniff',
    });

    if (method === 'HEAD') {
      return res.end();
    }
    res.end(data);
  });
}

server.listen(PORT, HOST, () => {
  console.log(`Clue Notes standalone server listening on http://${HOST}:${PORT}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
