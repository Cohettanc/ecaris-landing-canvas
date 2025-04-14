
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const DataProtection = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Data Protection";
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleBackToHome}
            >
              <Home size={16} />
              Back to Homepage
            </Button>
          </div>
        
          <h1 className="text-3xl font-bold text-gray-900 mb-8 relative">
            <span className="inline-block pb-2 relative">
              Data Protection
              <span className="absolute left-0 bottom-0 w-24 h-1 bg-ecaris-green"></span>
            </span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg">ECARIS is committed to protecting your personal data and ensuring your privacy. This policy outlines how we process and protect personal data in compliance with the General Data Protection Regulation (EU) 2016/679 (GDPR).</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Use of Cookies</h2>
            <p>This website does not use cookies or any other tracking technologies to collect or store information about visitors. ECARIS does not attempt to retain any personal data or browsing information from individuals who visit the website, unless such information is voluntarily provided by the user through forms or direct communication. Visitors can browse the website without any data being collected or stored by ECARIS.</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Personal Data and Purpose of Processing</h2>
            <p>Personal data refers to any information that can identify you as an individual, such as your name, address, date of birth, email address, profession, and bank details, as well as sensitive information such as income or medical data. ECARIS collects and processes personal data only for specific, explicit, and legitimate purposes, such as providing services, fulfilling legal obligations, or based on your consent.</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Legal Basis for Data Processing</h2>
            <p>ECARIS processes your personal data based on one of the following legal grounds as defined in Article 6 of the GDPR:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your consent (Art. 6(1)(a)),</li>
              <li>The necessity of processing for the performance of a contract to which you are a party (Art. 6(1)(b)),</li>
              <li>Compliance with a legal obligation (Art. 6(1)(c)),</li>
              <li>Processing for legitimate interests pursued by ECARIS, provided these do not override your rights (Art. 6(1)(f)).</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Data Protection Measures</h2>
            <p>We take appropriate technical and organizational measures to ensure the security of your personal data, including protecting it from unauthorized access, loss, or alteration. Your data is stored on secure systems and is only processed by authorized personnel for the purposes for which it was collected.</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Data Retention</h2>
            <p>We will retain your personal data for as long as necessary to fulfill the purposes for which it was collected or as required by applicable law. Once the data is no longer needed for its original purpose or any legal requirement, it will be securely deleted or anonymized.</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Your Rights as a Data Subject</h2>
            <p>Under the GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Right of access:</strong> You can request access to the personal data ECARIS holds about you and obtain a copy of this data.</li>
              <li><strong>Right to rectification:</strong> You can ask us to correct any inaccurate or incomplete personal data.</li>
            </ul>
            
            <p className="mt-8">© {new Date().getFullYear()} Ecaris All rights reserved.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DataProtection;
