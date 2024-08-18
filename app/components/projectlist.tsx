import React from 'react';
import Project from './project'; 
import Poke from '../images/poke-SC.png'
import Portfolio from '../images/portfolio-SS.png'
import Blog from '../images/blog-SS.png'
import Fitness from '../images/fitness-SS.jpeg'

const projects = [
  {
    id: 1,
    title: 'Site Web de Portfolio',
    description: 'Un site web personnel pour présenter mes compétences et réalisations. Inclut des sections pour le CV, les projets, et les coordonnées.',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js'],
    link: 'https://portfolio-gules-two-19.vercel.app/',
    additionalContent: {
      image: Portfolio,
      text: 'Ce site web de portfolio présente mes projets et compétences. Vous y trouverez des détails sur mes réalisations et mon parcours professionnel.'
    }
  },
  {
    id: 2,
    title: 'Application de Vente de Cartes Pokémons',
    description: 'Une application pour accéder à toutes les cartes de Pokémon et donner la possibilité de les "CATCHER" temporairement ou définitivement.',
    technologies: ['Vue.js', 'Vuetify', 'MongoDB'],
    link: 'https://labo04-front.onrender.com/',
    additionalContent: {
      image: Poke,
      text: 'Cette application permet aux utilisateurs de rechercher et d’acheter des cartes Pokémon. Elle utilise Vue.js et Vuetify pour une interface fluide.'
    }
  },
  {
    id: 3,
    title: 'Plateforme de Blog',
    description: 'Une plateforme de blogging avec des fonctionnalités de publication, d\'édition et de gestion des articles pour les utilisateurs.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    link: 'https://example.com/blog',
    additionalContent: {
      image: Blog,
      text: 'Cette plateforme permet aux utilisateurs de publier et de gérer leurs articles de blog. Elle est conçue avec Next.js pour une performance optimale.'
    }
  },
  {
    id: 4,
    title: 'Application de Suivi de Fitness',
    description: 'Une application mobile pour suivre les entraînements, les objectifs de fitness et les progrès personnels.',
    technologies: ['React Native', 'Expo', 'GraphQL'],
    link: 'https://example.com/fitness-app',
    additionalContent: {
      image: Fitness,
      text: 'Cette application mobile aide les utilisateurs à suivre leurs entraînements et à atteindre leurs objectifs de fitness. Développée avec React Native et Expo.'
    }
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
          additionalContent={project.additionalContent} // Pass additional content here
        />
      ))}
    </div>
  );
};
