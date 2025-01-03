'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaVuejs, FaMobileAlt, FaChevronDown, FaChevronUp, FaEnvelope, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiVuetify, SiGraphql, SiNextdotjs, SiMongodb, SiFirebase, SiPostgresql, SiTwilio } from 'react-icons/si';

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
  'Ionic': <FaMobileAlt className="w-6 h-6 text-[#3880ff]" />,
  'Supabase': (
    <Image
      src="/images/supabase.jpeg"
      alt="Supabase"
      width={30} height={30}
      className="max-w-[30px] max-h-[30px] object-contain"
    />
  ),
  'PostgreSQL': <SiPostgresql className="w-6 h-6 text-[#336791]" />,
  'Firebase': <SiFirebase className="w-6 h-6 text-[#FFCB2B]" />,
  'Twilio': <SiTwilio className="w-6 h-6 text-[#F22F46]" />,
  'Nodemailer': <FaEnvelope className="w-6 h-6 text-[#4E8A8B]" />,
  'Express': <FaServer className="w-6 h-6 text-[#f7a800]" />,
  'AWS': (
    <Image
      src="/images/amazon-s3.jpeg"
      alt="AWS"
      width={30} height={30} 
      className="max-w-[30px] max-h-[30px] object-contain"
    />
  ),
};

const Project = ({ title, description, technologies, link, additionalContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Fonction de formatage des retours à la ligne
  const formatText = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index}>{line}</p>;
    });
  };

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

      {/* Contenu dépliable */}
      <div
        className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'h-auto' : 'h-0'}`}
        style={{ maxHeight: isExpanded ? 'none' : '0', overflowY: isExpanded ? 'auto' : 'hidden' }}
      >
        <div className="mb-4">
          {additionalContent && (
            <>
              {/* Image avec 'contain' pour la visibilité */}
              <div className="w-full h-auto mb-4 overflow-hidden">
                <Image
                  src={additionalContent.image}
                  alt="Project"
                  className="w-full h-auto object-contain rounded-lg"
                  layout="responsive"
                  width={700}
                  height={500}
                />
              </div>

              {/* Applique le formatage des retours à la ligne */}
              <div className="text-gray-600 dark:text-gray-400">
                {formatText(additionalContent.text)} {/* Applique ici le formatage */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
