
import { Workflow, Building2, ServerCog, Database, Archive } from 'lucide-react';
import ServiceItem from './ServiceItem';

const StrategyServices = () => {
  return (
    <div className="mb-16">
      <h2 className="heading-md mb-8 text-center text-gray-900">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceItem
          icon={<Workflow className="h-10 w-10 text-ecaris-green" />}
          title="Strategic IT Planning"
          description="We work with your leadership team to create comprehensive IT roadmaps that align with your business objectives. Our strategic planning considers current technological capabilities, anticipated business growth, and evolving market demands to create a future-proof IT foundation."
        />
        
        <ServiceItem
          icon={<Building2 className="h-10 w-10 text-ecaris-green" />}
          title="Enterprise Architecture"
          description="Our enterprise architecture services help organizations design, plan, and implement technology solutions that support business goals. We create architectural frameworks that promote agility, scalability, and cost-effectiveness while ensuring alignment with your organizational strategy."
        />
        
        <ServiceItem
          icon={<ServerCog className="h-10 w-10 text-ecaris-green" />}
          title="System Urbanization"
          description="We help rationalize your IT landscape by organizing systems into coherent zones, ensuring clear interfaces between components. This systematic approach improves maintainability, reduces redundancy, and creates a more efficient technological ecosystem."
        />
        
        <ServiceItem
          icon={<Archive className="h-10 w-10 text-ecaris-green" />}
          title="Application Portfolio Management"
          description="Our application portfolio rationalization services help you evaluate your existing applications, identify redundancies, and make informed decisions about which applications to invest in, retire, or replace. This process optimizes IT spending and improves overall system performance."
        />
        
        <ServiceItem
          icon={<Database className="h-10 w-10 text-ecaris-green" />}
          title="Digital Transformation Planning"
          description="We help scope and plan complex digital transformation initiatives, breaking large projects into manageable components with clear dependencies, timelines, and resource requirements. Our approach minimizes risk while maximizing the business value of your transformation efforts."
        />
      </div>
    </div>
  );
};

export default StrategyServices;
