
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StrategyHeader = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default StrategyHeader;
