import React from 'react';

export function FinalMessage() {
  return (
    <div className="animate-fade-in relative w-full max-w-2xl  rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-6xl  font-bold text-white text-center font-valentine animate-pulse">
          I Love You! ❤️
        </h1>
      </div>
      {/* Add your background image here in the img src */}
      <div className="w-full h-full bg-red-100 flex">
        <h1 className="text-xl p-4 justify-center items-center font-bold mb-12 text-gray-800 font-valentine">
          Happiest Birthday, My Love!

          My dearest Suhasi, the love of my life, my greatest joy, and my forever happiness—today is all about you! From the moment you walked into my life, you filled it with love, warmth, and endless laughter. Every day with you feels like a beautiful dream, and I can’t wait to spend forever creating magical moments together.

          You are my strength, my peace, and my heart’s favorite melody. On your special day, I just want to remind you how deeply I adore you and how incredibly lucky I am to have you by my side. May this year bring you everything your heart desires and more!

          Happy birthday, my love! I love you beyond words.
        </h1>
        <p className="text-center text-blue-600 pt-4">

        </p>
      </div>
    </div>
  );
}