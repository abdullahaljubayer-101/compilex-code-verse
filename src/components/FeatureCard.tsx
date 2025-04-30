
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="feature-card opacity-0" 
      style={{
        animationName: 'fadeIn',
        animationDuration: '0.5s',
        animationFillMode: 'forwards',
        animationDelay: `${delay}ms`
      }}
    >
      <div className="feature-icon">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
