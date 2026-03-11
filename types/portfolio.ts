export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  thumbnail: string;
  shortDescription: string;
  overview: string;
  description: string;
  images: string[];
  tags: string[];
  year: number;
  published: boolean;
  order: number;
}
