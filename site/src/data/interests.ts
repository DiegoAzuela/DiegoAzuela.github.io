export interface InterestCollection {
  title: string;
  href: string;
  blurb: string;
  count?: string;
}

/** The interests that have their own page. */
export const collections: InterestCollection[] = [
  { title: 'Museums & places', href: '/interests/museums', blurb: 'Where I’ve been and the pieces worth the trip.', count: '12 places' },
  { title: 'Reading', href: '/interests/reading', blurb: 'Recently finished. Fiction, history, chess, engineering.', count: '6 books' },
  { title: 'Art', href: '/interests/art', blurb: 'What I’ve painted.', count: '3 canvases' },
  { title: 'Concerts', href: '/interests/concerts', blurb: 'Shows caught across two countries.', count: '8 shows' },
  { title: 'Quotes', href: '/interests/quotes', blurb: 'Lines I keep close.' },
];

export interface InterestNote {
  title: string;
  caption: string;
  image?: string;
  status?: string;
}

/** Smaller things — a photo and a line each. */
export const notes: InterestNote[] = [
  { title: 'Flying', caption: 'Flight lessons — this one with my dad in the right seat.', image: '/media/interests/flight_lessons_flight_with_dad.jpg' },
  { title: 'Surfing', caption: 'Cold-water Northern California.', image: '/media/interests/surfing_surf.jpg' },
  { title: 'Snowboarding', caption: 'Sierra season.', image: '/media/interests/snowboarding_snowboard.jpg' },
  { title: 'Golf', caption: 'Le golf.', image: '/media/interests/golfing_legolf.jpg' },
  { title: 'Hiking', caption: 'El Yunque, Puerto Rico.', image: '/media/interests/travel_puerto_rico_yunque.jpg' },
  { title: 'Cooking', caption: 'Weeknight practice.', image: '/media/interests/cooking_cooking.jpg' },
  { title: 'Tea', caption: 'A quiet ritual.', image: '/media/interests/tea_lovetea.jpg' },
  { title: 'Travel', caption: 'Florida coastline.', image: '/media/interests/travel_florida_florida.jpg' },
  { title: 'Gym', caption: 'The unglamorous baseline everything else runs on.' },
  { title: 'Dancing', caption: 'Mostly to the same artists in the concert list.' },
  { title: 'Sculpting', caption: 'Something I have yet to start.', status: 'planned' },
];
