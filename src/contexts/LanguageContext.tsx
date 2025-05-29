
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.whoAreWe': 'Who Are We',
    'nav.aboutUs': 'About Us',
    'nav.ourTeam': 'Our Team',
    'nav.ourValues': 'Our Values',
    'nav.ourServices': 'Our Services',
    'nav.allOurServices': 'All Our Services',
    'nav.dailyRateServices': 'Daily Rate Services',
    'nav.projectDeliveryServices': 'Project Delivery Services',
    'nav.businessExpertise': 'Business Expertise',
    'nav.ourITExpertise': 'Our IT Expertise',
    'nav.allOurITExpertise': 'All Our IT Expertise',
    'nav.aiDataGovernance': 'AI & Data Governance',
    'nav.strategyArchitecture': 'Strategy & Architecture',
    'nav.cloudServices': 'Cloud Services',
    'nav.erpApplications': 'ERP & Applications',
    'nav.ecarisAtGlance': 'ECARIS at a glance',
    'nav.ourOffices': 'Our Offices',
    'nav.allOurOffices': 'All Our Offices',
    'nav.luxembourg': 'Luxembourg',
    'nav.paris': 'Paris',
    'nav.contactUs': 'Contact Us',

    // Hero
    'hero.title': 'Seeking Excellence',
    'hero.description': 'ECARIS empowers business and IT teams with senior experts to deliver impactful data and AI solutions, from systems integration to data platform deployment.',
    'hero.ourServices': 'Our Services',
    'hero.contactUs': 'Contact Us',

    // About
    'about.title': 'Who Are We?',
    'about.p1': 'ECARIS is a consulting firm that supports business and IT teams in their digital transformation initiatives.',
    'about.p2': 'We cover the full data value chain — from integrating business applications (ERP, WMS, CRM, HRIS, accounting) to designing and deploying data platforms (cloud, on-premise, hybrid) that enable high-value data and AI use cases.',
    'about.p3': 'Our mission: deliver tangible outcomes across supply chain, industrial operations, finance, and HR.',
    'about.p4': 'Our projects are led by senior independent experts who combine deep technical skills with strong business understanding.',
    'about.p5': 'Our hybrid model blends the agility of independent talent with the quality standards of top-tier consulting firms.',
    'about.imageAlt': 'Tech professionals collaborating on code',
    'about.tagline': 'Connecting top talent with leading businesses',

    // Business Expertise
    'businessExpertise.title': 'Business Expertise',
    'businessExpertise.intro1': 'At ECARIS, we combine deep technical know-how with a sharp understanding of business needs. Our consultants deliver high-impact solutions tailored to the operational challenges of today\'s organizations.',
    'businessExpertise.intro2': 'We bring value across four key domains:',
    'businessExpertise.supplyChain.title': 'Supply Chain',
    'businessExpertise.supplyChain.description': 'We optimize supply chain processes through smart data integration, advanced analytics, and AI use cases — from demand forecasting to logistics flow optimization.',
    'businessExpertise.industrial.title': 'Industrial Operations',
    'businessExpertise.industrial.description': 'We support manufacturing excellence by leveraging real-time data, automation, and predictive insights to enhance productivity, quality, and agility on the shop floor.',
    'businessExpertise.finance.title': 'Finance & Performance Management',
    'businessExpertise.finance.description': 'We help finance teams streamline reporting, improve cost control, and enable scenario planning through data-driven platforms and performance dashboards.',
    'businessExpertise.hr.title': 'Human Resources & Organizational Efficiency',
    'businessExpertise.hr.description': 'We enable HR transformation and organizational design by integrating workforce data, aligning structures to strategy, and supporting change management through actionable insights.',

    // Services
    'services.title': 'Our IT Expertise',
    'services.description': 'We focus on our core expertise sectors, to provide you with our most relevant Subject Matter Experts for each industry.',

    // Footer
    'footer.description': 'Providing the best talent on a consulting basis to support your business since 2019.',
    'footer.locations': 'Luxembourg – Paris – Geneva – London – Berlin',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.legalNotice': 'Legal Notice',
    'footer.dataProtection': 'Data Protection',
    'footer.copyright': 'Ecaris. All rights reserved.'
  },
  fr: {
    // Navbar
    'nav.whoAreWe': 'Qui Sommes-Nous',
    'nav.aboutUs': 'À Propos',
    'nav.ourTeam': 'Notre Équipe',
    'nav.ourValues': 'Nos Valeurs',
    'nav.ourServices': 'Nos Services',
    'nav.allOurServices': 'Tous Nos Services',
    'nav.dailyRateServices': 'Services au Taux Journalier',
    'nav.projectDeliveryServices': 'Services de Livraison de Projets',
    'nav.businessExpertise': 'Expertise Métier',
    'nav.ourITExpertise': 'Notre Expertise IT',
    'nav.allOurITExpertise': 'Toute Notre Expertise IT',
    'nav.aiDataGovernance': 'IA & Gouvernance des Données',
    'nav.strategyArchitecture': 'Stratégie & Architecture',
    'nav.cloudServices': 'Services Cloud',
    'nav.erpApplications': 'ERP & Applications',
    'nav.ecarisAtGlance': 'ECARIS en un coup d\'œil',
    'nav.ourOffices': 'Nos Bureaux',
    'nav.allOurOffices': 'Tous Nos Bureaux',
    'nav.luxembourg': 'Luxembourg',
    'nav.paris': 'Paris',
    'nav.contactUs': 'Nous Contacter',

    // Hero
    'hero.title': 'Recherche d\'Excellence',
    'hero.description': 'ECARIS accompagne les équipes métiers et IT avec des experts seniors pour livrer des solutions data et IA impactantes, de l\'intégration de systèmes au déploiement de plateformes de données.',
    'hero.ourServices': 'Nos Services',
    'hero.contactUs': 'Nous Contacter',

    // About
    'about.title': 'Qui Sommes-Nous ?',
    'about.p1': 'ECARIS est un cabinet de conseil qui accompagne les équipes métiers et IT dans leurs initiatives de transformation digitale.',
    'about.p2': 'Nous couvrons toute la chaîne de valeur des données — de l\'intégration des applications métiers (ERP, WMS, CRM, SIRH, comptabilité) à la conception et au déploiement de plateformes de données (cloud, on-premise, hybride) qui permettent des cas d\'usage data et IA à haute valeur ajoutée.',
    'about.p3': 'Notre mission : livrer des résultats tangibles dans la supply chain, les opérations industrielles, la finance et les RH.',
    'about.p4': 'Nos projets sont menés par des experts indépendants seniors qui combinent des compétences techniques approfondies avec une forte compréhension métier.',
    'about.p5': 'Notre modèle hybride allie l\'agilité du talent indépendant avec les standards de qualité des cabinets de conseil de premier plan.',
    'about.imageAlt': 'Professionnels tech collaborant sur du code',
    'about.tagline': 'Connecter les meilleurs talents aux entreprises leaders',

    // Business Expertise
    'businessExpertise.title': 'Expertise Métier',
    'businessExpertise.intro1': 'Chez ECARIS, nous combinons un savoir-faire technique approfondi avec une compréhension fine des besoins métiers. Nos consultants livrent des solutions à fort impact adaptées aux défis opérationnels des organisations d\'aujourd\'hui.',
    'businessExpertise.intro2': 'Nous apportons de la valeur dans quatre domaines clés :',
    'businessExpertise.supplyChain.title': 'Supply Chain',
    'businessExpertise.supplyChain.description': 'Nous optimisons les processus de supply chain grâce à l\'intégration intelligente de données, l\'analytique avancée et les cas d\'usage IA — de la prévision de la demande à l\'optimisation des flux logistiques.',
    'businessExpertise.industrial.title': 'Opérations Industrielles',
    'businessExpertise.industrial.description': 'Nous soutenons l\'excellence manufacturière en exploitant les données temps réel, l\'automatisation et les insights prédictifs pour améliorer la productivité, la qualité et l\'agilité sur le terrain.',
    'businessExpertise.finance.title': 'Finance & Pilotage de la Performance',
    'businessExpertise.finance.description': 'Nous aidons les équipes finance à rationaliser le reporting, améliorer le contrôle des coûts et permettre la planification de scénarios grâce à des plateformes data-driven et des tableaux de bord de performance.',
    'businessExpertise.hr.title': 'Ressources Humaines & Efficacité Organisationnelle',
    'businessExpertise.hr.description': 'Nous permettons la transformation RH et la conception organisationnelle en intégrant les données de main-d\'œuvre, alignant les structures sur la stratégie et soutenant la conduite du changement par des insights actionnables.',

    // Services
    'services.title': 'Notre Expertise IT',
    'services.description': 'Nous nous concentrons sur nos secteurs d\'expertise principaux, pour vous fournir nos Experts Métiers les plus pertinents pour chaque industrie.',

    // Footer
    'footer.description': 'Fournir les meilleurs talents en conseil pour soutenir votre entreprise depuis 2019.',
    'footer.locations': 'Luxembourg – Paris – Genève – Londres – Berlin',
    'footer.quickLinks': 'Liens Rapides',
    'footer.legal': 'Légal',
    'footer.legalNotice': 'Mentions Légales',
    'footer.dataProtection': 'Protection des Données',
    'footer.copyright': 'Ecaris. Tous droits réservés.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
