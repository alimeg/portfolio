'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '/app/images/logo.png'

const navItems = {
  '/': { name: 'Accueil' },
  '/blog': { name: 'Blog' },
  '/projects': { name: 'Projects' },
  '/cv': { name: 'Contact' },
  '/rapport': { name: 'Rapport' },
};

export function Navbar() {
  const [bouncing, setBouncing] = useState({});

  const handleClick = (path: string) => {
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

  return (
    <aside className="mb-16">
      <div className="lg:sticky lg:top-20 bg-white shadow-md rounded-lg py-4">
        <nav className="flex items-center justify-between px-4">
          
            <Image
              src= {Logo}
              alt="Logo"
              className="w-16 h-auto" 
            />
            
          <div className="flex space-x-4">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className={`text-gray-800 hover:bg-indigo-100 hover:text-indigo-600 py-2 px-4 rounded transition-all duration-300 ${bouncing[path] ? 'animate-bounce' : ''}`}
                onClick={() => handleClick(path)}
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
