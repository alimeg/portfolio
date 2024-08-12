import React from 'react';

export const metadata = {
  title: 'Projets',
  description: 'Découvrez mes projets récents.',
};

const projects = [
  {
    id: 1,
    title: 'Site Web de Portfolio',
    description: 'Un site web personnel pour présenter mes compétences et réalisations. Inclut des sections pour le CV, les projets, et les coordonnées.',
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    link: 'https://portfolio-gules-two-19.vercel.app/',
  },
  {
    id: 2,
    title: 'Application de Gestion des Tâches',
    description: 'Une application pour gérer les tâches quotidiennes avec des fonctionnalités de suivi de projet et de collaboration en temps réel.',
    technologies: ['Vue.js', 'Vuetify', 'Firebase'],
    link: 'https://example.com/todolist',
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

export default function ProjectsPage() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">Mes Projets</h1>
      <p className="text-lg mb-8">
        Voici quelques-uns des projets sur lesquels j'ai travaillé récemment. N'hésitez pas à explorer les détails de chacun en suivant les liens.
      </p>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-300 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="mb-4">
              <strong>Technologies utilisées :</strong>
              <ul className="list-disc pl-5 mt-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-700">{tech}</li>
                ))}
              </ul>
            </div>
            <a
              href={project.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
