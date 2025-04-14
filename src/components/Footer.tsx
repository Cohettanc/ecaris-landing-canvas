
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/e39cb3b2-abde-4150-8b2f-0b3efdd5efee.png" 
              alt="ECARIS" 
              className="h-12 w-auto mb-4 invert brightness-0"
            />
            <p className="text-gray-400 mb-4">
              Providing the best talent on a consulting basis to support your business since 2019.
            </p>
            <p className="text-gray-400">
              Luxembourg – Paris – Geneva – London – Berlin
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">Who Are We</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Our Services</a></li>
              <li><a href="#clients" className="text-gray-400 hover:text-white transition-colors duration-300">Our Clients</a></li>
              <li><a href="#offices" className="text-gray-400 hover:text-white transition-colors duration-300">Our Offices</a></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</Link></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/legal-notice" className="text-gray-400 hover:text-white transition-colors duration-300">Legal Notice</Link></li>
              <li><Link to="/data-protection" className="text-gray-400 hover:text-white transition-colors duration-300">Data Protection</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {year} Ecaris. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="https://fr.linkedin.com/company/ecaris" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
