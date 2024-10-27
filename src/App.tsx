import React from 'react';
import { Rocket, Zap, Users, Search } from 'lucide-react';

function App() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">RPA Agency</span>
          </div>
          <div>
            <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2">Talk with us</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Build your RPA solution
            <br />
            <span className="text-blue-600">in weeks, not months</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your idea into a market-ready RPA solution in weeks.
            <br />
            Fast, affordable, and hassle-free.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Book a call
            </a>
            <button
              onClick={scrollToPricing}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-300"
            >
              See pricing
            </button>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Stuck with just an idea? Let's make it reality</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rapid development</h3>
                <p className="text-gray-600">Your RPA solution ready in 2-4 weeks.</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Experienced team</h3>
                <p className="text-gray-600">We know what we're doing thanks to years of experience.</p>
              </div>
              <div className="text-center">
                <Rocket className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern technology</h3>
                <p className="text-gray-600">We use the latest technologies to ensure your product is fast and scalable.</p>
              </div>
              <div className="text-center">
                <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">SEO-optimized</h3>
                <p className="text-gray-600">Built-in search engine optimization to improve your product's visibility.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4">RPA MVP</h3>
                <p className="text-gray-600 mb-4">Everything you need to test your idea in the market.</p>
                <p className="text-3xl font-bold mb-6">$4,999 <span className="text-sm text-gray-500 font-normal">/MVP</span></p>
                <ul className="mb-8">
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Web application and landing page
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Implementation of your design
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Essential integrations
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    SEO optimization
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Setup and deployment
                  </li>
                </ul>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Book a call
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-4">Landing Page</h3>
                <p className="text-gray-600 mb-4">Perfect for validating your RPA idea quickly.</p>
                <p className="text-3xl font-bold mb-6">$899 <span className="text-sm text-gray-500 font-normal">/landing page</span></p>
                <ul className="mb-8">
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Professional copy, written to convert
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Custom design
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Setup and deployment
                  </li>
                </ul>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-200 text-gray-800 text-center px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition duration-300"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 RPA Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;