// import React from 'react';
import { NavItemProps } from './types';

export function NavItem({ label, isSpecial, isMobile = false }: NavItemProps) {
  const baseClasses = "text-[15px] font-bold transition-all duration-200";
  const desktopClasses = "p-[13px] hover:bg-[#f5f7fa] hover:border hover:cursor-pointer hover:text-[#3c86c3]";
  const mobileClasses = "block w-full text-center py-4 hover:bg-white hover:text-[#3c86c3] cursor-pointer";

  return (
    <span
      className={`
        ${baseClasses}
        ${isMobile ? mobileClasses : desktopClasses}
        ${isMobile ? 'text-[#6489ad] text-lg' : 'text-[#506a85]'}
        ${isSpecial ? 'nav-element' : ''}
      `}
    >
      {label}
    </span>
  );
}