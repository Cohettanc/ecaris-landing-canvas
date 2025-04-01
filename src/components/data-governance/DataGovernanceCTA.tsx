
import React from 'react';

const DataGovernanceCTA = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="heading-md mb-6 text-gray-900">Ready to Transform Your Data Strategy?</h2>
      <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
        Contact our team to discuss how our Data Governance and Data Products services can help your organization 
        unlock the full potential of your data assets and drive informed decision-making.
      </p>
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-ecaris-green hover:bg-ecaris-green/90 text-white px-8 py-4 rounded-md text-lg transition-colors"
      >
        Contact Us Today
      </button>
    </div>
  );
};

export default DataGovernanceCTA;
