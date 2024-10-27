import React from 'react';
import { FileText, Bell, Rocket } from 'lucide-react';

const steps = [
  { icon: FileText, title: 'Specification', description: 'We discuss your idea and create a detailed specification.' },
  { icon: Bell, title: 'Development', description: 'Watch your RPA solution take shape with regular updates.' },
  { icon: Rocket, title: 'Launch', description: 'We deploy your product and provide training so that you have full confidence in running it on your own.' },
];

const Process = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our process - it's simple!</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0">
              <step.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;