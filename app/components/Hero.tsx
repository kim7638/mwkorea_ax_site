'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { caseStudies } from '../data/case-studies';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Reset interval on each slide change so manual navigation gives a full 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Slides — crossfade between case studies */}
      {caseStudies.map((cs, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={cs.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={!isActive}
          >
            {/* Mobile image */}
            <div className="absolute inset-0 sm:hidden">
              <Image
                src={cs.heroImages.mobile}
                alt={cs.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>

            {/* Tablet image */}
            <div className="absolute inset-0 hidden sm:block lg:hidden">
              <Image
                src={cs.heroImages.tablet}
                alt={cs.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>

            {/* Desktop image */}
            <div className="absolute inset-0 hidden lg:block">
              <Image
                src={cs.heroImages.pc}
                alt={cs.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </div>
        );
      })}

      {/* Gradient overlay — stronger at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Slide content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 sm:px-10 lg:px-20">
        {caseStudies.map((cs, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={cs.id}
              className={`max-w-2xl transition-all duration-500 ease-out ${
                isActive
                  ? 'opacity-100 translate-y-0'
                  : 'pointer-events-none absolute opacity-0 translate-y-3'
              }`}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                {cs.service}
              </p>
              <h2 className="mb-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {cs.title}
              </h2>
              <p className="mb-4 text-sm font-medium text-white/40">{cs.client}</p>
              <p className="max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                {cs.description}
              </p>
            </div>
          );
        })}

        {/* Navigation dots */}
        <div className="mt-10 flex items-center gap-3">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Show ${cs.title}`}
              className={`h-0.5 rounded-full transition-all duration-400 ${
                i === activeIndex
                  ? 'w-10 bg-white'
                  : 'w-5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}

          {/* Slide counter */}
          <span className="ml-2 text-xs font-medium tabular-nums text-white/30">
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(caseStudies.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}
