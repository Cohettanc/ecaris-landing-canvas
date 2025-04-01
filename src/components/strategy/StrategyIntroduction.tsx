
import React from 'react';

const StrategyIntroduction = () => {
  return (
    <>
      {/* Hero Image */}
      <div className="aspect-video w-full mb-12 rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
          alt="Strategy and IT Architecture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="heading-md mb-6 text-gray-900">Our Approach to IT Strategy & Architecture</h2>
        <p className="text-gray-700 mb-6 text-lg">
          At ECARIS, we take a comprehensive, business-first approach to IT architecture and strategy. 
          We believe that technology should serve business objectives, not the other way around. 
          Our consultants combine deep technical expertise with business acumen to create solutions that drive real value.
        </p>
        <p className="text-gray-700 mb-6 text-lg">
          We work collaboratively with your teams to understand your unique challenges and opportunities, 
          then design tailored solutions that leverage best practices while addressing your specific context.
          Our methodology emphasizes pragmatic, actionable plans over theoretical frameworks, ensuring that 
          our recommendations can be implemented effectively to achieve tangible results.
        </p>
      </div>
    </>
  );
};

export default StrategyIntroduction;
