import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Fundr</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Create Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;