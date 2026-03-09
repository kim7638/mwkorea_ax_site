import Image from 'next/image';
import { CaseStudy } from '../data/case-studies';

interface Props {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-50">
        <Image
          src={study.thumbnail}
          alt={study.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
            {study.service}
          </p>
          <h3 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">{study.title}</h3>
          <p className="mb-4 text-sm font-medium text-gray-400">{study.client}</p>
          <p className="text-sm leading-relaxed text-gray-500">{study.description}</p>
        </div>

        <div className="mt-6 flex items-center gap-1 text-sm font-medium text-gray-900 transition-gap group-hover:gap-2">
          <span>View case study</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </article>
  );
}
