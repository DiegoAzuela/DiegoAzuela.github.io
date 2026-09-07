export interface Project {
  slug: string;
  title: string;
  blurb: string;
  stack: string[];
  repo?: string;
  demo?: string;
  image?: string;
  year?: string;
}

export const projects: Project[] = [
  {
    slug: 'company-valuation',
    title: 'Company Valuation',
    blurb:
      'A finance toolkit for building and comparing company valuations — DCF, comparables, and scenario analysis over public filings.',
    stack: ['Python'],
    repo: 'https://github.com/DiegoAzuela/CompanyValuation',
    year: '2025',
  },
];
