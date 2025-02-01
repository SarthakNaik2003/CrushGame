import React from 'react';
import { navItems } from './Navigation/constants';
import { NavItem } from './Navigation/NavItem';
import { MobileNav } from './Navigation/MobileNav';

export function Navigation() {
  return (
    <div className="bg-white h-24 flex justify-between items-center px-6 relative">
      <img className="h-14" src="/src/images/L1-blue-logo.png" alt="LeaderOne-logo" />
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
}