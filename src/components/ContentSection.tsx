// import React from 'react';

interface ContentSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export function ContentSection({ title, subtitle, description }: ContentSectionProps) {
  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{subtitle}</h3>
      <p className="text-lg md:text-xl opacity-90 max-w-xl">{description}</p>
    </div>
  );
}