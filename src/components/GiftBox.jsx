import React from 'react';
import { Gift } from 'lucide-react';

export function GiftBox({ onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="animate-bounce cursor-pointer transform transition-transform hover:scale-105"
    >
      <div className="bg-red-500 p-8 rounded-lg shadow-lg text-center">
        <Gift className="w-24 h-24 text-white mx-auto mb-4" />
        <p className="text-white text-2xl font-bold">For You ❤️</p>
        <p className="text-white text-sm mt-2">my love suhasi</p>
      </div>
    </div>
  );
}