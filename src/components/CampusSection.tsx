import { useState } from 'react';
import { CAMPUS_FACILITIES, SPORTS_GROUND_DETAILS } from '../data/collegeData';
import { ResilientImage } from './ResilientImage';

export function CampusSection() {
  const [activeTabId, setActiveTabId] = useState(CAMPUS_FACILITIES[0].id);

  const activeFacility =
    CAMPUS_FACILITIES.find((f) => f.id === activeTabId) ?? CAMPUS_FACILITIES[0];

  return (
    <section id="campus" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider uppercase text-[#8A5A10]">
              03. Campus &amp; Coimbatore Living
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#0F2547] text-balance">
              112 Acres Designed for Study, Making, and Community
            </h2>
          </div>

          {/* Interactive Facility Switcher */}
          <div
            role="tablist"
            aria-label="Campus Facilities"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F3F1EC] rounded-lg border border-slate-200/80"
          >
            {CAMPUS_FACILITIES.map((facility) => {
              const isSelected = facility.id === activeTabId;
              return (
                <button
                  key={facility.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTabId(facility.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2547] ${
                    isSelected
                      ? 'bg-[#0F2547] text-white'
                      : 'text-slate-700 hover:text-[#0F2547] hover:bg-white/70'
                  }`}
                >
                  {facility.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Editorial Facility View */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col">
            <div className="aspect-[16/11] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
              <ResilientImage
                src={activeFacility.image}
                alt={activeFacility.title}
                fallbackTitle={activeFacility.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2.5 text-xs font-serif italic text-slate-600">
              {activeFacility.caption}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between py-1">
            <div>
              <p className="text-xs font-medium text-[#8A5A10]">
                {activeFacility.subtitle}
              </p>
              <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#0F2547]">
                {activeFacility.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeFacility.description}
              </p>
            </div>

            <dl className="mt-8 border-t border-slate-200 divide-y divide-slate-200">
              {activeFacility.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3.5 flex items-center justify-between gap-4 text-sm"
                >
                  <dt className="text-slate-600">{spec.label}</dt>
                  <dd className="font-mono font-medium text-[#0F2547] tabular-nums">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Featured Big Sports Ground & Football Pitch Showcase */}
        <div className="mt-14 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-4 flex flex-col justify-between py-1">
              <div>
                <p className="text-xs font-medium tracking-wider uppercase text-[#8A5A10]">
                  {SPORTS_GROUND_DETAILS.kicker}
                </p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-[#0F2547] text-balance">
                  {SPORTS_GROUND_DETAILS.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {SPORTS_GROUND_DETAILS.description}
                </p>
              </div>

              <dl className="mt-8 border-t border-slate-200 divide-y divide-slate-200">
                {SPORTS_GROUND_DETAILS.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="py-3.5 flex items-center justify-between gap-4 text-sm"
                  >
                    <dt className="text-slate-600">{spec.label}</dt>
                    <dd className="font-mono font-medium text-[#0F2547] tabular-nums">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-8 flex flex-col">
              <div className="aspect-[16/9] w-full flex-1 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={SPORTS_GROUND_DETAILS.image}
                  alt="Students playing a football match on the main grass sports ground at Sri Krishna College in Coimbatore"
                  fallbackTitle={SPORTS_GROUND_DETAILS.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2.5 text-xs font-serif italic text-slate-600">
                {SPORTS_GROUND_DETAILS.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
