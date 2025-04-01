
import React from 'react';

const StrategyCaseStudy = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-8 mb-16">
      <h2 className="heading-md mb-6 text-gray-900">Case Study: Global Retailer Transformation</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-700 mb-4">
            A global retail chain with operations in 15 countries faced challenges with their fragmented IT landscape 
            after years of acquisitions and organic growth. Legacy systems, redundant applications, and inefficient processes 
            were hindering their digital transformation efforts.
          </p>
          <p className="text-gray-700 mb-4">
            ECARIS consultants worked with their executive team to develop a comprehensive 3-year IT strategy and architectural 
            roadmap that:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Reduced their application portfolio by 30%</li>
            <li>Established clear technology domains with defined ownership</li>
            <li>Created a flexible integration architecture using API-first principles</li>
            <li>Prioritized initiatives based on business value and technical dependencies</li>
          </ul>
          <p className="text-gray-700">
            The client successfully implemented the roadmap, resulting in €25M in annual IT cost savings and a 40% improvement 
            in time-to-market for new capabilities.
          </p>
        </div>
        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            alt="Team planning session"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StrategyCaseStudy;
