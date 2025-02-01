import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from './constants';
import { NavItem } from './NavItem';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-lg bg-[#6489ad] text-white hover:bg-[#5a7b9d] transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`
          fixed inset-0 top-24 bg-[#F6F6F6] 
          transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          z-50
        `}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-[#6489ad]/20 last:border-b-0"
              >
                <NavItem {...item} isMobile />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}