import React from 'react';

const Founder = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Meet the founder</h2>
        <div className="flex items-center mb-6">
          <h3 className="text-xl font-semibold mr-4">John Doe</h3>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">@johndoe</span>
        </div>
        <p className="text-gray-700 mb-4">
          Hey, I'm John. With years of experience leading engineering teams in startups
          and corporations, I've seen first-hand what makes RPA solutions succeed.
        </p>
        <p className="text-gray-700 mb-4">
          I've built several successful RPA solutions myself, and now I want to help you.
        </p>
        <p className="text-gray-700">
          My goal with RPA Agency is to help entrepreneurs like yourself bring their ideas to
          life quickly and efficiently. You have the vision; we have the technical
          expertise to make it happen.
        </p>
      </div>
    </section>
  );
};

export default Founder;