
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Your All-in-One <span className="text-compliex-red">Coding</span> Platform
        </h1>
        
        <div className="terminal mb-6 mt-8 max-w-xl mx-auto">
          <div className="flex items-center justify-start mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="typing-container">
            <span className="typing-text text-compliex-red">// ComplieX - Where Code Meets Excellence</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-400">const</span> <span className="text-blue-400">features</span> <span className="text-gray-400">=</span> <span className="text-teal-400">["Compiler", "Judge", "Ranks", "Visualizer", "Jobs", "Learning", "AI"];</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-400">const</span> <span className="text-blue-400">experience</span> <span className="text-gray-400">=</span> <span className="text-compliex-red">await</span> <span className="text-yellow-400">ComplieX</span><span className="text-gray-400">(</span><span className="text-blue-400">features</span><span className="text-gray-400">);</span>
          </div>
          <div className="mt-2">
            <span className="text-blue-400">console</span><span className="text-gray-400">.</span><span className="text-yellow-400">log</span><span className="text-gray-400">(</span><span className="text-green-400">"Ready to elevate your coding journey?"</span><span className="text-gray-400">);</span>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Compile, practice, compete, learn, and grow with our all-in-one platform designed for coding enthusiasts, students, and professional developers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button className="cta-button px-8 py-6 text-lg">Get Started</Button>
          <Button variant="outline" className="secondary-button px-8 py-6 text-lg">Explore Features</Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-compliex-red">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
