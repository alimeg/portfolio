import React from 'react';
import Project from './project'; // Adjust the import path as needed

const projects = [
  {
    id: 1,
    title: 'Site Web de Portfolio',
    description: 'Un site web personnel pour présenter mes compétences et réalisations. Inclut des sections pour le CV, les projets, et les coordonnées.',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js'],
    link: 'https://portfolio-gules-two-19.vercel.app/',
  },
  {
    id: 2,
    title: 'Application de Vente de Cartes Pokémons',
    description: 'Une application pour accéder à toutes les cartes de Pokémon et donner la possibilité de les "CATCHER" temporairement ou définitivement..',
    technologies: ['Vue.js', 'Vuetify', 'MongoDB'],
    link: 'https://labo04-front.onrender.com/',
  },
  {
    id: 3,
    title: 'Plateforme de Blog',
    description: 'Une plateforme de blogging avec des fonctionnalités de publication, d\'édition et de gestion des articles pour les utilisateurs.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    link: 'https://example.com/blog',
  },
  {
    id: 4,
    title: 'Application de Suivi de Fitness',
    description: 'Une application mobile pour suivre les entraînements, les objectifs de fitness et les progrès personnels.',
    technologies: ['React Native', 'Expo', 'GraphQL'],
    link: 'https://example.com/fitness-app',
  },
];

export const ProjectList = () => {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  );
};
