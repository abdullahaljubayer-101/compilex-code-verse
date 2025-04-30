
import React from 'react';
import FeatureCard from './FeatureCard';
import { 
  Code, 
  Trophy, 
  User, 
  LineChart, 
  Briefcase, 
  GraduationCap, 
  Bot 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "Code Compiler",
      description: "Write and execute code in multiple languages with syntax highlighting, formatting, and terminal-like output."
    },
    {
      icon: Trophy,
      title: "Judging System",
      description: "Solve coding problems and get instant feedback. Submissions are evaluated and graded automatically."
    },
    {
      icon: User,
      title: "Ranking System",
      description: "Track performance with global leaderboards. Earn levels and badges to showcase your programming skills."
    },
    {
      icon: LineChart,
      title: "Algorithm Visualizer",
      description: "See algorithms in action with interactive visualizations. Input values and step through logic to understand how they work."
    },
    {
      icon: Briefcase,
      title: "Jobs Portal",
      description: "Explore tech internships and job opportunities. Filter by skills, experience level, and apply directly from the platform."
    },
    {
      icon: GraduationCap,
      title: "Learning Portal",
      description: "Access structured learning paths with lessons, quizzes, and progress tracking to build your programming knowledge."
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Get help with coding queries, code reviews, language conversion, and algorithm concepts with our built-in AI assistant."
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to master coding, all in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
