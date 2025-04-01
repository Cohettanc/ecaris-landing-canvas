
import React from 'react';
import { Database, BarChart2, ShieldCheck, Workflow } from 'lucide-react';

const DataGovernanceIntroduction = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-md mb-6 text-gray-900">Transforming Data into Strategic Assets</h2>
            <p className="text-gray-700 mb-4">
              In today's data-driven world, effective data governance is the foundation of successful digital transformation. 
              Our comprehensive data governance solutions help organizations establish clear frameworks, policies, and processes 
              to ensure data quality, compliance, and accessibility.
            </p>
            <p className="text-gray-700 mb-6">
              Beyond governance, we help organizations transform raw data into valuable insights through advanced analytics, 
              business intelligence, and machine learning solutions that drive informed decision-making and competitive advantage.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Database className="h-5 w-5 text-ecaris-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Data Management</span>
              </div>
              <div className="flex items-start gap-2">
                <BarChart2 className="h-5 w-5 text-ecaris-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Analytics & BI</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 text-ecaris-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">Data Protection</span>
              </div>
              <div className="flex items-start gap-2">
                <Workflow className="h-5 w-5 text-ecaris-green flex-shrink-0 mt-1" />
                <span className="text-gray-700">DataOps</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">The ECARIS Data Governance Approach</h3>
              <p className="text-gray-700">
                We believe effective data governance is both a technical and organizational challenge. 
                Our approach balances technological solutions with organizational change management to 
                ensure sustainable adoption and long-term success.
              </p>
            </div>
            
            <div className="bg-ecaris-green/5 p-6 rounded-lg border border-ecaris-green/20">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Why Choose ECARIS?</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-ecaris-green font-bold">✓</span>
                  <span>Industry-specific expertise across financial services, healthcare, and manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ecaris-green font-bold">✓</span>
                  <span>Proven methodologies that balance innovation with pragmatic implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ecaris-green font-bold">✓</span>
                  <span>End-to-end capability from strategy through implementation and ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGovernanceIntroduction;
