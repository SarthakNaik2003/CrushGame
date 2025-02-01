import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export function ValentineCard({ onAccept }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    // Get the container dimensions (accounting for padding and button size)
    const maxX = 150; // Half of card width minus button width and padding
    const maxY = 50;  // Limited vertical movement to stay in view

    // Generate random positions within bounds
    const newX = (Math.random() * maxX * 2) - maxX;
    const newY = (Math.random() * maxY * 2) - maxY;

    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="animate-fade-in bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
      <Heart className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
      <h1 className="text-4xl font-bold mb-12 text-gray-800 font-valentine">
        Will you accept all my love and surprises on your birthday?
      </h1>

      <div className="relative h-32 mx-auto max-w-sm">
        <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={onAccept}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-110"
          >
            Yes
          </button>
        </div>

        <button
          onMouseEnter={moveButton}
          className="absolute left-1/2 top-1/2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-200"
          style={{
            transform: `translate(calc(-50% + ${noButtonPosition.x}px), calc(-50% + ${noButtonPosition.y}px))`,
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}