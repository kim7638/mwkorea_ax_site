import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import Badge from '@/components/ui/Badge';
import CTABanner from '@/components/sections/CTABanner';
import { getPortfolioItemBySlug, getPublishedPortfolioItems } from '@/data/portfolio';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const items = getPublishedPortfolioItems();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getPortfolioItemBySlug(params.slug);
  if (!item) return { title: 'Not Found' };
  return {
    title: item.title,
    description: item.shortDescription,
  };
}

export default function PortfolioDetailPage({ params }: Props) {
  const item = getPortfolioItemBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-24 bg-surface border-b border-gray-100">
        <PageContainer className="py-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge variant="brand">{item.client}</Badge>
                <Badge variant="subtle">{item.industry}</Badge>
                <Badge>{item.year}</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-700 text-gray-900 leading-tight tracking-tight mb-5">
                {item.title}
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                {item.overview}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Description */}
      <section className="py-16 sm:py-24 bg-white">
        <PageContainer>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">Project Overview</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Image Gallery */}
      {item.images.length > 0 && (
        <section className="pb-16 sm:pb-24 bg-white">
          <PageContainer>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Gallery</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {item.images.map((img, i) => (
                <div key={i} className="relative h-52 sm:h-60 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={img}
                    alt={`${item.title} image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </PageContainer>
        </section>
      )}

      <CTABanner
        title="Want to build something like this?"
        subtitle="Let's talk about your project. We'd love to understand your challenge and see if we're the right fit."
      />
    </>
  );
}
