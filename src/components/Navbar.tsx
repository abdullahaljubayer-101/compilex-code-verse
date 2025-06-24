import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar: React.FC = () => {
  // Mock logged in state - in a real app this would come from authentication context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: ""
  };

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
          <Link to="/#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</Link>
          <Link to="/leaderboard" className="text-sm text-gray-300 hover:text-white transition-colors">Leaderboard</Link>
          <Link to="/jobs" className="text-sm text-gray-300 hover:text-white transition-colors">Jobs</Link>
          <Link to="/practice" className="text-sm text-gray-300 hover:text-white transition-colors">Practice</Link>
          <Link to="/learn" className="text-sm text-gray-300 hover:text-white transition-colors">Learn</Link>
        </div>
        
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-compliex-red text-white">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-compliex-dark-lighter border-compliex-gray-dark" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-white">{user.name}</p>
                    <p className="w-[200px] truncate text-sm text-gray-400">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-compliex-gray-dark" />
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-compliex-gray-dark" asChild>
                  <Link to="/account">Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-compliex-gray-dark" asChild>
                  <Link to="/settings">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-compliex-gray-dark" />
                <DropdownMenuItem 
                  className="text-gray-300 hover:text-white hover:bg-compliex-gray-dark"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" className="text-gray-300 hover:text-white hidden md:flex" asChild>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button className="bg-compliex-red hover:bg-compliex-red-dark text-white" asChild>
                <Link to="/signup">
                  <User className="h-4 w-4 mr-2" />
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
