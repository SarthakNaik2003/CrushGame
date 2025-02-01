import React from 'react';

interface ProfileImageProps {
  imageUrl: string;
  alt: string;
}

export function ProfileImage({ imageUrl, alt }: ProfileImageProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden">
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
          Follow
        </button>
        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
          Message
        </button>
      </div>
    </div>
  );
}