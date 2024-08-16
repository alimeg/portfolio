'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import './nav.css'; 

const navItems = {
  '/': {
    name: 'Accueil',
  },
  '/blog': {
    name: 'Blog',
  },
  '/projects': {
    name: 'Projects',
  },
  '/cv': {
    name: 'Contact',
  },
  '/rapport': {
    name: 'Rapport',
  },
};

export function Navbar() {
  const [bouncing, setBouncing] = useState({});
  const [darkMode, setDarkMode] = useState(false); // État pour le mode sombre

  const handleClick = (path) => {
    setBouncing((prev) => ({
      ...prev,
      [path]: true,
    }));

    setTimeout(() => {
      setBouncing((prev) => ({
        ...prev,
        [path]: false,
      }));
    }, 600); // Durée de l'animation
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark', !darkMode); // Appliquer la classe dark au document
  };

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className={`link transition-all hover:bg-blue-500 hover:text-white flex align-middle relative py-1 px-2 m-1 ${bouncing[path] ? 'bounce' : ''}`}
                onClick={() => handleClick(path)}
              >
                {name}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleDarkMode}
            className="ml-auto p-3 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            <span className="text-xl text-gray-600 dark:text-gray-300">
              {darkMode ? <FaSun /> : <FaMoon />}
            </span>
          </button>
        </nav>
      </div>
    </aside>
  );
}
