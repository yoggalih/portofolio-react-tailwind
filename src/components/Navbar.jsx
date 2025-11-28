import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar({ isDarkMode, setIsDarkMode, activeSection, scrollTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const handleNavClick = (item) => {
    scrollTo(item.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        <div className="font-bold text-xl dark:text-white cursor-pointer" onClick={() => scrollTo('home')}>
          Porto<span className="text-blue-600">folio.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.toLowerCase() 
                  ? 'text-blue-600' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
              }`}
            >
              {item}
            </button>
          ))}
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden gap-4">
           <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="dark:text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="block w-full text-left py-2 text-slate-600 dark:text-slate-300"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}