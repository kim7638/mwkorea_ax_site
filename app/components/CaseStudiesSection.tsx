import { caseStudies } from '../data/case-studies';
import CaseStudyCard from './CaseStudyCard';

export default function CaseStudiesSection() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Selected Works
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Case Studies</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
