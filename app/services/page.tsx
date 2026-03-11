import { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/cards/ServiceCard';
import CTABanner from '@/components/sections/CTABanner';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'AX Strategy, AI Product Development, AI Operations & Workflow, and Enterprise Digital Delivery.',
};

const processSteps = [
  { step: '01', title: 'Discovery', description: '구조화된 워크숍과 리서치를 통해 비즈니스 맥락, AI 성숙도, 가치 기회를 파악합니다.' },
  { step: '02', title: 'Design', description: '도출된 인사이트를 서비스 청사진, 제품 아키텍처, 구현 로드맵으로 전환합니다.' },
  { step: '03', title: 'Build', description: '엔지니어링·디자인 팀이 반복적으로 구축하며, 첫 스프린트부터 작동하는 소프트웨어를 납품합니다.' },
  { step: '04', title: 'Scale', description: 'AI 역량을 운영에 내재화하고, 팀 교육과 지속적인 개선 체계 구축을 지원합니다.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface border-b border-gray-100">
        <PageContainer>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-700 text-gray-900 leading-tight tracking-tight mb-5">
              AX Capabilities Built for Enterprise
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              전략 수립부터 운영까지, AI 전환에 필요한 모든 서비스를 제공합니다. 모든 역량은 비즈니스 가치와 AI 실행을 연결하는 데 초점을 맞추고 있습니다.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 bg-white" id="services">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} id={service.slug}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* How We Work */}
      <section className="py-20 sm:py-28 bg-surface border-t border-gray-100">
        <PageContainer>
          <SectionHeader
            eyebrow="Our Process"
            title="How an engagement works."
            subtitle="200개 이상의 엔터프라이즈 프로젝트를 통해 검증된 납품 모델입니다."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="relative">
                <div className="text-5xl font-display font-700 text-gray-100 mb-4">{s.step}</div>
                <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Why MWK */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Mobile Works Korea"
                title="Strategy and delivery. In one team."
                subtitle="대부분의 회사는 둘 중 하나만 합니다. 저희는 같은 팀으로 발굴부터 프로덕션까지 모두 합니다."
                className="mb-8"
              />
              <ul className="space-y-4">
                {[
                  'LLM, 자동화, 데이터 시스템에 걸친 깊은 AI 전문성',
                  '국내 대기업 문화와 요구사항에 대한 현장 이해',
                  '워크숍부터 작동하는 소프트웨어까지 엔드투엔드 역량',
                  '통신, 자동차, 유통, 금융 분야의 검증된 납품 이력',
                  '처음부터 관리자 주도 운영을 고려한 아키텍처 설계',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-brand mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Talk to Our Team
                  <ArrowRight size={15} />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '50+', label: '엔터프라이즈 고객사' },
                { value: '200+', label: '프로젝트 완료' },
                { value: '12+', label: '업력' },
                { value: '98%', label: '고객 유지율' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-surface border border-gray-100 text-center">
                  <p className="text-4xl font-display font-700 text-navy mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <CTABanner
        title="Ready to start your AX journey?"
        subtitle="모든 프로젝트는 집중적인 발굴 세션으로 시작합니다. AI가 귀사의 비즈니스에 무엇을 할 수 있는지 함께 정의해 보겠습니다."
        primaryLabel="발굴 미팅 예약하기"
        secondaryLabel="케이스 스터디 보기"
        secondaryHref="/case-studies"
      />
    </>
  );
}
