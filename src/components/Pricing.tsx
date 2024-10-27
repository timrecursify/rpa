import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const handleBookCall = () => {
    window.open('https://cal.com', '_blank');
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-bold mb-4">$4,999 / RPA Solution</h3>
            <p className="text-red-600 mb-4">(1 spot left)</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Web application and landing page</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Implementation of your design. No design? No problem. We can assist.</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Essential integrations: payments, authentication, databases, analytics.</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> SEO (Search Engine Optimization).</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Setup and deployment.</li>
            </ul>
            <button 
              onClick={handleBookCall}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Book a call
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-bold mb-4">$899 / Landing page</h3>
            <p className="text-red-600 mb-4">(2 spots left)</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Tailored professional copy, written to convert.</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Custom design. Already got one? No problem.</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" /> Setup and deployment.</li>
            </ul>
            <button 
              onClick={handleBookCall}
              className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-300"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;