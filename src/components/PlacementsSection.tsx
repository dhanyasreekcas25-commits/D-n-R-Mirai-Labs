import { useMemo, useState } from 'react';
import {
  ALUMNI_OUTCOMES,
  PLACEMENT_HIGHLIGHTS,
  RECRUITER_PARTNERS,
  RecruiterPartner,
} from '../data/collegeData';

type SectorFilter = 'All' | RecruiterPartner['sector'];

const SECTOR_TABS: SectorFilter[] = [
  'All',
  'Software & Cloud',
  'Core Engineering',
  'Consulting & Finance',
];

export function PlacementsSection() {
  const [sectorFilter, setSectorFilter] = useState<SectorFilter>('All');

  const visibleRecruiters = useMemo(() => {
    if (sectorFilter === 'All') {
      return RECRUITER_PARTNERS;
    }
    return RECRUITER_PARTNERS.filter((partner) => partner.sector === sectorFilter);
  }, [sectorFilter]);

  return (
    <section id="placements" className="py-16 lg:py-24 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider uppercase text-[#8A5A10]">
              04. Career Outcomes &amp; Recruiters
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#0F2547] text-balance">
              Measurable Placement Outcomes Across Global Industry
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Our Centre for Training and Placement coordinates technical residencies, coding studios,
            and core engineering assessments beginning in the fourth semester.
          </p>
        </div>

        {/* Claim-to-Proof Metrics Row */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 bg-white border border-slate-200 rounded-lg">
          {PLACEMENT_HIGHLIGHTS.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F2547] tabular-nums">
                {item.metric}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-slate-600">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Recruiter Directory & Alumni Outcomes */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Interactive Recruiter Table */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#0F2547]">
                  2025 Recruiting Partners
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Verified campus offers from the 2024–2025 placement cycle
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Filter recruiting partners by sector"
                className="flex flex-wrap items-center gap-1 p-1 bg-[#F3F1EC] rounded-md border border-slate-200/80"
              >
                {SECTOR_TABS.map((tab) => {
                  const active = sectorFilter === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setSectorFilter(tab)}
                      className={`px-2.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? 'bg-[#0F2547] text-white'
                          : 'text-slate-600 hover:text-[#0F2547]'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-2 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-medium text-slate-500">
                    <th className="py-3 pr-4">Organization</th>
                    <th className="py-3 px-4">Sector</th>
                    <th className="py-3 px-4">Primary Roles</th>
                    <th className="py-3 pl-4 text-right">2025 Hires</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 text-sm">
                  {visibleRecruiters.map((partner) => (
                    <tr key={partner.name} className="hover:bg-[#FAF9F6] transition-colors">
                      <td className="py-3.5 pr-4 font-semibold text-[#0F2547]">
                        {partner.name}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-xs whitespace-nowrap">
                        {partner.sector}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">{partner.rolesOffered}</td>
                      <td className="py-3.5 pl-4 text-right font-mono font-medium text-[#0F2547] tabular-nums">
                        {partner.hires2025}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right 5 Cols: Attributable Alumni Outcomes */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {ALUMNI_OUTCOMES.map((alumnus) => (
              <blockquote
                key={alumnus.name}
                className="p-6 bg-white border border-slate-200 rounded-lg"
              >
                <p className="text-sm text-slate-700 leading-relaxed">
                  &ldquo;{alumnus.quote}&rdquo;
                </p>
                <footer className="mt-4 pt-3 border-t border-slate-200/80">
                  <p className="text-sm font-semibold text-[#0F2547]">{alumnus.name}</p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {alumnus.role}, {alumnus.company}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {alumnus.program} · {alumnus.batch}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
