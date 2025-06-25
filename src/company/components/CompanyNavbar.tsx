
import React, { useState } from 'react';
import { Building, Menu, X, User, Settings, LogOut, Plus, Users, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CompanyNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Dashboard', href: '/company/dashboard', icon: Building },
    { name: 'Jobs', href: '/company/jobs', icon: Briefcase },
    { name: 'Applicants', href: '/company/applicants', icon: Users },
  ];

  return (
    <nav className="bg-compliex-dark-lighter border-b border-compliex-gray-dark sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/company/dashboard" className="flex items-center space-x-2">
            <div className="p-2 bg-compliex-red rounded-md">
              <Building className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Compliex</span>
            <span className="text-sm text-gray-400">Company</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-compliex-red bg-compliex-red/10'
                    : 'text-gray-300 hover:text-white hover:bg-compliex-gray-dark'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
              <Link to="/company/create-job">
                <Plus className="h-4 w-4 mr-2" />
                Post Job
              </Link>
            </Button>
            
            <div className="relative group">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <User className="h-4 w-4" />
              </Button>
              
              <div className="absolute right-0 mt-2 w-48 bg-compliex-dark-lighter border border-compliex-gray-dark rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link
                    to="/company/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-compliex-gray-dark hover:text-white"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Company Profile
                  </Link>
                  <Link
                    to="/company/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-compliex-gray-dark hover:text-white"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                  <hr className="my-1 border-compliex-gray-dark" />
                  <Link
                    to="/company/signin"
                    className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-compliex-gray-dark hover:text-white"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-compliex-gray-dark">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'text-compliex-red bg-compliex-red/10'
                      : 'text-gray-300 hover:text-white hover:bg-compliex-gray-dark'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-compliex-gray-dark">
                <Link
                  to="/company/create-job"
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-compliex-gray-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Plus className="h-5 w-5" />
                  <span>Post Job</span>
                </Link>
                <Link
                  to="/company/profile"
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-compliex-gray-dark"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5" />
                  <span>Company Profile</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CompanyNavbar;
