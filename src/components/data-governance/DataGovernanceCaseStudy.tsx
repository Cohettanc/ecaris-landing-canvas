
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const DataGovernanceCaseStudy = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-md text-center text-gray-900 mb-4">Case Study</h2>
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          See how we helped a multinational corporation transform their data governance approach
        </p>
        
        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Financial Services Provider</h3>
              <p className="text-gray-700 mb-6">
                A leading financial services provider struggled with inconsistent data quality across multiple business units, leading to regulatory compliance issues and inefficient decision-making processes.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Approach</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-ecaris-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Conducted comprehensive data maturity assessment across all departments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-ecaris-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Implemented a centralized data catalog with automated metadata management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-ecaris-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Established data quality measurement frameworks with real-time monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-ecaris-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Created a cross-functional data governance council with clear responsibilities</span>
                </li>
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-3xl font-bold text-ecaris-green">42%</p>
                  <p className="text-gray-700">Reduction in data quality incidents</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-3xl font-bold text-ecaris-green">68%</p>
                  <p className="text-gray-700">Faster regulatory reporting</p>
                </div>
              </div>
            </div>
            
            <div>
              <AspectRatio ratio={4/3}>
                <img 
                  src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Data Governance Case Study" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="p-6 bg-ecaris-green text-white">
                <h4 className="text-lg font-semibold mb-2">"The data governance framework implemented by ECARIS has transformed how we manage and utilize our data assets."</h4>
                <p className="italic">— Chief Data Officer, Global Financial Services Provider</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGovernanceCaseStudy;
