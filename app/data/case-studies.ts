export interface CaseStudy {
  id: string;
  title: string;
  service: string;
  client: string;
  description: string;
  heroImages: {
    pc: string;
    tablet: string;
    mobile: string;
  };
  thumbnail: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'xcaliber',
    title: 'SKT X Caliber',
    service: 'Responsive Web',
    client: 'SK Telecom',
    description:
      'AI-powered diagnostic assistant that enables veterinarians to analyse X-rays and manage patient records from any browser — no installation required.',
    heroImages: {
      pc: '/images/case-studies/xcaliber/top-bg-pc.jpg',
      tablet: '/images/case-studies/xcaliber/top-bg-tablet.jpg',
      mobile: '/images/case-studies/xcaliber/top-bg-mobile.jpg',
    },
    thumbnail: '/images/case-studies/xcaliber/SktXCaliber.jpg',
  },
  {
    id: 'kia-biz',
    title: 'Kia Biz',
    service: 'Mobile App · Media',
    client: 'Kia Motors',
    description:
      'Eco-friendly EV mobility subscription platform for enterprise fleets — enabling businesses and public institutions to share electric vehicles across work and personal use.',
    heroImages: {
      pc: '/images/case-studies/kia-biz/top-bg-pc.jpg',
      tablet: '/images/case-studies/kia-biz/top-bg-tablet.jpg',
      mobile: '/images/case-studies/kia-biz/top-bg-mobile.jpg',
    },
    thumbnail: '/images/case-studies/kia-biz/KiaBiz.jpg',
  },
];
