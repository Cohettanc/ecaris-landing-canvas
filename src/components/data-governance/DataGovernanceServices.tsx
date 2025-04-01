
import React from 'react';
import ServiceItem from '../strategy/ServiceItem';
import { Database, BarChart2, ClipboardCheck, Layers, Shield } from 'lucide-react';

const DataGovernanceServices = () => {
  const services = [
    {
      icon: <Database className="h-8 w-8 text-ecaris-green" />,
      title: "Data Governance Frameworks",
      description: "We help you establish comprehensive data governance frameworks with clear roles, responsibilities, and processes to ensure consistent data management across your organization."
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-ecaris-green" />,
      title: "Data Quality Management",
      description: "Our data quality solutions implement systematic processes to measure, monitor, and improve data accuracy, completeness, consistency, and reliability throughout your data lifecycle."
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-ecaris-green" />,
      title: "BI & Analytics Solutions",
      description: "We design and implement business intelligence and analytics solutions that transform raw data into meaningful insights through dashboards, reports, and visualizations."
    },
    {
      icon: <Layers className="h-8 w-8 text-ecaris-green" />,
      title: "DataOps Implementation",
      description: "Our DataOps practices streamline and automate data pipelines, enhancing collaboration between data engineers, scientists, and analysts to deliver higher quality data products faster."
    },
    {
      icon: <Shield className="h-8 w-8 text-ecaris-green" />,
      title: "Regulatory Compliance",
      description: "We ensure your data practices comply with relevant regulations such as GDPR, CCPA, and industry-specific standards, minimizing compliance risks while maximizing data utility."
    }
  ];

  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-md text-center text-gray-900 mb-4">Our Data Governance Services</h2>
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          We offer a comprehensive suite of data governance and data product services designed to help you maximize the value of your organization's data assets.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataGovernanceServices;
