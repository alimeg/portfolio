'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Importer les icônes
import Logo from '/app/images/logo.png'; // Assurez-vous que le chemin du logo est correct
import './nav.css';

const navItems = {
  '/': { name: 'Accueil' },
  '/blog': { name: 'Blog' },
  '/projects': { name: 'Projects' },
  '/cv': { name: 'Contact' },
  '/rapport': { name: 'Rapport' },
};

export function Navbar() {
  const [bouncing, setBouncing] = useState<{ [key: string]: boolean }>({});
  const [rotating, setRotating] = useState(false); // État pour gérer la rotation
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (path: string) => {
    setBouncing(prev => ({
      ...prev,
      [path]: true,
    }));

    setRotating(true); // Démarrer la rotation

    setTimeout(() => {
      setBouncing(prev => ({
        ...prev,
        [path]: false,
      }));
     setRotating(false); 
   }, 600); 
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="relative bg-white shadow-md dark:bg-neutral-900 dark:text-neutral-200">
      <div className="flex items-center justify-between py-4 px-6 lg:px-8">
        {/* Logo fixe à gauche */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src={Logo}
            alt="Logo"
            className={`w-12 h-12 ${rotating ? 'rotate' : ''}`} 
            width={48} 
            height={48} 
          />
        </div>
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
        <div
          className={`flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 items-center ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}
        >
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={`text-blue-600 px-3 py-1 rounded-md transition-transform duration-300 hover:scale-105 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-600 ${bouncing[path] ? 'bounce' : ''}`}
              onClick={() => handleClick(path)}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
