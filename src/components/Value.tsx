import React from 'react';
import { HelpCircle } from 'lucide-react';

const Value = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          The value of an RPA solution <HelpCircle className="w-6 h-6 ml-2 text-blue-600" />
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>Test your idea quickly and affordably.</li>
          <li>Start learning from real users instead of over-planning.</li>
          <li>We'll help you focus on core features to get your product to market.</li>
        </ul>
      </div>
    </section>
  );
};

export default Value;