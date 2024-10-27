import React from 'react';

const Hero = () => {
  const handleBookCall = () => {
    window.open('https://cal.com', '_blank');
  };

  const handleSeePricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Build your RPA solution<br />
          in weeks, <span className="bg-blue-600 text-white px-2">not months</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your idea into a market-ready RPA solution in weeks.<br />
          Fast, affordable, and hassle-free.
        </p>
        <div className="flex space-x-4">
          <button 
            onClick={handleBookCall}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Book a call
          </button>
          <button 
            onClick={handleSeePricing}
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-300"
          >
            See pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;