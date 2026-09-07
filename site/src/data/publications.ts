export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: number;
  doi?: string;
  url: string;
  image?: string;
  role: string;
}

export const publications: Publication[] = [
  {
    authors: 'Jeong, S.-H., et al.',
    title:
      'Intelligent In situ Printing of Multimaterial Bioinks for First-Aid Wound Care Guided by Eye-In-Hand Robot Technology',
    venue: 'Advanced Materials Technologies',
    year: 2024,
    doi: '10.1002/admt.202400060',
    url: 'https://doi.org/10.1002/admt.202400060',
    image: '/media/research/Advanced_Technologies.jpg',
    role: 'Robotic control software — 6-DOF bioprinter, OpenCV depth sensing, path planning.',
  },
  {
    authors: 'Rezaei, Z., et al.',
    title:
      'Noninvasive and Continuous Monitoring of On-Chip Stem Cell Osteogenesis Using a Reusable Electrochemical Immunobiosensor',
    venue: 'ACS Sensors',
    year: 2024,
    doi: '10.1021/acssensors.3c02165',
    url: 'https://pubs.acs.org/doi/10.1021/acssensors.3c02165',
    image: '/media/research/ACS_Sensors.jpg',
    role: 'Biosensor data-acquisition and signal-processing pipeline for a microfluidic bioreactor.',
  },
];

export interface Talk {
  title: string;
  event: string;
  org: string;
  year: number;
  body: string;
  image?: string;
  link?: { href: string; label: string };
}

export const talks: Talk[] = [
  {
    title: 'SPES: Synthesis of Bio-nano Polymers for Enhanced Surface Barrier Properties in Space',
    event: 'CONACES — First National Congress of Space Activities',
    org: 'Mexican Aerospace Agency',
    year: 2020,
    body: 'Presented the SPES project as a speaker: the electronic and control system design for a year-long aerospace experiment testing a food-preservation solution aboard the ISS.',
    image: '/media/research/Bartolomeo_BlankBackground.jpg',
  },
  {
    title: 'Access to Space with the ISS Bartolomeo Platform — Finalist',
    event: 'United Nations Office for Outer Space Affairs / Airbus',
    org: 'UNOOSA · Airbus',
    year: 2020,
    body: 'SPES was pre-selected as one of three finalist projects in the first cycle of the programme.',
    link: { href: '/media/research/Bartolomeo-Finalists-Letter.pdf', label: 'Finalist letter (PDF)' },
  },
];

// Pending assets from Diego: 3D render of the 6-DOF robotic arm; CONACES talk photo/video.
