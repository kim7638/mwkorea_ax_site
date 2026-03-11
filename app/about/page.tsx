import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'About',
  description: 'Mobile Works Korea — enterprise AI service builder based in Seoul, South Korea.',
};

const milestones = [
  { year: '2012', event: '모바일 우선 디지털 에이전시로 서울에서 창업.' },
  { year: '2015', event: '국내 주요 대기업에 첫 엔터프라이즈 디지털 플랫폼 납품.' },
  { year: '2018', event: 'AI 사업부 런칭 — 국내 최초로 LLM을 기업 제품에 내재화한 회사 중 하나.' },
  { year: '2020', event: 'SK텔레콤과 파트너십 체결, Caliber AI 피트니스 플랫폼 구축.' },
  { year: '2022', event: '기아 Biz 엔터프라이즈 모빌리티 플랫폼 납품, 자동차 분야로 사업 확장.' },
  { year: '2024', event: 'AX(AI 전환) 서비스 라인 공식화. 8개 산업 분야에 걸쳐 50개 이상의 엔터프라이즈 고객사 확보.' },
];

const philosophy = [
  {
    title: 'Value before technology.',
    body: '모든 프로젝트는 이미 가진 솔루션을 제안하는 것이 아니라, AI가 실제 비즈니스 가치를 만드는 지점을 묻는 것에서 시작합니다. 기술은 도구이고, 가치가 목표입니다.',
  },
  {
    title: 'Strategy that ships.',
    body: '작동하는 소프트웨어로 이어지지 않는 전략은 미완성이라고 생각합니다. 같은 팀이 동일한 프로젝트 안에서 설계와 구현을 함께 진행하며, 비전과 납품 사이의 간극을 없앱니다.',
  },
  {
    title: 'Long-term partnership.',
    body: '최고의 성과는 시간을 두고 신뢰를 쌓을 때 나옵니다. 외부 벤더가 아닌 내부 파트너처럼 함께 일하며, 결과에 대한 책임을 공유합니다.',
  },
];

const clients = [
  'SK Telecom', 'Kia Motors', 'Lotte Group',
  'Hyundai Motor Group', 'Kakao Corp', 'KB Financial Group',
  'Samsung SDS', 'LG CNS', 'CJ Group', 'Shinhan Financial',
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-navy">
        <PageContainer>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-4">About</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-700 text-white leading-tight tracking-tight mb-5">
              Built to build AI services that matter.
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed">
              Mobile Works Korea는 서울에 본사를 둔 엔터프라이즈 AI 서비스 전문 기업입니다. 대한민국 최대 기업들과 파트너십을 맺고, AI 서비스를 설계·구축·운영하여 일하는 방식과 경쟁력을 변화시킵니다.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Company Introduction */}
      <section className="py-20 sm:py-28 bg-white">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="An enterprise AI firm, not a consultancy."
                className="mb-6"
              />
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <p>
                  Mobile Works Korea는 디지털 제품이 더 유용하고, 더 지능적이며, 비즈니스 성과와 더 긴밀하게 연결될 수 있다는 믿음으로 2012년에 창업했습니다. 12년에 걸쳐 모바일 우선 에이전시에서 대한민국 대표 엔터프라이즈 AI 서비스 빌더로 성장했습니다.
                </p>
                <p>
                  경영진과 함께 AI가 기업 가치를 만드는 지점을 파악하고, 그것을 실현하는 시스템을 직접 구축합니다. 자문 보고서가 아닌, 실제 제품·실제 통합·실제 운영을 의미합니다.
                </p>
                <p>
                  비즈니스 전략 전문성과 AI·소프트웨어 엔지니어링 역량을 한 팀에서 결합합니다. 이 조합은 드물고, 그것이 고객사들이 계속 돌아오는 이유입니다.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2012', label: '설립' },
                { value: '50+', label: '엔터프라이즈 고객사' },
                { value: '200+', label: '프로젝트 완료' },
                { value: '서울', label: '본사' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-surface border border-gray-100 text-center">
                  <p className="text-3xl font-display font-700 text-navy mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* History Timeline */}
      <section className="py-20 sm:py-28 bg-surface border-t border-gray-100">
        <PageContainer>
          <SectionHeader
            eyebrow="History"
            title="Twelve years in the making."
            subtitle="12년간의 여정."
            className="mb-14"
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 sm:gap-12 items-start">
                  <div className="relative flex-shrink-0 w-12 text-right">
                    <span className="text-sm font-display font-700 text-brand">{m.year}</span>
                    <div className="absolute top-2 -right-[1.35rem] w-2 h-2 rounded-full bg-brand border-2 border-white hidden sm:block" />
                  </div>
                  <div className="pb-2">
                    <p className="text-gray-600 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <PageContainer>
          <SectionHeader
            eyebrow="Philosophy"
            title="How we think about our work."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophy.map((p) => (
              <div key={p.title} className="p-7 rounded-2xl bg-surface border border-gray-100">
                <h3 className="font-display font-semibold text-gray-900 text-lg mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Major Clients */}
      <section className="py-20 sm:py-28 bg-surface border-t border-gray-100">
        <PageContainer>
          <SectionHeader
            eyebrow="Major Clients"
            title="Trusted by Korea's best companies."
            subtitle="대한민국 최고의 기업들이 신뢰합니다."
            align="center"
            className="mb-12"
          />
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="px-5 py-3 bg-white border border-gray-100 rounded-xl text-sm font-display font-semibold text-gray-500 hover:text-gray-900 hover:border-gray-200 hover:shadow-sm transition-all cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <CTABanner
        title="Join us or work with us."
        subtitle="뛰어난 인재와 의미 있는 도전을 항상 환영합니다. 두 가지 모두 같은 방식으로 시작됩니다."
        primaryLabel="연락하기"
        secondaryLabel="작업물 보기"
        secondaryHref="/portfolio"
      />
    </>
  );
}
