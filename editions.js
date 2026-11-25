/**
 * CLUE EDITIONS CONFIGURATION FOR STANDALONE APP
 * This file is loaded by the standalone app (index.html).
 * You can edit, add, or customize editions here, or place .json files in this folder.
 */
window.CLUE_EDITIONS = [
  {
    id: 'classic-clue',
    name: 'Classic Clue (1986 Edition)',
    description: 'Standard 6 suspects, 6 weapons, and 9 rooms.',
    categories: ['Suspects', 'Weapons', 'Rooms'],
    categoryIcons: { Suspects: '👤', Weapons: '🗡', Rooms: '🚪' },
    cardsByCategory: {
      Suspects: ['Miss Scarlet', 'Col. Mustard', 'Mrs. White', 'Mr. Green', 'Mrs. Peacock', 'Prof. Plum'],
      Weapons: ['Candlestick', 'Dagger', 'Lead Pipe', 'Revolver', 'Rope', 'Wrench'],
      Rooms: ['Kitchen', 'Ballroom', 'Conservatory', 'Dining Room', 'Billiard Room', 'Library', 'Lounge', 'Hall', 'Study']
    },
    colors: [
      { character: 'Miss Scarlet', name: 'Red', hex: '#EF4444', short: 'SCA' },
      { character: 'Col. Mustard', name: 'Yellow', hex: '#F59E0B', short: 'MUS' },
      { character: 'Mrs. White', name: 'White', hex: '#E2E8F0', short: 'WHI' },
      { character: 'Mr. Green', name: 'Green', hex: '#10B981', short: 'GRE' },
      { character: 'Mrs. Peacock', name: 'Blue', hex: '#3B82F6', short: 'PEA' },
      { character: 'Prof. Plum', name: 'Purple', hex: '#8E44AD', short: 'PLU' }
    ]
  },
  {
    id: 'master-detective',
    name: 'Clue Master Detective Edition',
    description: 'Expanded 10 suspects, 8 weapons, and 12 rooms.',
    categories: ['Suspects', 'Weapons', 'Rooms'],
    categoryIcons: { Suspects: '👤', Weapons: '🗡', Rooms: '🚪' },
    cardsByCategory: {
      Suspects: ['Miss Scarlet', 'Col. Mustard', 'Mrs. White', 'Mr. Green', 'Mrs. Peacock', 'Prof. Plum', 'Miss Peach', 'Monsieur Brunette', 'Madame Rose', 'Sgt. Gray'],
      Weapons: ['Candlestick', 'Dagger', 'Lead Pipe', 'Revolver', 'Rope', 'Wrench', 'Poison', 'Horseshoe'],
      Rooms: ['Kitchen', 'Ballroom', 'Conservatory', 'Dining Room', 'Billiard Room', 'Library', 'Lounge', 'Hall', 'Study', 'Courtyard', 'Gazebo', 'Carriage House']
    },
    colors: [
      { character: 'Miss Scarlet', name: 'Red', hex: '#EF4444', short: 'SCA' },
      { character: 'Col. Mustard', name: 'Yellow', hex: '#F59E0B', short: 'MUS' },
      { character: 'Mrs. White', name: 'White', hex: '#E2E8F0', short: 'WHI' },
      { character: 'Mr. Green', name: 'Green', hex: '#10B981', short: 'GRE' },
      { character: 'Mrs. Peacock', name: 'Blue', hex: '#3B82F6', short: 'PEA' },
      { character: 'Prof. Plum', name: 'Purple', hex: '#8E44AD', short: 'PLU' },
      { character: 'Miss Peach', name: 'Peach', hex: '#FB923C', short: 'PEH' },
      { character: 'Monsieur Brunette', name: 'Brown', hex: '#78350F', short: 'BRU' },
      { character: 'Madame Rose', name: 'Rose', hex: '#EC4899', short: 'ROS' },
      { character: 'Sgt. Gray', name: 'Gray', hex: '#94A3B8', short: 'GRA' }
    ]
  },
  {
    id: 'motivated-clue',
    name: 'Motivated Clue',
    description: '4-category edition with Suspects, Weapons, Rooms, and Reasons.',
    categories: ['Suspects', 'Weapons', 'Rooms', 'Reasons'],
    categoryIcons: { Suspects: '👤', Weapons: '🗡', Rooms: '🚪', Reasons: '💭' },
    cardsByCategory: {
      Suspects: ['Miss Scarlet', 'Col. Mustard', 'Mrs. White', 'Mr. Green', 'Mrs. Peacock', 'Prof. Plum'],
      Weapons: ['Candlestick', 'Dagger', 'Lead Pipe', 'Revolver', 'Rope', 'Wrench'],
      Rooms: ['Kitchen', 'Ballroom', 'Conservatory', 'Dining Room', 'Billiard Room', 'Library', 'Lounge', 'Hall', 'Study'],
      Reasons: ['Love', 'Revenge', 'Loathing', 'Loot', 'Greed', 'Jealousy']
    },
    colors: [
      { character: 'Miss Scarlet', name: 'Red', hex: '#EF4444', short: 'SCA' },
      { character: 'Col. Mustard', name: 'Yellow', hex: '#F59E0B', short: 'MUS' },
      { character: 'Mrs. White', name: 'White', hex: '#E2E8F0', short: 'WHI' },
      { character: 'Mr. Green', name: 'Green', hex: '#10B981', short: 'GRE' },
      { character: 'Mrs. Peacock', name: 'Blue', hex: '#3B82F6', short: 'PEA' },
      { character: 'Prof. Plum', name: 'Purple', hex: '#8E44AD', short: 'PLU' }
    ]
  },
  {
    id: 'clue-junior',
    name: 'Clue Junior (Missing Pet Edition)',
    description: 'Junior edition with Suspects, Pets, and Rooms.',
    categories: ['Suspects', 'Pets', 'Rooms'],
    categoryIcons: { Suspects: '👤', Pets: '🐾', Rooms: '🚪' },
    cardsByCategory: {
      Suspects: ['Mortimer Mustard', 'Samantha Scarlet', 'Georgie Green', 'Polly Peacock', 'Peter Plum', 'Wendy White'],
      Pets: ['Ginger the Cat', 'Rusty the Dog', 'Pip the Hamster', 'Polly the Parrot', 'Fluffy the Bunny', 'Bubbles the Goldfish'],
      Rooms: ['Playroom', 'Kitchen', 'Living Room', 'Bedroom', 'Backyard Garden', 'Treehouse Attic']
    },
    colors: [
      { character: 'Mortimer Mustard', name: 'Yellow', hex: '#F59E0B', short: 'MUS' },
      { character: 'Samantha Scarlet', name: 'Red', hex: '#EF4444', short: 'SCA' },
      { character: 'Georgie Green', name: 'Green', hex: '#10B981', short: 'GRE' },
      { character: 'Polly Peacock', name: 'Blue', hex: '#3B82F6', short: 'PEA' },
      { character: 'Peter Plum', name: 'Purple', hex: '#8E44AD', short: 'PLU' },
      { character: 'Wendy White', name: 'White', hex: '#E2E8F0', short: 'WHI' }
    ]
  }
];
