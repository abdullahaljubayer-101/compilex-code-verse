
import React from 'react';
import { Code, Users, Target, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-compliex-dark">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Complie<span className="text-compliex-red">X</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Empowering developers worldwide with cutting-edge tools for coding, learning, and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="feature-card">
              <div className="feature-icon">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">
                To democratize programming education and provide developers with the tools they need to excel in their careers.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Community</h3>
              <p className="text-gray-300">
                A vibrant community of over 100,000 developers from around the world, learning and growing together.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                We continuously innovate to provide the most advanced coding tools and learning experiences.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">
                Committed to excellence in everything we do, from our platform to our customer support.
              </p>
            </div>
          </div>

          <div className="bg-compliex-dark-lighter rounded-lg p-8 border border-compliex-gray-dark">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                ComplieX was founded in 2020 with a simple yet ambitious goal: to make programming education accessible to everyone, everywhere. What started as a small project by a group of passionate developers has grown into a comprehensive platform serving developers worldwide.
              </p>
              <p>
                Our team combines decades of experience in software development, education, and technology innovation. We believe that the best way to learn programming is through hands-on practice, immediate feedback, and a supportive community.
              </p>
              <p>
                Today, ComplieX offers a complete ecosystem for developers at all levels - from beginners taking their first steps in coding to experienced professionals honing their skills for technical interviews and career advancement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
