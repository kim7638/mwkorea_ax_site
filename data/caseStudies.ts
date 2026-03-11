import { CaseStudy } from '@/types/caseStudy';

export const caseStudies: CaseStudy[] = [
  {
    id: 'skt-caliber',
    slug: 'skt-caliber',
    title: 'SKT X Caliber — AI Fitness Intelligence Platform',
    client: 'SK Telecom',
    industry: 'Telecom / Health & Wellness',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80',
    summary:
      'We partnered with SK Telecom to design and build Caliber — an AI-powered fitness coaching platform that delivers personalized training intelligence at scale, embedded within SKT\'s broader digital health ecosystem.',
    problem:
      'SK Telecom\'s digital health offering lacked meaningful personalization. Generic fitness content was failing to drive engagement, and retention metrics were declining. The challenge was to build something genuinely intelligent — not just a content library with a chatbot layer — that could serve millions of users across SKT\'s subscriber base.',
    approach:
      'We started with a deep discovery phase: mapping user behavior patterns, interviewing trainers and members, and auditing the competitive landscape across global fitness apps. From this, we designed an AI service architecture that placed adaptive coaching at its core — using behavioral signals to continuously refine each user\'s program. We then built iteratively with rapid prototyping and continuous user testing.',
    solution:
      'Caliber is an AI fitness coaching platform that generates personalized workout and nutrition programs using a combination of LLM reasoning, user biometric data, and behavioral feedback loops. The system learns from each session — adjusting intensity, volume, and content type based on adherence, performance, and user-reported experience. A conversational AI coach layer provides real-time guidance and motivation.',
    outcome:
      'Caliber launched to SKT\'s subscriber base with strong early metrics: 68% 30-day retention rate (vs. 31% industry benchmark), 4.6★ App Store rating within 60 days, and recognition as one of SKT\'s top-performing digital health initiatives. The platform architecture is now being extended to additional wellness verticals within SKT\'s ecosystem.',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1200&q=80',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&q=80',
    ],
    tags: ['AI Product', 'LLM', 'Health Tech', 'Mobile', 'UX Design'],
    year: 2024,
    featured: true,
    published: true,
    order: 1,
  },
  {
    id: 'kia-biz',
    slug: 'kia-biz',
    title: 'Kia Biz Mobility Platform',
    client: 'Kia Motors',
    industry: 'Automotive / Enterprise Mobility',
    heroImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&q=80',
    summary:
      'We designed and delivered the Kia Biz platform — an enterprise mobility management solution that enables corporate fleet operators to manage vehicles, drivers, and mobility costs through a unified AI-assisted dashboard.',
    problem:
      'Enterprise fleet management is operationally fragmented. Kia\'s B2B clients were managing driver allocation, vehicle maintenance schedules, fuel costs, and compliance requirements across disconnected tools. Kia needed a platform that could consolidate this complexity into a single, intelligent operations layer — and differentiate their fleet offering in a competitive market.',
    approach:
      'We conducted extensive operational research with fleet managers, finance teams, and drivers across three enterprise pilot accounts. This research surfaced a clear priority hierarchy: visibility first, automation second, intelligence third. We designed a platform architecture that delivered real-time fleet visibility as its core value, then layered in AI-driven recommendations and workflow automation as progressive enhancements.',
    solution:
      'Kia Biz is a web-based enterprise mobility platform featuring real-time fleet visibility, AI-driven maintenance prediction, intelligent driver-vehicle matching, and automated cost reporting. The platform integrates with Kia\'s vehicle telematics infrastructure to provide live operational data, and uses predictive models to flag maintenance needs before they become operational disruptions. A mobile companion app provides driver-facing tools for trip logging, expense capture, and communication.',
    outcome:
      'Deployed across 12 enterprise accounts in the first 6 months, Kia Biz reduced fleet operational costs by an average of 23% through optimized vehicle utilization and proactive maintenance scheduling. Average maintenance delay incidents dropped by 41%. The platform is now the foundation of Kia\'s B2B mobility commercial strategy in Korea, with planned expansion to Southeast Asian markets.',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200&q=80',
    ],
    tags: ['Enterprise Platform', 'Fleet Management', 'AI Operations', 'B2B', 'Mobile'],
    year: 2023,
    featured: true,
    published: true,
    order: 2,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug && cs.published);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured && cs.published).sort((a, b) => a.order - b.order);
}
