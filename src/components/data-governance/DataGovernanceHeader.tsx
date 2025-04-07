
import React from 'react';
import { Database, BarChart2, ShieldCheck, Workflow, FileText } from 'lucide-react';

const DataGovernanceHeader = () => {
  return (
    <div className="bg-ecaris-green text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h1 className="heading-lg mb-6">AI, Data Products & Data Governance</h1>
            <p className="text-lg mb-6">
              We help organizations transform raw data into strategic assets through robust governance frameworks, 
              high-quality data products, and compliant data management practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                <Database className="h-4 w-4" /> Data Catalogs
              </span>
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                <BarChart2 className="h-4 w-4" /> BI Dashboards
              </span>
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> GDPR Compliance
              </span>
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                <Workflow className="h-4 w-4" /> DataOps
              </span>
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm flex items-center gap-2">
                <FileText className="h-4 w-4" /> Data Quality
              </span>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="bg-white/10 p-8 rounded-lg border border-white/20">
              <Database className="h-16 w-16 text-white mb-4" />
              <h3 className="text-xl font-bold mb-2">Transform Your Data Strategy</h3>
              <p className="text-ecaris-light">
                Turn your organization's data into a strategic asset with our comprehensive data governance and management solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGovernanceHeader;
