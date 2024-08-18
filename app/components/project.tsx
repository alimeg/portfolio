'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaVuejs, FaMobileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiTailwindcss, SiVuetify, SiGraphql, SiNextdotjs, SiMongodb } from 'react-icons/si';

const iconMap = {
  'Next.js': <SiNextdotjs className="w-6 h-6 text-[#003366] dark:text-[#66b2ff]" />,
  'Tailwind CSS': <SiTailwindcss className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
  'Node.js': <FaNodeJs className="w-6 h-6 text-green-600 dark:text-green-400" />,
  'Vue.js': <FaVuejs className="w-6 h-6 text-green-500 dark:text-green-300" />,
  'Vuetify': <SiVuetify className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  'MongoDB': <SiMongodb className="w-6 h-6 text-green-700 dark:text-green-500" />,
  'React Native': <FaReact className="w-6 h-6 text-blue-500 dark:text-blue-300" />,
  'Expo': <FaMobileAlt className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
  'GraphQL': <SiGraphql className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
};

const Project = ({ title, description, technologies, link, additionalContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-2xl font-semibold mb-2 text-[#003366] dark:text-[#66b2ff]">
        {title}
      </h2>
      <p className="text-gray-800 mb-4 dark:text-gray-300">
        {description}
      </p>
      <div className="mb-4 flex flex-wrap gap-2">
        <strong>Technologies :</strong>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-2">
              {iconMap[tech]}
              <span className="text-sm dark:text-gray-400">{tech}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={toggleExpand}
          className="flex items-center space-x-1 text-[#0066CC] hover:underline focus:outline-none dark:text-[#66b2ff] dark:hover:underline"
        >
          <span>{isExpanded ? 'Réduire' : 'Lire plus'}</span>
          {isExpanded ? (
            <FaChevronUp className="text-[#0066CC] text-xl dark:text-[#66b2ff]" />
          ) : (
            <FaChevronDown className="text-[#0066CC] text-xl dark:text-[#66b2ff]" />
          )}
        </button>
        <div className="flex items-center space-x-2">
          <a
            href={link}
            className="text-[#0066CC] hover:underline dark:text-[#66b2ff] dark:hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le projet
          </a>
        </div>
      </div>
      {/* Collapsible content */}
      <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="mb-4">
          {additionalContent && (
            <>
              <Image src={additionalContent.image} alt="Project" className="w-full h-auto rounded-lg mb-4" />
              <p className="text-gray-600 dark:text-gray-400">{additionalContent.text}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
