import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { CaseStudy } from '@/types/caseStudy';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
}

export default function CaseStudyCard({ caseStudy, featured = false }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className={cn(
        'group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
        featured && 'md:flex'
      )}
    >
      {/* Image */}
      <div
        className={cn(
          'relative overflow-hidden bg-gray-100',
          featured ? 'md:w-1/2 h-64 md:h-72' : 'h-52'
        )}
      >
        {caseStudy.heroImage ? (
          <img
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <Badge variant="brand">{caseStudy.year}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className={cn('p-6', featured && 'md:w-1/2 md:flex md:flex-col md:justify-center md:p-8')}>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="subtle">{caseStudy.client}</Badge>
          <Badge>{caseStudy.industry}</Badge>
        </div>
        <h3 className={cn(
          'font-display font-semibold text-gray-900 leading-snug mb-3 group-hover:text-brand transition-colors',
          featured ? 'text-2xl' : 'text-lg'
        )}>
          {caseStudy.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">
          {caseStudy.summary}
        </p>
        <div className="flex items-center gap-2 text-brand text-sm font-semibold">
          Read Case Study
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
