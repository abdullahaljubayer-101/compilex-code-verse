
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-compliex-dark/90 backdrop-blur-md border-b border-compliex-gray-dark z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code className="h-7 w-7 text-compliex-red" />
          <Link to="/" className="text-2xl font-bold text-white tracking-tight">
            Complie<span className="text-compliex-red">X</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">Leaderboard</Link>
          <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">Jobs</Link>
          <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">Learn</Link>
          <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">Practice</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-gray-300 hover:text-white hidden md:flex">
            Sign In
          </Button>
          <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white">
            <User className="h-4 w-4 mr-2" />
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
