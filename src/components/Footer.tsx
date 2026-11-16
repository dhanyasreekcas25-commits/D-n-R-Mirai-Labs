import { useState } from 'react';
import { X } from 'lucide-react';

interface DisclosureNotice {
  title: string;
  body: string;
}

const DISCLOSURES: Record<string, DisclosureNotice> = {
  naac: {
    title: 'NAAC A++ & Autonomous Governance',
    body: 'Sri Krishna College holds UGC Autonomous status with NAAC A++ institutional accreditation and NBA program accreditation across core Engineering streams. Curricula are governed by Academic Council and Board of Studies reviews featuring industry leaders and external university nominees.',
  },
  nirf: {
    title: 'NIRF & Mandatory Public Disclosures',
    body: 'Annual Institutional Data Reports submitted to the National Institutional Ranking Framework (NIRF), AICTE Mandatory Disclosures, audited financial statements, and faculty qualification rosters are maintained at the Registrar’s Office, Kuniyamuthur Campus.',
  },
  welfare: {
    title: 'Anti-Ragging & Student Grievance Redressal',
    body: 'In strict compliance with UGC Regulations, the Kuniyamuthur campus enforces a zero-tolerance Anti-Ragging Policy, Internal Complaints Committee (ICC), and Student Mentorship Cell reachable 24/7 via the Dean of Student Affairs.',
  },
};

export function Footer() {
  const [activeDisclosure, setActiveDisclosure] = useState<DisclosureNotice | null>(null);

  return (
    <footer className="bg-[#0F2547] text-slate-200 border-t border-[#0F2547]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          <div className="md:col-span-5">
            <p className="font-serif text-2xl font-semibold text-white">
              Sri Krishna College
            </p>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-sm">
              An autonomous institution of higher education in Kuniyamuthur, Coimbatore, committed
              to engineering rigor, scientific inquiry, and ethical leadership since 1980.
            </p>
            <p className="mt-4 text-xs text-slate-300">
              Sugunapuram, Palakkad Highway, Kuniyamuthur, Coimbatore – 641008, Tamil Nadu
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Academic Schools
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-white transition-colors">
                  Research Centres
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-white transition-colors">
                  Campus &amp; Library
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-white transition-colors">
                  Placements &amp; Alumni
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Admissions 2026
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Statutory Disclosures
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveDisclosure(DISCLOSURES.naac)}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  NAAC A++ &amp; Autonomous Charter
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveDisclosure(DISCLOSURES.nirf)}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  NIRF &amp; AICTE Mandatory Disclosures
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveDisclosure(DISCLOSURES.welfare)}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Anti-Ragging &amp; Grievance Redressal
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-300">
          <p>&copy; {new Date().getFullYear()} Sri Krishna College, Coimbatore. All rights reserved.</p>
          <p className="font-mono">Coimbatore · Tamil Nadu · India</p>
        </div>
      </div>

      {activeDisclosure && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclosure-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65"
          onClick={() => setActiveDisclosure(null)}
        >
          <div
            className="w-full max-w-lg bg-white text-slate-900 rounded-lg border border-slate-200 p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-200">
              <h3 id="disclosure-title" className="font-serif text-xl font-semibold text-[#0F2547]">
                {activeDisclosure.title}
              </h3>
              <button
                type="button"
                aria-label="Close statutory disclosure"
                onClick={() => setActiveDisclosure(null)}
                className="p-1.5 text-slate-500 hover:text-[#0F2547] rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 text-sm text-slate-700 leading-relaxed">{activeDisclosure.body}</p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveDisclosure(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0F2547] rounded-md hover:bg-[#173666] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
