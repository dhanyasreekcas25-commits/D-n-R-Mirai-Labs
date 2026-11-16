import { Download, X } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/collegeData';

interface ProspectusModalProps {
  open: boolean;
  onClose: () => void;
  onProceedToApply: () => void;
}

export function ProspectusModal({
  open,
  onClose,
  onProceedToApply,
}: ProspectusModalProps) {
  if (!open) {
    return null;
  }

  const handleDownloadSummary = () => {
    const lines = [
      'SRI KRISHNA COLLEGE, COIMBATORE — 2026–2027 ACADEMIC PROSPECTUS SUMMARY',
      'Campus: Sugunapuram, Kuniyamuthur, Coimbatore 641008, Tamil Nadu',
      'Status: UGC Autonomous Institution | NAAC A++ | AICTE Approved',
      '------------------------------------------------------------------------',
      '',
      'ACADEMIC PROGRAMMES & ANNUAL INTAKE:',
      ...ACADEMIC_PROGRAMS.map(
        (p) => `- ${p.degree} ${p.title} (${p.duration}, ${p.intake} seats) — ${p.accreditation}`
      ),
      '',
      'SCHOLARSHIPS & FINANCIAL AID:',
      '- Merit Tuition Waiver (Up to 100% for top TNEA / Board rank holders)',
      '- Tamil Nadu First-Graduate & Post-Matric Scholarship Facilitation',
      '- Institutional Sports & Research Excellence Fellowships',
      '',
      'ADMISSIONS DESK:',
      'Phone: +91 422 267 8001 | Email: admissions@srikrishnacollege.edu.in',
      'Hours: Monday to Saturday, 09:00 – 17:30 IST',
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sri-Krishna-College-Coimbatore-Prospectus-2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="prospectus-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-5 border-b border-slate-200 bg-[#FAF9F6] flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[#8A5A10]">
              Academic Session 2026–2027
            </p>
            <h2
              id="prospectus-modal-title"
              className="mt-1 font-serif text-2xl font-semibold text-[#0F2547]"
            >
              Sri Krishna College Prospectus Overview
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close prospectus modal"
            onClick={onClose}
            className="inline-flex items-center justify-center w-10 h-10 text-slate-500 hover:text-[#0F2547] rounded-md hover:bg-slate-200/60 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-5 border-b border-slate-200">
            <div>
              <p className="text-xs text-slate-500">Institutional Code</p>
              <p className="mt-1 font-mono font-medium text-[#0F2547]">TNEA · 2718 / SKC</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Accreditation</p>
              <p className="mt-1 font-medium text-[#0F2547]">NAAC A++ &amp; NBA</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Merit Scholarships</p>
              <p className="mt-1 font-mono font-medium text-[#0F2547] tabular-nums">
                ₹4.2 Cr / Year
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-[#0F2547]">
              Tuition, Hostels &amp; Merit Aid
            </h3>
            <p className="mt-2 leading-relaxed">
              Tuition adheres strictly to Tamil Nadu state regulatory fee committees for both
              government-counseling and management allocations. Residential hostels in Kuniyamuthur
              include high-speed Wi-Fi, 24-hour medical care, study halls, and dining facilities.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-[#0F2547]">
              Key Dates — 2026 Cycle
            </h3>
            <dl className="mt-3 border-t border-slate-200 divide-y divide-slate-200">
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-slate-600">UG Merit Inquiry Window</dt>
                <dd className="font-mono text-xs sm:text-sm text-[#0F2547] tabular-nums">
                  March – July 2026
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-slate-600">PG (MBA / MCA / M.E.) Counseling</dt>
                <dd className="font-mono text-xs sm:text-sm text-[#0F2547] tabular-nums">
                  May – August 2026
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-slate-600">First-Year Campus Orientation</dt>
                <dd className="font-mono text-xs sm:text-sm text-[#0F2547] tabular-nums">
                  August 2026
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-200 bg-[#FAF9F6] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleDownloadSummary}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#0F2547] bg-white border border-slate-300 hover:border-[#0F2547] rounded-md transition-colors cursor-pointer min-h-[40px]"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download Summary (.txt)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onProceedToApply();
            }}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0F2547] hover:bg-[#173666] rounded-md transition-colors cursor-pointer min-h-[40px]"
          >
            Proceed to Application Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}
