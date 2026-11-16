import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ACADEMIC_PROGRAMS, ADMISSION_STEPS } from '../data/collegeData';

interface AdmissionsSectionProps {
  preselectedProgram: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  inquiryType: 'Admission Counseling' | 'Campus Visit' | 'Scholarship Assessment';
  visitDate: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  program?: string;
}

export function AdmissionsSection({ preselectedProgram }: AdmissionsSectionProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    program: preselectedProgram || `${ACADEMIC_PROGRAMS[0].degree} ${ACADEMIC_PROGRAMS[0].title}`,
    inquiryType: 'Admission Counseling',
    visitDate: '',
    notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProgram) {
      setForm((prev) => ({ ...prev, program: preselectedProgram }));
      setSubmittedRef(null);
    }
  }, [preselectedProgram]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter the applicant’s full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 13) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!form.program) {
      nextErrors.program = 'Please choose a programme of interest.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setSubmittedRef(`SKC-2026-${randomCode}`);
  };

  const handleNewInquiry = () => {
    setSubmittedRef(null);
    setErrors({});
    setForm((prev) => ({
      ...prev,
      fullName: '',
      email: '',
      phone: '',
      visitDate: '',
      notes: '',
    }));
  };

  return (
    <section id="admissions" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-wider uppercase text-[#8A5A10]">
              05. Admissions 2026 &amp; Campus Visits
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#0F2547] text-balance">
              Begin Your Academic Journey in Coimbatore
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Applications are open for the 2026–2027 academic session. Schedule a guided tour of
            Kuniyamuthur Campus or request an academic counseling call.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 5 Cols: Admissions Timeline & Campus Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {ADMISSION_STEPS.map((item) => (
                <div key={item.step} className="py-5 flex gap-4">
                  <span className="font-mono text-sm font-medium text-[#8A5A10] tabular-nums shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#0F2547]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#FAF9F6] border border-slate-200 rounded-lg space-y-4">
              <h3 className="font-serif text-lg font-semibold text-[#0F2547]">
                Admissions Office — Kuniyamuthur
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0F2547] shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    Sugunapuram, Kuniyamuthur, Coimbatore – 641008, Tamil Nadu, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#0F2547] shrink-0" aria-hidden="true" />
                  <span className="font-mono tabular-nums">+91 422 267 8001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#0F2547] shrink-0" aria-hidden="true" />
                  <span>admissions@srikrishnacollege.edu.in</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#0F2547] shrink-0" aria-hidden="true" />
                  <span>Monday – Saturday, 09:00 – 17:30 IST</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right 7 Cols: Validated Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF9F6] border border-slate-200 rounded-lg p-6 sm:p-8">
            {submittedRef ? (
              <div className="py-10 text-center max-w-md mx-auto">
                <CheckCircle2
                  className="w-10 h-10 text-[#14532D] mx-auto"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-[#0F2547]">
                  Inquiry Registered
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#0F2547]">{form.fullName}</span>.
                  Our Coimbatore admissions counselor has logged your inquiry for{' '}
                  <span className="font-semibold text-[#0F2547]">{form.program}</span> and will
                  contact you within one working day.
                </p>

                <div className="mt-6 p-4 bg-white border border-slate-200 rounded-md inline-block">
                  <p className="text-xs text-slate-500">Reference Number</p>
                  <p className="mt-1 font-mono text-base font-medium text-[#0F2547] tabular-nums">
                    {submittedRef}
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleNewInquiry}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0F2547] hover:bg-[#173666] rounded-md transition-colors cursor-pointer min-h-[40px]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="pb-4 border-b border-slate-200">
                  <h3 className="font-serif text-2xl font-semibold text-[#0F2547]">
                    2026 Admission &amp; Campus Tour Inquiry
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Fields marked with * are required for counseling confirmation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="applicant-name"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Applicant Full Name *
                    </label>
                    <input
                      id="applicant-name"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="e.g., Karthik Narayanan"
                      aria-invalid={Boolean(errors.fullName)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:border-[#0F2547] focus:outline-none min-h-[44px]"
                    />
                    {errors.fullName && (
                      <p role="alert" className="mt-1 text-xs text-red-700 font-medium">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-email"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="applicant-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="student@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:border-[#0F2547] focus:outline-none min-h-[44px]"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1 text-xs text-red-700 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="applicant-phone"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Mobile Number *
                    </label>
                    <input
                      id="applicant-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98422 00000"
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:border-[#0F2547] focus:outline-none min-h-[44px]"
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1 text-xs text-red-700 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Request Type
                    </label>
                    <select
                      id="inquiry-type"
                      value={form.inquiryType}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          inquiryType: e.target.value as FormState['inquiryType'],
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:border-[#0F2547] focus:outline-none min-h-[44px]"
                    >
                      <option value="Admission Counseling">Admission Counseling</option>
                      <option value="Campus Visit">Guided Campus Visit</option>
                      <option value="Scholarship Assessment">Scholarship Assessment</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="program-select"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Programme of Interest *
                    </label>
                    <select
                      id="program-select"
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      aria-invalid={Boolean(errors.program)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:border-[#0F2547] focus:outline-none min-h-[44px]"
                    >
                      {ACADEMIC_PROGRAMS.map((p) => {
                        const label = `${p.degree} ${p.title}`;
                        return (
                          <option key={p.id} value={label}>
                            {label}
                          </option>
                        );
                      })}
                    </select>
                    {errors.program && (
                      <p role="alert" className="mt-1 text-xs text-red-700 font-medium">
                        {errors.program}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="visit-date"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Preferred Visit / Callback Date (Optional)
                    </label>
                    <input
                      id="visit-date"
                      type="date"
                      value={form.visitDate}
                      onChange={(e) => setForm({ ...form, visitDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:border-[#0F2547] focus:outline-none min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="applicant-notes"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    Questions on Hostel, Scholarships, or TNEA Cutoffs (Optional)
                  </label>
                  <textarea
                    id="applicant-notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Share your 12th board stream, entrance exam score, or specific questions..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:border-[#0F2547] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    Direct academic counseling — zero third-party telemarketing.
                  </p>
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-semibold text-white bg-[#0F2547] hover:bg-[#173666] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2547]"
                  >
                    Submit Admission Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
