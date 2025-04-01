
import StrategyHeader from '../components/strategy/StrategyHeader';
import StrategyIntroduction from '../components/strategy/StrategyIntroduction';
import StrategyServices from '../components/strategy/StrategyServices';
import StrategyCaseStudy from '../components/strategy/StrategyCaseStudy';
import StrategyCTA from '../components/strategy/StrategyCTA';

const StrategyArchitecture = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <StrategyHeader />

      {/* Main Content */}
      <div className="section-container">
        <StrategyIntroduction />
        <StrategyServices />
        <StrategyCaseStudy />
        <StrategyCTA />
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
