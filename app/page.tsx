import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Cpu, Workflow, Layers, TrendingUp, Shield, Zap } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import PortfolioCard from '@/components/cards/PortfolioCard';
import CTABanner from '@/components/sections/CTABanner';
import { getFeaturedCaseStudies } from '@/data/caseStudies';
import { getPublishedPortfolioItems } from '@/data/portfolio';
import { services } from '@/data/services';

const stats = [
  { value: '50+', label: '엔터프라이즈 고객사' },
  { value: '12+', label: '업력' },
  { value: '200+', label: 'AI 프로젝트 완료' },
  { value: '98%', label: '고객 만족도' },
];

const aiPillars = [
  {
    icon: TrendingUp,
    title: 'Strategy-Led',
    description: '모든 프로젝트는 기술이 아닌 비즈니스 가치에서 시작합니다. 실질적인 성과를 만드는 방향으로 AI 투자를 설계합니다.',
  },
  {
    icon: Zap,
    title: 'Build-Ready',
    description: '전략에서 실제 서비스까지 직접 구현합니다. 보고서와 제안서에 그치지 않고, 작동하는 AI 제품을 만들어냅니다.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade',
    description: '보안, 컴플라이언스, 확장성을 처음부터 고려해 설계합니다. 대기업이 요구하는 수준의 속도와 엄밀함으로 일합니다.',
  },
];

const serviceIcons: Record<string, React.ElementType> = {
  Compass, Cpu, Workflow, Layers,
};

export default function HomePage() {
  const featuredCaseStudies = getFeaturedCaseStudies();
  const portfolioItems = getPublishedPortfolioItems().slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
        {/* Background geometric accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50/60 to-transparent" />
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-brand/5 blur-3xl" />
          <div className="absolute -bottom-20 right-40 w-72 h-72 rounded-full bg-navy/5 blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#0A1F5C 1px, transparent 1px), linear-gradient(to right, #0A1F5C 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
        </div>

        <PageContainer className="relative z-10 py-20 sm:py-28 lg:py-36">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-brand-light border border-brand/20 rounded-full px-4 py-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-xs font-semibold text-brand uppercase tracking-widest">
                  Enterprise AI Service Builder
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-800 text-gray-900 leading-[1.05] tracking-tight mb-6">
              We build{' '}
              <span className="relative">
                <span className="text-brand">AI services</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand/30 rounded-full"
                  aria-hidden
                />
              </span>
              {' '}that<br className="hidden sm:block" /> transform enterprises.
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl">
              AI 서비스를 직접 구축하고, 기업 서비스가 AI로 만들어지는 방식을 바꿉니다 —
              전략과 설계부터 프로덕션 납품과 운영까지.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/case-studies" variant="primary" size="lg">
                View Case Studies
                <ArrowRight size={16} />
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-12 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-display font-700 text-navy">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ── What We Build ── */}
      <section className="py-20 sm:py-28 bg-surface">
        <PageContainer>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
            <SectionHeader
              eyebrow="What We Build"
              title="Four service pillars."
              subtitle="전략 수립부터 운영까지, AI 서비스 전 주기를 아우르는 역량을 제공합니다."
            />
            <Button href="/services" variant="outline" size="md" className="self-start lg:self-end flex-shrink-0">
              All Services
              <ArrowRight size={14} />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon] || Layers;
              return (
                <div
                  key={service.id}
                  className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center mb-5">
                    <Icon size={20} className="text-brand" />
                  </div>
                  <p className="text-xs text-brand font-semibold tracking-widest uppercase mb-2">
                    {`0${service.order}`}
                  </p>
                  <h3 className="font-display font-semibold text-gray-900 text-base leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* ── Featured Case Studies ── */}
      <section className="py-20 sm:py-28 bg-white">
        <PageContainer>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
            <SectionHeader
              eyebrow="Featured Case Studies"
              title="Work that speaks for itself."
              subtitle="대한민국 주요 기업들과의 긴밀한 파트너십, 처음부터 끝까지 책임지고 완성합니다."
            />
            <Button href="/case-studies" variant="outline" size="md" className="self-start lg:self-end flex-shrink-0">
              All Case Studies
              <ArrowRight size={14} />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredCaseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ── How We Work With AI ── */}
      <section className="py-20 sm:py-28 bg-navy">
        <PageContainer>
          <SectionHeader
            eyebrow="How We Work"
            title="AI that actually ships."
            subtitle="컨설팅의 엄밀함과 엔지니어링 실행력을 결합합니다. 서랍 속에 잠자는 전략 보고서는 만들지 않습니다."
            className="text-white [&_h2]:text-white [&_p]:text-blue-200 [&_.text-brand]:text-blue-300 mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-brand/20 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-blue-300" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-3">{pillar.title}</h3>
                  <p className="text-sm text-blue-200 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* ── Portfolio Preview ── */}
      <section className="py-20 sm:py-28 bg-white">
        <PageContainer>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
            <SectionHeader
              eyebrow="Portfolio"
              title="Selected work."
              subtitle="통신, 자동차, 핀테크 등 다양한 산업 분야의 프로젝트 모음입니다."
            />
            <Button href="/portfolio" variant="outline" size="md" className="self-start lg:self-end flex-shrink-0">
              View All Projects
              <ArrowRight size={14} />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ── Clients ── */}
      <section className="py-14 border-t border-gray-100 bg-surface">
        <PageContainer>
          <p className="text-xs text-gray-400 uppercase tracking-widest text-center mb-10">
            대한민국 주요 기업들이 신뢰합니다
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {['SK Telecom', 'Kia Motors', 'Lotte Group', 'Hyundai', 'Kakao', 'KB Financial'].map((client) => (
              <span
                key={client}
                className="text-sm font-display font-semibold text-gray-300 hover:text-gray-500 transition-colors cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ── CTA ── */}
      <CTABanner />
    </>
  );
}
