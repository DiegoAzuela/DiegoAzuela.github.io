export interface Piece {
  title: string;
  artist: string;
  note?: string;
}

export interface Museum {
  slug: string;
  name: string;
  city: string;
  image: string;
  /** Diego's own photo caption */
  caption?: string;
  website?: string;
  pieces: Piece[];
}

/**
 * Museums & places visited. `pieces` = the works Diego wants to call out.
 * Add art pieces by editing the arrays below (title + artist, optional note).
 */
export const museums: Museum[] = [
  {
    slug: 'museo-del-prado',
    name: 'Museo del Prado',
    city: 'Madrid, Spain',
    image: '/media/museums/museo_del_prado.jpg',
    website: 'https://www.museodelprado.es/en/the-collection',
    pieces: [],
  },
  {
    slug: 'louvre',
    name: 'Musée du Louvre',
    city: 'Paris, France',
    image: '/media/museums/louvre.jpg',
    website: 'https://collections.louvre.fr/en/',
    pieces: [],
  },
  {
    slug: 'moma',
    name: 'MoMA',
    city: 'New York, USA',
    image: '/media/museums/moma_nyc.jpg',
    website: 'https://www.moma.org/collection/',
    pieces: [
      { title: 'The Starry Night', artist: 'Vincent van Gogh', note: 'The one I keep coming back for.' },
    ],
  },
  {
    slug: 'guggenheim',
    name: 'Solomon R. Guggenheim Museum',
    city: 'New York, USA',
    image: '/media/museums/guggenheim_nyc.jpg',
    website: 'https://www.guggenheim.org/collection-online',
    pieces: [],
  },
  {
    slug: 'legion-of-honor',
    name: 'Legion of Honor',
    city: 'San Francisco, USA',
    image: '/media/museums/legion_of_honor.jpg',
    website: 'https://www.famsf.org/legion-of-honor',
    pieces: [],
  },
  {
    slug: 'philadelphia-museum-of-art',
    name: 'Philadelphia Museum of Art',
    city: 'Philadelphia, USA',
    image: '/media/museums/philadelphia_art_museum.jpg',
    website: 'https://www.philamuseum.org/collection',
    pieces: [],
  },
  {
    slug: 'galleria-dell-accademia',
    name: 'Galleria dell’Accademia',
    city: 'Florence, Italy',
    image: '/media/museums/galleria_della_accademia.jpg',
    website: 'https://www.galleriaaccademiafirenze.it/en/',
    pieces: [{ title: 'David', artist: 'Michelangelo' }],
  },
  {
    slug: 'museo-anahuacalli',
    name: 'Museo Anahuacalli',
    city: 'Mexico City, Mexico',
    image: '/media/museums/anahuacalli.jpg',
    caption: 'Diego Rivera’s volcanic-stone museum for his pre-Hispanic collection.',
    website: 'https://museoanahuacalli.org.mx/',
    pieces: [],
  },
  {
    slug: 'museum-of-science-boston',
    name: 'Museum of Science',
    city: 'Boston, USA',
    image: '/media/museums/boston_science_museum.jpg',
    website: 'https://www.mos.org/',
    pieces: [],
  },
  {
    slug: 'van-gogh-exhibition',
    name: 'Van Gogh — The Immersive Experience',
    city: 'Travelling exhibition',
    image: '/media/museums/van_gogh_expo.jpg',
    pieces: [],
  },
  {
    slug: 'sagrada-familia',
    name: 'La Sagrada Família',
    city: 'Barcelona, Spain',
    image: '/media/museums/sagrada_familia.jpg',
    caption: 'Gaudí’s basilica — a building worth the trip on its own.',
    website: 'https://sagradafamilia.org/en/',
    pieces: [],
  },
  {
    slug: 'colosseum',
    name: 'The Colosseum',
    city: 'Rome, Italy',
    image: '/media/museums/colliseum_rome.jpg',
    website: 'https://colosseo.it/en/',
    pieces: [],
  },
];
