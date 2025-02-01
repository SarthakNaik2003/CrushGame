import React from 'react';

export function FinalMessage() {
  return (
    <div className="animate-fade-in relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white text-center font-valentine animate-pulse">
          I Love You! ❤️
        </h1>
      </div>
      {/* Add your background image here in the img src */}
      <div className="w-full h-full bg-red-100">
        <p className="text-center text-gray-600 pt-4">

        </p>
      </div>
    </div>
  );
}