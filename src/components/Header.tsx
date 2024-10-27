import React from 'react';
import { Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Zap className="w-8 h-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">RPA Agency</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Talk with us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;