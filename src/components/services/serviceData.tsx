
import { Workflow, Building2, ServerCog, Database, Archive, BarChart2, ClipboardCheck, Layers, Shield } from 'lucide-react';
import { ServiceType } from './types';

export const services: ServiceType[] = [
  {
    id: "strategy-architecture",
    title: "Strategy and IT Architecture",
    description: "We design and implement IT master plans, ensuring alignment between business and technology. Our services include system urbanization, application portfolio rationalization, and the scoping of complex transformation projects to support your strategic trajectory.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ecaris-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    detailImage: "/images/strategy-architecture.jpg",
    pagePath: "/strategy-architecture",
    detailContent: [
      {
        title: "Strategic IT Planning",
        description: "We work with your leadership team to create comprehensive IT roadmaps that align with your business objectives. Our strategic planning considers current technological capabilities, anticipated business growth, and evolving market demands to create a future-proof IT foundation.",
        icon: <Workflow className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "Enterprise Architecture",
        description: "Our enterprise architecture services help organizations design, plan, and implement technology solutions that support business goals. We create architectural frameworks that promote agility, scalability, and cost-effectiveness while ensuring alignment with your organizational strategy.",
        icon: <Building2 className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "System Urbanization",
        description: "We help rationalize your IT landscape by organizing systems into coherent zones, ensuring clear interfaces between components. This systematic approach improves maintainability, reduces redundancy, and creates a more efficient technological ecosystem.",
        icon: <ServerCog className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "Application Portfolio Management",
        description: "Our application portfolio rationalization services help you evaluate your existing applications, identify redundancies, and make informed decisions about which applications to invest in, retire, or replace. This process optimizes IT spending and improves overall system performance.",
        icon: <Archive className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "Digital Transformation Planning",
        description: "We help scope and plan complex digital transformation initiatives, breaking large projects into manageable components with clear dependencies, timelines, and resource requirements. Our approach minimizes risk while maximizing the business value of your transformation efforts.",
        icon: <Database className="h-8 w-8 text-ecaris-green" />
      }
    ]
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud, Infrastructure and Operations",
    description: "We support your cloud transformation with tailored strategies (public, private, hybrid, multi-cloud), expert migrations to GCP, Azure, or AWS, and robust governance and FinOps practices. Our teams ensure reliable operations through infrastructure administration and environment management across IaaS, PaaS, and SaaS layers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ecaris-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    pagePath: "/cloud-service"
  },
  {
    id: "data-governance",
    title: "Data Governance and Data Products",
    description: "We help you build a strong data foundation through strategic governance, data cataloging, quality frameworks, and role definitions. We also design and deliver advanced data products – BI, AI, ML, dashboards – and industrialize data pipelines via DataOps practices, all while ensuring compliance with GDPR and other regulations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ecaris-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7l5-3h6l5 3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h8" />
      </svg>
    ),
    pagePath: "/data-governance",
    detailContent: [
      {
        title: "Data Governance Frameworks",
        description: "We help you establish comprehensive data governance frameworks with clear roles, responsibilities, and processes to ensure consistent data management across your organization.",
        icon: <Database className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "Data Quality Management",
        description: "Our data quality solutions implement systematic processes to measure, monitor, and improve data accuracy, completeness, consistency, and reliability throughout your data lifecycle.",
        icon: <ClipboardCheck className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "BI & Analytics Solutions",
        description: "We design and implement business intelligence and analytics solutions that transform raw data into meaningful insights through dashboards, reports, and visualizations.",
        icon: <BarChart2 className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "DataOps Implementation",
        description: "Our DataOps practices streamline and automate data pipelines, enhancing collaboration between data engineers, scientists, and analysts to deliver higher quality data products faster.",
        icon: <Layers className="h-8 w-8 text-ecaris-green" />
      },
      {
        title: "Regulatory Compliance",
        description: "We ensure your data practices comply with relevant regulations such as GDPR, CCPA, and industry-specific standards, minimizing compliance risks while maximizing data utility.",
        icon: <Shield className="h-8 w-8 text-ecaris-green" />
      }
    ]
  },
  {
    id: "erp-applications",
    title: "ERP, Business Platforms and Applications",
    description: "We modernize and integrate critical ERP systems and business applications, including CRM and SaaS platforms. Our teams manage core application projects, optimize application lifecycles (ALM), and enable application cloudification to enhance agility, scalability, and performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ecaris-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];
