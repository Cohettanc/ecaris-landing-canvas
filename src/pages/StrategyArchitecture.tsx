
import { ArrowLeft, Workflow, Building2, ServerCog, Database, Archive } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StrategyArchitecture = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-ecaris-green text-white py-16">
        <div className="section-container">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-ecaris-light hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
          
          <h1 className="heading-lg mb-4">Strategy and IT Architecture</h1>
          <p className="text-ecaris-light text-lg max-w-3xl">
            We design and implement IT master plans, ensuring alignment between business and technology. 
            Our services include system urbanization, application portfolio rationalization, and the scoping 
            of complex transformation projects to support your strategic trajectory.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-container">
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

        {/* Services Grid */}
        <h2 className="heading-md mb-8 text-center text-gray-900">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4"><Workflow className="h-10 w-10 text-ecaris-green" /></div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Strategic IT Planning</h3>
            <p className="text-gray-700">
              We work with your leadership team to create comprehensive IT roadmaps that align with your business objectives. 
              Our strategic planning considers current technological capabilities, anticipated business growth, and evolving 
              market demands to create a future-proof IT foundation.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4"><Building2 className="h-10 w-10 text-ecaris-green" /></div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Enterprise Architecture</h3>
            <p className="text-gray-700">
              Our enterprise architecture services help organizations design, plan, and implement technology solutions 
              that support business goals. We create architectural frameworks that promote agility, scalability, and 
              cost-effectiveness while ensuring alignment with your organizational strategy.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4"><ServerCog className="h-10 w-10 text-ecaris-green" /></div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">System Urbanization</h3>
            <p className="text-gray-700">
              We help rationalize your IT landscape by organizing systems into coherent zones, ensuring clear interfaces 
              between components. This systematic approach improves maintainability, reduces redundancy, and creates a 
              more efficient technological ecosystem.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4"><Archive className="h-10 w-10 text-ecaris-green" /></div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Application Portfolio Management</h3>
            <p className="text-gray-700">
              Our application portfolio rationalization services help you evaluate your existing applications, identify 
              redundancies, and make informed decisions about which applications to invest in, retire, or replace. 
              This process optimizes IT spending and improves overall system performance.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4"><Database className="h-10 w-10 text-ecaris-green" /></div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Digital Transformation Planning</h3>
            <p className="text-gray-700">
              We help scope and plan complex digital transformation initiatives, breaking large projects into manageable 
              components with clear dependencies, timelines, and resource requirements. Our approach minimizes risk while 
              maximizing the business value of your transformation efforts.
            </p>
          </div>
        </div>

        {/* Case Study Section */}
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

        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="heading-md mb-6 text-gray-900">Ready to Transform Your IT Strategy?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
            Contact our team to discuss how our Strategy and IT Architecture services can help your organization align 
            technology with business goals and create a foundation for sustainable growth.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-ecaris-green hover:bg-ecaris-green/90 text-white px-8 py-4 rounded-md text-lg transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-8">
        <div className="section-container text-center">
          <p>© 2023 ECARIS Consulting. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default StrategyArchitecture;
