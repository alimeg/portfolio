'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MinusIcon } from '@heroicons/react/24/outline'; // Importation de l'icône Menu
import Logo from '/app/images/logo.png';

const navItems = {
  '/': { name: 'Accueil' },
  '/blog': { name: 'Blog' },
  '/projects': { name: 'Projects' },
  '/cv': { name: 'Contact' },
  '/rapport': { name: 'Rapport' },
};

export function Navbar() {
  const [bouncing, setBouncing] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <aside className="mb-16">
      <div className="lg:sticky lg:top-20 bg-white shadow-md rounded-lg py-4">
        <nav className="flex items-center justify-between px-4">
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              className="w-16 h-auto"
            />
            <button
              onClick={toggleMenu}
              className="lg:hidden ml-4 p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none"
            >
              <MinusIcon className="h-6 w-6" />
            </button>
          </div>
          <div
            className={`lg:flex lg:space-x-4 space-y-4 lg:space-y-0 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
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
