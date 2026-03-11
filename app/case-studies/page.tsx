import { Metadata } from 'next';
import PageContainer from '@/components/layout/PageContainer';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import CTABanner from '@/components/sections/CTABanner';
import { caseStudies } from '@/data/caseStudies';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'In-depth case studies from Mobile Works Korea — strategic AI transformations for Korea\'s leading enterprises.',
};

export default function CaseStudiesPage() {
  const published = caseStudies.filter((cs) => cs.published).sort((a, b) => a.order - b.order);

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface border-b border-gray-100">
        <PageContainer>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-700 text-gray-900 leading-tight tracking-tight mb-5">
              Deep-dive into our work.
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              모든 프로젝트 뒤에는 실제 문제, 깊이 고민한 접근법, 측정 가능한 성과가 있습니다. 저희가 어떻게 생각하고 무엇을 만드는지 확인해 보세요.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Case Studies List */}
      <section className="py-16 sm:py-24 bg-white">
        <PageContainer>
          <div className="space-y-6">
            {published.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} featured />
            ))}
          </div>
        </PageContainer>
      </section>

      <CTABanner
        title="Have a challenge worth solving?"
        subtitle="귀사도 이 목록에 함께하기를 바랍니다. 모든 케이스 스터디는 대화에서 시작되었습니다."
      />
    </>
  );
}
