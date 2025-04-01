
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const DataGovernanceIntroduction = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-md text-gray-900 mb-6">Building a Strong Data Foundation</h2>
            <p className="text-gray-700 mb-4">
              In today's data-driven world, organizations that can effectively harness their data gain a significant competitive advantage. Our Data Governance and Data Products services help you build a robust data foundation that supports informed decision-making and drives business innovation.
            </p>
            <p className="text-gray-700 mb-4">
              We combine technical expertise with business acumen to implement governance frameworks that ensure your data is accurate, accessible, compliant, and secure. Our approach transforms data from a passive resource into a strategic asset that delivers measurable value to your organization.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-ecaris-green mt-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Our Approach</h3>
              <p className="text-gray-700">
                We start by understanding your organization's data landscape and business objectives. Then, we develop tailored solutions that address your specific challenges while adhering to industry best practices and regulatory requirements.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <AspectRatio ratio={16/9}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Data Governance Visualization" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGovernanceIntroduction;
