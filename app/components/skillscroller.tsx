import React from 'react';

// Composant Skill
function Skill({ icon, text }) {
  return (
    <div className="flex flex-col items-center mx-4">
      <div className="text-3xl text-indigo-500 mb-2">{icon}</div>
      <span className="text-sm font-medium text-gray-600">{text}</span>
    </div>
  );
}

// Composant SkillScroller
export function SkillScroller({ skills }) {
  return (
    <div className="overflow-container">
      <div className="animate-scroll">
        {/* Affiche les compétences */}
        {skills.map((skill: { icon: any; text: any; }, index: React.Key | null | undefined) => (
          <Skill key={index} icon={skill.icon} text={skill.text} />
        ))}
        {/* Répète le contenu pour créer un défilement fluide */}
        {skills.map((skill: { icon: any; text: any; }, index: any) => (
          <Skill key={`duplicate-${index}`} icon={skill.icon} text={skill.text} />
        ))}
      </div>
    </div>
  );
}
