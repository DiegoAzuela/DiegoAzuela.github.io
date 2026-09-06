export interface Book {
  title: string;
  author: string;
  cover?: string; // /media/books/<slug>.jpg — omit for a typographic tile
}

/** Recently read. Covers pulled from Open Library and stored locally. */
export const books: Book[] = [
  { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', cover: '/media/books/the-brothers-karamazov.jpg' },
  { title: 'La traición de Roma', author: 'Santiago Posteguillo', cover: '/media/books/la-traicion-de-roma.jpg' },
  { title: 'The Software Engineer’s Guidebook', author: 'Gergely Orosz', cover: '/media/books/the-software-engineers-guidebook.jpg' },
  { title: 'How to Win at Chess', author: 'Levy Rozman', cover: '/media/books/how-to-win-at-chess.jpg' },
  { title: 'True Love', author: 'Lady Lee Andrews' },
  { title: 'Differential Equations', author: 'Nate Ramer' },
];

export const goodreads = 'https://www.goodreads.com/user/show/195264600-diego-azuela';
