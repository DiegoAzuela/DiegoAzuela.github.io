export const site = {
  name: 'Diego A Azuela R',
  fullName: 'Diego Arnoldo Azuela Rosas',
  role: 'Engineer — Test & Systems',
  location: 'San Francisco, CA',
  email: 'diego.azuela@gmail.com',
  phone: '(209) 401-7675',
  linkedin: 'linkedin.com/in/diegoarnoldoazuelarosas',
  github: 'github.com/DiegoAzuela',
  description:
    'Software engineer with 3+ years at Tesla building production Go and Python systems across high-voltage energy storage, humanoid robotics, and vehicle platforms. Published researcher at Harvard Medical School.',
  // Hero words — clickable, each jumps to a domain on the Work page.
  domains: [
    { label: 'Healthcare', href: '/work#healthcare' },
    { label: 'Space', href: '/work#space' },
    { label: 'Manufacturing', href: '/work#manufacturing' },
  ],
  socials: [
    { label: 'Email', href: 'mailto:diego.azuela@gmail.com', icon: 'email' },
    { label: 'GitHub', href: 'https://github.com/DiegoAzuela', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diegoarnoldoazuelarosas/', icon: 'linkedin' },
    { label: 'Goodreads', href: 'https://www.goodreads.com/user/show/195264600-diego-azuela', icon: 'goodreads' },
    { label: 'Instagram', href: 'https://www.instagram.com/diegoazuela/', icon: 'instagram' },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Research', href: '/research' },
    { label: 'Interests', href: '/interests' },
    { label: 'Projects', href: '/projects' },
  ],
};

export type Social = (typeof site.socials)[number];
