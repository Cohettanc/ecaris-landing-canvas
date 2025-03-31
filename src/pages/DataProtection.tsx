
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DataProtection = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Data Protection";
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 relative">
            <span className="inline-block pb-2 relative">
              Data Protection
              <span className="absolute left-0 bottom-0 w-24 h-1 bg-ecaris-green"></span>
            </span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg">ECARIS is committed to protecting your privacy and handling your data in an open and transparent manner. This page explains how we collect, process, and store your personal data in compliance with applicable data protection laws, including the European Union's General Data Protection Regulation (GDPR).</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Controller</h2>
            <p>ECARIS Sarl, established at 70, route d'Esch, 1470 Luxembourg, Luxembourg, is the data controller responsible for processing your personal data.</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data We Collect</h2>
            <p>We may collect and process the following data:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Contact information (name, email address, phone number, company) that you provide when you contact us</li>
              <li>Technical information (browser type, IP address, device information) collected automatically when you visit our website</li>
              <li>Usage data regarding how you interact with our website</li>
              <li>Any other information you voluntarily provide to us</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Data</h2>
            <p>We process your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>To respond to your inquiries and provide the services you request</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To send you communications about our services, if you have consented to receive such information</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Legal Basis for Processing</h2>
            <p>We process your data based on one or more of the following legal grounds:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your consent</li>
              <li>The necessity to perform a contract with you</li>
              <li>Compliance with a legal obligation</li>
              <li>Our legitimate interests, which do not override your fundamental rights and freedoms</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for satisfying any legal, accounting, or reporting requirements.</p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Your Rights</h2>
            <p>Under the GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Information</h2>
            <p>If you have any questions or concerns about our data protection practices, please contact us at:</p>
            <p>Email: privacy@ecaris.io<br />
            Address: 70, route d'Esch, 1470 Luxembourg, Luxembourg</p>
            
            <p className="mt-8">Last updated: {new Date().toISOString().split('T')[0]}</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DataProtection;
