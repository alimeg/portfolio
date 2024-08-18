import React from 'react';

// Composant Skill
function Skill({ icon, text }) {
  return (
    <div className="flex flex-col items-center mx-4">
      <div className="text-3xl text-indigo-500 mb-2 dark:text-indigo-300">{icon}</div>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{text}</span>
    </div>
  );
}

// Composant SkillScroller
export function SkillScroller({ skills }) {
  return (
    <div className="overflow-container bg-white dark:bg-gray-800">
      <div className="animate-scroll">
        {/* Affiche les compétences */}
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} text={skill.text} />
        ))}
        {/* Répète le contenu pour créer un défilement fluide */}
        {skills.map((skill, index) => (
          <Skill key={`duplicate-${index}`} icon={skill.icon} text={skill.text} />
        ))}
      </div>
    </div>
  );
}
