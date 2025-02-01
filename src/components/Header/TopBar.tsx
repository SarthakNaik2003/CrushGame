// import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export function TopBar() {
  return (
    <div className="hidden lg:flex bg-[#313c4c] h-12 justify-around">
      <div className="flex items-center gap-3">
        <span className="text-white text-[12px]">Rene Rodriguez</span>
        <span className="text-white text-[12px]">Branch Manager</span>
        <span className="text-white text-[12px]">NMLS ID 174065</span>
      </div>
      <div className="flex items-center gap-5">
        <ArrowRight className="text-white w-3 h-3" />
        <span className="text-white text-[12px]">Apply Now</span>
        <Phone className="text-white w-3 h-3" />
        <span className="text-white text-[12px]">(956) 648-8109</span>
      </div>
    </div>
  );
}