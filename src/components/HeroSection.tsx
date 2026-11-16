import { ArrowRight, FileText } from 'lucide-react';
import { COLLEGE_IMAGES, INSTITUTIONAL_METRICS } from '../data/collegeData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onExplorePrograms: () => void;
  onOpenProspectus: () => void;
}

export function HeroSection({ onExplorePrograms, onOpenProspectus }: HeroSectionProps) {
  return (
    <section id="top" className="border-b border-slate-200 bg-[#FAF9F6]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Institutional Statement & Primary Action */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase text-[#8A5A10] mb-4">
                Kuniyamuthur, Coimbatore · Autonomous · Est. 1980
              </p>

              <h1 className="font-serif text-[clamp(2.25rem,4vw,3.65rem)] leading-[1.1] font-semibold tracking-tight text-[#0F2547] text-balance">
                Engineering Discipline &amp; Scholarly Rigor at the Western Ghats
              </h1>

              <p className="mt-6 text-base sm:text-[17px] leading-[1.68] text-slate-700 max-w-[60ch]">
                Sri Krishna College unites autonomous curricula in Engineering, Computing, Commerce,
                and Applied Sciences with Coimbatore’s precision manufacturing and technology
                corridor—preparing graduates for research leadership and global industry.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExplorePrograms}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#21a7bc] hover:bg-[#173666] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2547]"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenProspectus}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#0F2547] bg-[#6a8013] border border-slate-300 hover:border-[#0F2547] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2547]"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>2026 Prospectus</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Campus Focal Image */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[260px] sm:min-h-[340px] lg:min-h-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
              <ResilientImage
                src={COLLEGE_IMAGES.heroCampus}
                alt="Main academic quadrangle of Sri Krishna College in Kuniyamuthur, Coimbatore with the Western Ghats in the background"
                fallbackTitle="Kuniyamuthur Academic Quadrangle"
                className="w-full h-full lg:h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent"
              />
            </div>
            <p className="mt-2.5 text-xs font-serif italic text-slate-600">
              Fig. 1 — Main Academic Quadrangle, Sugunapuram, Kuniyamuthur, Coimbatore.
            </p>
          </div>
        </div>

        {/* Full-Width 4-Column Institutional Proof Strip */}
        <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {INSTITUTIONAL_METRICS.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F2547] tabular-nums">
                {item.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-slate-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
