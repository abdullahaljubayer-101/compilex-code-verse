import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const tutorials = [
  {
    id: 'react-hooks',
    title: 'Mastering React Hooks',
    description: 'Learn how to use React hooks to manage state and side effects in your functional components.',
    author: 'John Doe',
    duration: '4 hours',
    level: 'Intermediate',
  },
  {
    id: 'typescript-basics',
    title: 'TypeScript Basics for React Developers',
    description: 'Get started with TypeScript and learn how to use it to type your React components.',
    author: 'Jane Smith',
    duration: '3 hours',
    level: 'Beginner',
  },
  {
    id: 'nextjs-tutorial',
    title: 'Building a Full-Stack App with Next.js',
    description: 'Learn how to build a full-stack application with Next.js, including server-side rendering and API routes.',
    author: 'David Johnson',
    duration: '6 hours',
    level: 'Advanced',
  },
];

const Learn: React.FC = () => {
  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Learn New Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Enhance your coding skills with our comprehensive tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-compliex-dark-lighter rounded-lg p-6 border border-compliex-gray-dark">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="h-6 w-6 text-compliex-red" />
                <h2 className="text-xl font-semibold text-white">{tutorial.title}</h2>
              </div>
              <p className="text-gray-300 mb-4">{tutorial.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-400">Author: {tutorial.author}</span>
                  <span className="block text-sm text-gray-400">Duration: {tutorial.duration}</span>
                  <span className="text-sm text-gray-400">Level: {tutorial.level}</span>
                </div>
                
                
                <Button 
                  variant="link" 
                  className="text-compliex-red hover:text-compliex-red-dark p-0 h-auto"
                  asChild
                >
                  <Link to={`/learn/tutorial/${tutorial.id}`}>
                    View Tutorial →
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Learn;
