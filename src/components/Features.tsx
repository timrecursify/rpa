import React from 'react';
import { Zap, Package, Cpu, Users, Search } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Rapid development', description: 'Your RPA solution ready in 2-4 weeks.' },
  { icon: Package, title: 'Complete package', description: 'Web application and landing page included. Everything you need to test your idea in the market.' },
  { icon: Cpu, title: 'Modern technology', description: 'We use the latest technologies to ensure your product is fast, stable, and scalable.' },
  { icon: Users, title: 'Experienced team', description: 'We know what we\'re doing thanks to having years of experience building successful RPA solutions.' },
  { icon: Search, title: 'SEO-optimized', description: 'Built-in search engine optimization to improve your product\'s visibility.' },
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Stuck with just an idea? Let's make it reality</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md">
              <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;