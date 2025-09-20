
import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl = 'https://picsum.photos/1600/400' }) => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-24 md:py-32"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-brand-dark-blue bg-opacity-70"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Hero;
