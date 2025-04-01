
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, TrendingUp } from 'lucide-react';

const DataGovernanceCaseStudy = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-md text-center text-gray-900 mb-4">Success Story</h2>
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          See how our data governance and analytics solutions transformed operations for a leading financial services provider.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop" 
              alt="Data Dashboard Example" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <div className="flex gap-2 mb-4">
              <Badge className="bg-ecaris-green/10 text-ecaris-green hover:bg-ecaris-green/20">Financial Services</Badge>
              <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Case Study</Badge>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Global Financial Institution Data Transformation</h3>
            
            <p className="text-gray-700 mb-6">
              A global financial services firm struggled with data silos across multiple departments, leading to inconsistent reporting, compliance risks, and inefficient decision-making processes.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-ecaris-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Comprehensive Data Governance Framework</h4>
                  <p className="text-gray-600">Implemented enterprise-wide data governance with clear ownership, quality standards, and regulatory compliance measures.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-ecaris-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Advanced Analytics Platform</h4>
                  <p className="text-gray-600">Deployed a unified analytics platform with real-time dashboards for risk assessment, customer insights, and operational performance.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-ecaris-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">DataOps Implementation</h4>
                  <p className="text-gray-600">Established automated data pipelines and collaborative practices between data teams to accelerate delivery of data products.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-ecaris-green" />
                <div>
                  <p className="text-sm text-gray-500">Regulatory Compliance</p>
                  <p className="font-bold text-gray-900">100%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-ecaris-green" />
                <div>
                  <p className="text-sm text-gray-500">Decision Speed</p>
                  <p className="font-bold text-gray-900">68% Faster</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 italic">
              "ECARIS transformed our data operations from a compliance burden into a strategic asset. We now have the insights we need to make better decisions faster, while maintaining full regulatory compliance."
            </p>
            <p className="text-gray-900 font-medium mt-2">- CIO, Global Financial Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataGovernanceCaseStudy;
