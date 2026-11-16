import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface TopNavProps {
  onApplyClick: () => void;
}

const NAV_LINKS = [
  { href: '#academics', label: 'Academics' },
  { href: '#research', label: 'Research' },
  { href: '#campus', label: 'Campus' },
  { href: '#placements', label: 'Placements' },
  { href: '#admissions', label: 'Admissions' },
] as const;

export function TopNav({ onApplyClick }: TopNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNav = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-slate-200/90">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element text wordmark */}
        <a
          href="#top"
          className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#0F2547] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2547]"
        >
          Sri Krishna College
        </a>

        {/* Zone 2: 5 single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1 text-slate-600 hover:text-[#0F2547] border-b border-transparent hover:border-[#0F2547] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F2547]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onApplyClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#0F2547] hover:bg-[#173666] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[40px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2547]"
          >
            Apply 2026
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#0F2547] border border-slate-200 rounded-md hover:bg-slate-100 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2547]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-[#FAF9F6]">
          <nav
            aria-label="Mobile Navigation"
            className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileNav}
                className="px-3 py-3 text-sm font-medium text-slate-700 hover:text-[#0F2547] hover:bg-slate-100/70 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onApplyClick();
              }}
              className="mt-2 w-full px-4 py-3 text-sm font-semibold text-white bg-[#0F2547] hover:bg-[#173666] rounded-md transition-colors text-center cursor-pointer"
            >
              Apply 2026
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
