import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: 'ax-strategy',
    slug: 'ax-strategy',
    title: 'AX Strategy & Service Design',
    subtitle: 'AI 전환 로드맵을 수립합니다',
    description:
      'AI가 가장 큰 가치를 창출하는 지점을 경영진과 함께 찾아내고, 이를 실현할 서비스 아키텍처를 설계합니다. 기회 발굴부터 청사진 도출까지, 비즈니스 전략과 AI 역량을 정렬합니다.',
    capabilities: [
      'AI Opportunity Assessment',
      'Service Blueprint & Roadmapping',
      'Stakeholder Alignment Workshops',
      'AX Maturity Evaluation',
      'ROI Modeling & Business Case',
    ],
    icon: 'Compass',
    order: 1,
  },
  {
    id: 'ai-product',
    slug: 'ai-product',
    title: 'AI Product Development',
    subtitle: '확장 가능한 AI 네이티브 제품을 만듭니다',
    description:
      'LLM 기반 애플리케이션부터 커스텀 모델 통합까지, 프로덕션에 바로 투입 가능한 AI 제품을 설계하고 개발합니다. 모델, 백엔드, UX를 아우르는 풀스택 구현을 담당합니다.',
    capabilities: [
      'LLM Integration & Fine-Tuning',
      'AI-Native UX Design',
      'Prompt Engineering & Evaluation',
      'RAG Architecture & Knowledge Bases',
      'Multimodal AI Applications',
    ],
    icon: 'Cpu',
    order: 2,
  },
  {
    id: 'ai-operations',
    slug: 'ai-operations',
    title: 'AI Operations & Workflow',
    subtitle: '업무 방식에 AI를 내재화합니다',
    description:
      'AI를 중심으로 기업 업무 프로세스를 재설계합니다. 반복 업무를 자동화하고, 지식 노동을 강화하며, 지속적으로 개선되는 지능형 운영 체계를 만들어냅니다.',
    capabilities: [
      'Intelligent Process Automation',
      'AI-Augmented Knowledge Workflows',
      'Data Pipeline Engineering',
      'AI Monitoring & Performance Ops',
      'Change Management & Enablement',
    ],
    icon: 'Workflow',
    order: 3,
  },
  {
    id: 'enterprise-delivery',
    slug: 'enterprise-delivery',
    title: 'Enterprise Digital Delivery',
    subtitle: '엔터프라이즈 품질과 속도로 납품합니다',
    description:
      '지속 가능한 엔터프라이즈 디지털 제품을 출시하기 위한 아키텍처, 인프라, 납품 체계를 갖추고 있습니다. 클라우드 네이티브, API 우선 방식으로 대규모 조직이 요구하는 엄밀함을 충족합니다.',
    capabilities: [
      'Cloud-Native Platform Engineering',
      'API-First Architecture',
      'Enterprise System Integration',
      'DevOps & CI/CD Implementation',
      'Security & Compliance Readiness',
    ],
    icon: 'Layers',
    order: 4,
  },
];
