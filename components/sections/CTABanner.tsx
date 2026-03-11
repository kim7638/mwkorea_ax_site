import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Ready to build your AI advantage?",
  subtitle = "AI 서비스를 어떻게 설계하고 납품할 수 있는지, 함께 이야기해 보겠습니다.",
  primaryLabel = "대화 시작하기",
  primaryHref = "/contact",
  secondaryLabel = "작업물 보기",
  secondaryHref = "/portfolio",
}: CTABannerProps) {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-700 text-white leading-tight tracking-tight mb-5">
            {title}
          </h2>
          <p className="text-lg text-blue-200 leading-relaxed mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={primaryHref} variant="secondary" size="lg" className="bg-brand hover:bg-brand-dark">
              {primaryLabel}
              <ArrowRight size={16} />
            </Button>
            <Button
              href={secondaryHref}
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
