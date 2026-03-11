export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  heroImage: string;
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
  images: string[];
  tags: string[];
  year: number;
  featured: boolean;
  published: boolean;
  order: number;
}
