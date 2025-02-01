import React from 'react';
import { Gift } from 'lucide-react';

export function GiftBox({ onOpen }) {
  const handleClick = () => {
    const element = document.querySelector('.gift-box');
    element.classList.add('animate-celebrate');
    setTimeout(onOpen, 500);
  };

  return (
    <div
      onClick={handleClick}
      className="gift-box animate-bounce cursor-pointer transform transition-transform hover:scale-105"
    >
      <div className="bg-blue-500 p-8 rounded-lg shadow-lg text-center">
        <Gift className="w-24 h-24 text-white mx-auto mb-4" />
        <p className="text-white text-2xl font-bold">For You Suhasi❤️</p>
        <p className="text-white text-2xl font-bold">My love</p>
        {/* <p className="text-white text-sm mt-2"> </p> */}
      </div>
    </div>
  );
}