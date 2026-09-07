export interface Concert {
  artist: string;
  place: string;
  date: string; // ISO
  image?: string;
}

export const concerts: Concert[] = [
  { artist: 'Bad Bunny', place: 'San Juan, Puerto Rico', date: '2025-08-08', image: '/media/concerts/BadBunny_August82025.jpg' },
  { artist: 'Ludovico Einaudi', place: 'San Francisco, California', date: '2025-10-22', image: '/media/concerts/LudovicoEinaudi_Oct222025.jpg' },
  { artist: 'Tame Impala', place: 'Oakland, California', date: '2025-11-15', image: '/media/concerts/TameImpala_Nov152025.jpg' },
  { artist: 'Bad Bunny', place: 'Mexico City, Mexico', date: '2025-12-19', image: '/media/concerts/BadBunny_Dec192025.jpg' },
  { artist: 'Daniel Lewis', place: 'Oakland, California', date: '2026-01-15' },
  { artist: 'Lewis Capaldi', place: 'Oakland, California', date: '2026-05-03', image: '/media/concerts/LewisCapaldi_May32026.jpg' },
  { artist: 'Maná', place: 'San Jose, California', date: '2026-05-30' },
  { artist: 'Yandel', place: 'Oakland, California', date: '2025-06-14', image: '/media/concerts/Yandel_June142025.jpg' },
];
