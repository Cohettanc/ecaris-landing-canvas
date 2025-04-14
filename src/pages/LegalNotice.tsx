import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const LegalNotice = () => {
  useEffect(() => {
    // Update document title
    document.title = "ECARIS | Legal Notice";
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center space-x-4">
            <Link to="/">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
              >
                <Home size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
        
          <h1 className="text-3xl font-bold text-gray-900 mb-8 relative">
            <span className="inline-block pb-2 relative">
              Legal Notice
              <span className="absolute left-0 bottom-0 w-full h-1 bg-ecaris-green"></span>
            </span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">DISCLAIMER</h2>
            <p>In accordance with the provisions of the law governing online commerce and consumer protection, we provide the following legal notices. By accessing and using the ECARIS.IO website, you agree to be bound by these terms:</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Content of our Internet presence</h3>
            <p>ECARIS strives to ensure that the information provided on this website is accurate and up-to-date. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. ECARIS will not be held responsible for any errors or omissions, or for any damages resulting from the use or reliance on the information provided on this site.</p>
            <p>ECARIS assumes no responsibility for the updating, correctness, completeness or quality of the information supplied on our website. Liability claims against ECARIS that relate to damages of material or immaterial nature caused by the use or non-use of the information presented herein and/or by the use of information that might turn out to be incorrect and incomplete information in so far as no intentional or negligent culpability is demonstrated on the part of ECARIS.</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Cross references and links</h3>
            <p>The website Ecaris.io may contain links to external websites. ECARIS is not responsible for the content or the privacy practices of these websites and cannot be held liable for any damages arising from the use of these external sites.</p>
            <p>In the event of direct or indirect links to external websites lying outside the sphere of responsibility of ECARIS, a liability obligation would become operative solely in the event that ECARIS had knowledge of the content, and it were technically possible and ECARIS could reasonably be expected to prevent use in the case of unlawful content. ECARIS hereby expressly declares that, at the time the links were created, no illegal content was discernible on the linked sites. ECARIS has no influence of any kind over the current and future design, content or authorship of linked sites. For this reason, ECARIS hereby expressly distances itself from all content of all linked sites that has changed since the links were created. This declaration is valid for all links and references made as part of this web presence, as well as for entries made in any guest books, discussion forums and mailing lists set up by ECARIS. Solely the provider of the page to which the link is directed – not the person who merely references the information using links – is liable for illegal, incorrect or incomplete content, and especially for damage that results from the use, or lack thereof, of such provided information.</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Data protection</h3>
            <p>ECARIS collects and processes personal data in accordance with applicable data protection laws, including European Union's General Data Protection Regulation (GDPR). Please see our dedicated page on Data Protection for further details.</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Legal effectiveness</h3>
            <p>The content of this website is provided for informational purposes only and should not be construed as an offer, solicitation, or inducement to engage in any transaction or enter into any agreement with ECARIS. No part of this website, whether in written or implied form, constitutes a legally binding commitment by ECARIS. Any obligations or commitments on the part of ECARIS shall only arise upon the execution of a formal, written agreement duly signed by authorized representatives of ECARIS and the relevant party.</p>
            <p>ECARIS' liability exclusion shall be considered a part of the internet presence from within which a reference has been made to this page. Insofar parts or individual formulations of this text do not, no longer or do not completely correspond to the applicable legal situation, this shall not affect the content or validity of the remaining parts of this document.</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Intellectual Property</h3>
            <p>All content on this website, including but not limited to text, images, graphics, logos, icons, and software, is the property of ECARIS or its licensors and is protected by intellectual property laws. Any unauthorized use, reproduction, or distribution of these materials is strictly prohibited without prior written permission from ECARIS.</p>
            <p>ECARIS expressly reserves the right to modify, amend, delete or temporarily or permanently cease publication of parts of the site or of the complete site.</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Website Publisher</h3>
            <p>Company Name: ECARIS Sarl<br />
            Head Office: 70, route d'Esch, 1470 Luxembourg, Luxembourg<br />
            Email Address: info@ecaris.io<br />
            Business Registration Number: B240.481</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7. Website Hosting</h3>
            <p>This website website is hosted by:<br />
            Gandi International SARL<br />
            7, Rue des Mérovingiens,<br />
            L-8070 Bertrange Luxembourg</p>
            <p>Email Address: gandi-support@gmail.com</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8. Governing Law</h3>
            <p>These legal notices are governed by the laws of the Grand-Duchy of Luxembourg. Any disputes arising from the use of this website will be subject to the jurisdiction of the courts of the city of Luxembourg (Luxembourg).</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9. Contact</h3>
            <p>For any further inquiries, please contact ECARIS at:<br />
            Email: info@ecaris.io<br />
            Address: 70, route d'Esch, 1470 Luxembourg, Luxembourg</p>
            
            <p className="mt-8">© {new Date().getFullYear()} Ecaris All rights reserved.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LegalNotice;
