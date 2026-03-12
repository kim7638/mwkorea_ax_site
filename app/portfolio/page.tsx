import { Metadata } from 'next';
import PageContainer from '@/components/layout/PageContainer';
import PortfolioCard from '@/components/cards/PortfolioCard';
import CTABanner from '@/components/sections/CTABanner';
import { getSupabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A selection of AI and enterprise digital projects delivered by Mobile Works Korea.',
};

export default async function PortfolioPage() {
  const { data: items } = await getSupabaseAdmin()
    .from('portfolio_items')
    .select('id, title, slug, short_description, thumbnail_url, client, industry, year, tags, sort_order')
    .eq('is_published', true)
    .order('sort_order', { ascending: true });

  // Map Supabase fields to PortfolioCard-compatible shape
  const published = (items || []).map((item) => ({
    id: item.id,
    slug: item.slug,
    title: item.title,
    client: item.client || '',
    industry: item.industry || '',
    thumbnail: item.thumbnail_url || '',
    shortDescription: item.short_description || '',
    overview: item.short_description || '',
    description: item.short_description || '',
    images: [],
    tags: item.tags || [],
    year: item.year || new Date().getFullYear(),
    published: true,
    order: item.sort_order,
  }));

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface border-b border-gray-100">
        <PageContainer>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-700 text-gray-900 leading-tight tracking-tight mb-5">
              Projects we're proud of.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              From AI-powered consumer products to enterprise operations platforms — a selection of work across industries and technology domains.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {published.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </PageContainer>
      </section>

      <CTABanner
        title="Interested in working with us?"
        subtitle="We're selective about the projects we take on. If you have an ambitious AI challenge, let's talk."
      />
    </>
  );
}
