
import { ReactNode, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card 
        className={`relative overflow-hidden border-t-4 border-t-ecaris-green h-full transition-all duration-300 cursor-pointer ${
          isExpanded ? 'shadow-lg' : 'shadow-sm hover:shadow-md'
        }`}
        onClick={toggleExpand}
      >
        <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-ecaris-green/10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"></div>
        
        <div className="absolute top-4 right-4 text-ecaris-green">
          {isExpanded ? 
            <Minus className="h-5 w-5" /> : 
            <Plus className="h-5 w-5" />
          }
        </div>
        
        <CardHeader className="relative z-10">
          <CardTitle className="flex items-center gap-2">
            {title}
            <ArrowUpRight className="h-4 w-4 text-ecaris-green opacity-0 transition-opacity group-hover:opacity-100" />
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className={`transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-24 overflow-hidden'
          }`}>
            <p className="text-gray-700">{description}</p>
            
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="mt-4 pt-4 border-t border-gray-100"
              >
                <h4 className="font-medium text-sm mb-2 text-ecaris-green">Related Expertise</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-ecaris-green rounded-full mr-2"></span>
                    Technical expertise in specific domains
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-ecaris-green rounded-full mr-2"></span>
                    Industry-specific knowledge and experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-ecaris-green rounded-full mr-2"></span>
                    Flexible engagement models to suit your needs
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
