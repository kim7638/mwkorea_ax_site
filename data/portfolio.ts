import { PortfolioItem } from '@/types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'skt-caliber',
    slug: 'skt-caliber',
    title: 'SKT X Caliber',
    client: 'SK Telecom',
    industry: 'Health & Wellness',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    shortDescription: 'AI-powered fitness coaching platform delivering personalized training intelligence at scale.',
    overview: 'A flagship AI fitness product built in partnership with SK Telecom, serving millions of subscribers through adaptive coaching and behavioral intelligence.',
    description:
      'Caliber is an AI fitness coaching platform that generates personalized workout and nutrition programs using LLM reasoning, user biometric data, and behavioral feedback loops. Built for SKT\'s digital health ecosystem, it delivers genuine personalization at subscriber scale.',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1200&q=80',
    ],
    tags: ['AI Product', 'LLM', 'Health Tech', 'Mobile'],
    year: 2024,
    published: true,
    order: 1,
  },
  {
    id: 'kia-biz',
    slug: 'kia-biz',
    title: 'Kia Biz Mobility Platform',
    client: 'Kia Motors',
    industry: 'Automotive / Enterprise Mobility',
    thumbnail: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    shortDescription: 'Enterprise fleet management platform with AI-driven operations and cost optimization.',
    overview: 'A B2B mobility management solution enabling corporate fleet operators to manage vehicles, drivers, and costs through a unified AI-assisted dashboard.',
    description:
      'Kia Biz consolidates fleet management complexity into a single intelligent operations layer — featuring real-time visibility, predictive maintenance, and automated cost reporting. Built on Kia\'s telematics infrastructure with a mobile companion for drivers.',
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
    ],
    tags: ['Enterprise Platform', 'Fleet Management', 'B2B'],
    year: 2023,
    published: true,
    order: 2,
  },
  {
    id: 'lotte-ai-concierge',
    slug: 'lotte-ai-concierge',
    title: 'Lotte AI Concierge',
    client: 'Lotte Group',
    industry: 'Retail / E-Commerce',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    shortDescription: 'Conversational AI shopping assistant embedded across Lotte\'s retail ecosystem.',
    overview: 'An AI-powered concierge experience that guides customers through product discovery, personalized recommendations, and seamless purchase across Lotte\'s online and offline channels.',
    description:
      'Lotte AI Concierge integrates large language models with Lotte\'s product catalog and customer data to deliver contextually intelligent shopping assistance. The system supports Korean and English, handles complex multi-product queries, and connects to live inventory and loyalty systems.',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    ],
    tags: ['Conversational AI', 'Retail', 'LLM', 'Omnichannel'],
    year: 2024,
    published: true,
    order: 3,
  },
  {
    id: 'hyundai-dx-portal',
    slug: 'hyundai-dx-portal',
    title: 'Hyundai DX Intelligence Portal',
    client: 'Hyundai Motor Group',
    industry: 'Automotive / Manufacturing',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    shortDescription: 'Internal AI intelligence platform enabling data-driven decision-making across global operations.',
    overview: 'A centralized digital intelligence portal connecting Hyundai\'s global operations data with AI-powered analytics, enabling leadership to monitor, analyze, and act on operational signals in real time.',
    description:
      'The Hyundai DX Portal aggregates manufacturing, logistics, and sales data across 12 global markets into a unified intelligence dashboard. AI models surface anomalies, forecast demand, and recommend operational adjustments — shifting decision-making from reactive to predictive.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    ],
    tags: ['Enterprise Platform', 'AI Analytics', 'Manufacturing', 'Dashboard'],
    year: 2023,
    published: true,
    order: 4,
  },
  {
    id: 'kakao-workflow-ai',
    slug: 'kakao-workflow-ai',
    title: 'Kakao Enterprise Workflow AI',
    client: 'Kakao Corp',
    industry: 'Technology / SaaS',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    shortDescription: 'AI-augmented workflow automation platform for Kakao\'s enterprise product suite.',
    overview: 'We designed the AI workflow layer for Kakao\'s enterprise collaboration suite — embedding intelligent automation into document processing, meeting summarization, and task management.',
    description:
      'Kakao Enterprise Workflow AI introduces AI-native capabilities into knowledge work: automatic meeting transcription and action item extraction, document intelligence for contract review, and smart task routing based on team capacity and expertise. Built to integrate seamlessly with existing Kakao enterprise tooling.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
    ],
    tags: ['AI Operations', 'Workflow Automation', 'SaaS', 'Enterprise'],
    year: 2024,
    published: true,
    order: 5,
  },
  {
    id: 'kb-financial-ai',
    slug: 'kb-financial-ai',
    title: 'KB Financial AI Advisory',
    client: 'KB Financial Group',
    industry: 'Financial Services',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    shortDescription: 'AI-powered financial advisory platform delivering personalized wealth guidance at scale.',
    overview: 'A digital wealth advisory service that uses AI to deliver personalized financial planning, investment insights, and risk assessment to KB\'s retail banking customers.',
    description:
      'KB Financial AI Advisory transforms passive banking customers into active financial planners through AI-driven personalization. The platform analyzes spending patterns, investment portfolios, and market conditions to generate contextually relevant guidance — delivered through a conversational interface embedded in KB\'s mobile banking app.',
    images: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80',
    ],
    tags: ['FinTech', 'AI Advisory', 'Conversational AI', 'Mobile'],
    year: 2023,
    published: true,
    order: 6,
  },
];

export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug && item.published);
}

export function getPublishedPortfolioItems(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.published).sort((a, b) => a.order - b.order);
}
