import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
// Import pages lain (About, Skills, Contact) jika sudah dibuat

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Logic Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Logic Smooth Scroll
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark:bg-slate-950' : 'bg-slate-50'}`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        activeSection={activeSection}
        scrollTo={scrollTo}
      />
      
      <main>
        <Hero scrollTo={scrollTo} />
        {/* Tambahkan komponen About, Skills disini nanti */}
        <Projects />
        {/* Tambahkan komponen Contact disini nanti */}
      </main>

      <footer className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
        © 2025 Portofolio Saya.
      </footer>
    </div>
  );
}

export default App;
