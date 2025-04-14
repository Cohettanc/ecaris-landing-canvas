
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card 
        className="relative overflow-hidden border-t-4 border-t-ecaris-green h-full transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-ecaris-green/10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"></div>
        
        <CardHeader className="relative z-10">
          <CardTitle className="flex items-center gap-2">
            {title}
            <ArrowUpRight className="h-4 w-4 text-ecaris-green opacity-0 transition-opacity group-hover:opacity-100" />
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div>
            <p className="text-gray-700">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
