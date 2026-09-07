export interface Painting {
  title: string;
  note?: string;
  date?: string;
  image: string;
}

export const paintings: Painting[] = [
  { title: 'Dancing Flowers', image: '/media/paintings/DancingFlowers.jpg' },
  { title: 'Heavy Is the Head', image: '/media/paintings/HeavyIsTheHead.jpg' },
  { title: 'Music’s Picasso — Father’s Gift', image: '/media/paintings/MusicsPicasso_FathersGift.jpg' },
];
