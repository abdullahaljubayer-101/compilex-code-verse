
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CodePreview from '@/components/CodePreview';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "ComplieX - Your All-in-One Coding Platform";
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.feature-card').forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-compliex-dark text-white">
      <Navbar />
      <Hero />
      <Features />
      <CodePreview />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
