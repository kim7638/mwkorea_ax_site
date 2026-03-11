import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import Badge from '@/components/ui/Badge';
import CTABanner from '@/components/sections/CTABanner';
import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.filter((cs) => cs.published).map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return { title: 'Not Found' };
  return { title: cs.title, description: cs.summary };
}

const SectionBlock = ({ label, content }: { label: string; content: string }) => (
  <div className="py-10 border-b border-gray-100 last:border-0">
    <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">{label}</p>
    <p className="text-gray-600 leading-relaxed max-w-3xl">{content}</p>
  </div>
);

export default function CaseStudyDetailPage({ params }: Props) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[65vh] overflow-hidden bg-gray-900">
        <Image
          src={cs.heroImage}
          alt={cs.title}
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <PageContainer>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={15} />
              All Case Studies
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="brand">{cs.client}</Badge>
              <Badge className="bg-white/10 text-white border-white/20 border">{cs.industry}</Badge>
              <Badge className="bg-white/10 text-white border-white/20 border">{cs.year}</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-700 text-white leading-tight tracking-tight max-w-3xl">
              {cs.title}
            </h1>
          </PageContainer>
        </div>
      </section>

      {/* Summary */}
      <section className="py-14 bg-surface border-b border-gray-100">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">Overview</p>
              <p className="text-xl text-gray-700 leading-relaxed">{cs.summary}</p>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Client</p>
                <p className="text-sm font-semibold text-gray-900">{cs.client}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Industry</p>
                <p className="text-sm font-semibold text-gray-900">{cs.industry}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Year</p>
                <p className="text-sm font-semibold text-gray-900">{cs.year}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((tag) => (
                    <Badge key={tag} variant="subtle">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Content Sections */}
      <section className="bg-white py-4">
        <PageContainer>
          <SectionBlock label="The Problem" content={cs.problem} />
          <SectionBlock label="Our Approach" content={cs.approach} />
          <SectionBlock label="The Solution" content={cs.solution} />
          <SectionBlock label="Outcome" content={cs.outcome} />
        </PageContainer>
      </section>

      {/* Gallery */}
      {cs.images.length > 0 && (
        <section className="py-14 bg-surface border-t border-gray-100">
          <PageContainer>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Project Images</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cs.images.map((img, i) => (
                <div key={i} className="relative h-56 sm:h-64 rounded-xl overflow-hidden bg-gray-200">
                  <Image
                    src={img}
                    alt={`${cs.title} image ${i + 1}`}
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
        title="Inspired by this project?"
        subtitle="We're always looking for the next ambitious challenge. Let's explore what we can build together."
      />
    </>
  );
}
