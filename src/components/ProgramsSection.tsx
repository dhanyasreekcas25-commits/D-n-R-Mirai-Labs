interface ProgramsSectionProps {
  onSelectProgramForInquiry?: (programTitle: string) => void;
}

export function ProgramsSection(_props: ProgramsSectionProps) {
  return (
    <section id="academics" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider uppercase text-[#8A5A10]">
              01. Academic Schools &amp; Degrees
            </p>
            <h2 className="mt-2 bg-[#e4e6f1] font-['Times_New_Roman',Times,serif] text-[#08234f] text-3xl sm:text-4xl font-semibold text-balance">
              Autonomous Programmes Built for Deep Mastery
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Approved by AICTE and affiliated with Anna University and Bharathiar University, every
            curriculum is updated annually with industry boards in Coimbatore and Bengaluru.
          </p>
        </div>
      </div>
    </section>
  );
}
