
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DataGovernanceHeader from '@/components/data-governance/DataGovernanceHeader';
import DataGovernanceIntroduction from '@/components/data-governance/DataGovernanceIntroduction';
import DataGovernanceServices from '@/components/data-governance/DataGovernanceServices';
import DataGovernanceCaseStudy from '@/components/data-governance/DataGovernanceCaseStudy';
import DataGovernanceCTA from '@/components/data-governance/DataGovernanceCTA';
import Contact from '@/components/Contact';

const DataGovernance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DataGovernanceHeader />
        <DataGovernanceIntroduction />
        <DataGovernanceServices />
        <DataGovernanceCaseStudy />
        <DataGovernanceCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default DataGovernance;
