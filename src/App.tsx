/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ResearchSection } from './components/ResearchSection';
import { CampusSection } from './components/CampusSection';
import { PlacementsSection } from './components/PlacementsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ProspectusModal } from './components/ProspectusModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProgramForInquiry, setSelectedProgramForInquiry] = useState('');
  const [prospectusOpen, setProspectusOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectProgramForInquiry = (programTitle: string) => {
    setSelectedProgramForInquiry(programTitle);
    scrollToSection('admissions');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#14181F]">
      <TopNav onApplyClick={() => scrollToSection('admissions')} />

      <main className="flex-1">
        <HeroSection
          onExplorePrograms={() => scrollToSection('academics')}
          onOpenProspectus={() => setProspectusOpen(true)}
        />
        <ProgramsSection onSelectProgramForInquiry={handleSelectProgramForInquiry} />
        <ResearchSection />
        <CampusSection />
        <PlacementsSection />
        <AdmissionsSection preselectedProgram={selectedProgramForInquiry} />
      </main>

      <Footer />

      <ProspectusModal
        open={prospectusOpen}
        onClose={() => setProspectusOpen(false)}
        onProceedToApply={() => scrollToSection('admissions')}
      />
    </div>
  );
}
