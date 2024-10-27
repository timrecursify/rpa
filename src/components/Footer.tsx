import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  const handleBookCall = () => {
    window.open('https://cal.com', '_blank');
  };

  const handleGetStarted = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Zap className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">RPA Agency</span>
          </div>
          <p className="text-gray-600 text-center md:text-left">
            Transform your idea into a market-ready RPA solution in weeks.<br />
            Fast, affordable, and hassle-free.
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            You'll receive a response within 24 hours of booking. If your project is a good
            fit, we'll schedule a call to discuss the details and work process.
          </p>
          <div className="mt-4 space-x-4">
            <button 
              onClick={handleBookCall}
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Book a call
            </button>
            <button 
              onClick={handleGetStarted}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-300"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;