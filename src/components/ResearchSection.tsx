import { RESEARCH_CENTERS } from '../data/collegeData';
import { ResilientImage } from './ResilientImage';

export function ResearchSection() {
  const [featuredCenter, ...secondaryCenters] = RESEARCH_CENTERS;

  return (
    <section id="research" className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider uppercase text-[#8A5A10]">
              02. Research &amp; Centres of Excellence
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#0F2547] text-balance">
              Applied Innovation Anchored in Coimbatore Industry
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Supported by DST-FIST, AICTE MODROBS, and regional industrial consortia, faculty and
            scholars translate laboratory prototypes into deployable patents.
          </p>
        </div>

        {/* Asymmetric Bento Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Primary Featured Research Center */}
          <article className="lg:col-span-7 bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col">
            {featuredCenter.image && (
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
                <ResilientImage
                  src={featuredCenter.image}
                  alt="Students and researchers working with robotic arms inside the Centre for Autonomous Systems at Sri Krishna College"
                  fallbackTitle={featuredCenter.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center flex-wrap gap-2 text-xs text-slate-500">
                  <span className="font-mono text-[#8A5A10]">{featuredCenter.index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredCenter.department}</span>
                  <span aria-hidden="true">·</span>
                  <span>Lead: {featuredCenter.leadInvestigator}</span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-semibold text-[#0F2547]">
                  {featuredCenter.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {featuredCenter.description}
                </p>

                <p className="mt-4 text-xs text-slate-500">
                  Focus: {featuredCenter.focusAreas.join(' · ')}
                </p>
              </div>

              <dl className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-3 gap-4">
                <div>
                  <dt className="text-xs text-slate-500">Funded Grants</dt>
                  <dd className="mt-1 font-mono text-base font-medium text-[#0F2547] tabular-nums">
                    {featuredCenter.grantsValue}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Patents Filed</dt>
                  <dd className="mt-1 font-mono text-base font-medium text-[#0F2547] tabular-nums">
                    {featuredCenter.patentsFiled}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Indexed Papers</dt>
                  <dd className="mt-1 font-mono text-base font-medium text-[#0F2547] tabular-nums">
                    {featuredCenter.publications}
                  </dd>
                </div>
              </dl>
            </div>
          </article>

          {/* Supporting Research Centres */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaryCenters.map((center) => (
              <article
                key={center.id}
                className="flex-1 p-6 sm:p-7 bg-white border border-slate-200 rounded-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center flex-wrap gap-2 text-xs text-slate-500">
                    <span className="font-mono text-[#8A5A10]">{center.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{center.department}</span>
                  </div>

                  <h3 className="mt-2.5 font-serif text-xl font-semibold text-[#0F2547] leading-snug">
                    {center.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {center.description}
                  </p>

                  <p className="mt-3 text-xs text-slate-500">
                    Focus: {center.focusAreas.join(' · ')}
                  </p>
                </div>

                <dl className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-3 gap-3">
                  <div>
                    <dt className="text-xs text-slate-500">Grants</dt>
                    <dd className="mt-0.5 font-mono text-sm font-medium text-[#0F2547] tabular-nums">
                      {center.grantsValue}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">Patents</dt>
                    <dd className="mt-0.5 font-mono text-sm font-medium text-[#0F2547] tabular-nums">
                      {center.patentsFiled}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-500">Papers</dt>
                    <dd className="mt-0.5 font-mono text-sm font-medium text-[#0F2547] tabular-nums">
                      {center.publications}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
