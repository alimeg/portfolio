import React from 'react';
import { FaReact, FaNodeJs, FaVuejs, FaDatabase, FaCode, FaMobileAlt } from 'react-icons/fa'; // Import necessary icons
import { SiTailwindcss, SiVuetify, SiGraphql, SiNextdotjs, SiMongodb } from 'react-icons/si'; // Import necessary icons

const iconMap = {
  'Next.js': <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
  'Tailwind CSS': <SiTailwindcss className="w-6 h-6 text-teal-600" />,
  'Node.js': <FaNodeJs className="w-6 h-6 text-green-600" />,
  'Vue.js': <FaVuejs className="w-6 h-6 text-green-500" />,
  'Vuetify': <SiVuetify className="w-6 h-6 text-indigo-600" />,
  'MongoDB': <SiMongodb className="w-6 h-6 text-green-700" />,
  'React Native': <FaReact className="w-6 h-6 text-blue-500" />,
  'Expo': <FaMobileAlt className="w-6 h-6 text-purple-600" />,
  'GraphQL': <SiGraphql className="w-6 h-6 text-pink-600" />,
};

const Project = ({ title, description, technologies, link }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-lg mb-4">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        <strong>Technologies :</strong>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-2">
              {iconMap[tech]} {/* Display the icon */}
              <span className="text-sm">{tech}</span> {/* Optionally display the text */}
            </div>
          ))}
        </div>
      </div>
      <a
        href={link}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le projet
      </a>
    </div>
  );
};

export default Project;
