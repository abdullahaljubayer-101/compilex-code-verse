
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl bg-compliex-dark-lighter rounded-lg p-8 md:p-12 border border-compliex-gray-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-compliex-red/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-compliex-red/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Coding Journey?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Join thousands of developers who are already using ComplieX to improve their skills, 
            prepare for interviews, and connect with potential employers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-button px-8 py-6 text-lg">Create Free Account</Button>
            <Button variant="outline" className="secondary-button px-8 py-6 text-lg">Explore Features</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
