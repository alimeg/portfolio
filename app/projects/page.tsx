import React from 'react';
import { ProjectList } from '../components/projectlist';

export const metadata = {
  title: 'Projets',
  description: 'Découvrez mes projets récents.',
};

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#003366] dark:text-[#66b2ff]"> {/* Titre en bleu foncé avec support mode sombre */}
        Mes Projets
      </h1>
      <p className="text-base mb-6 text-gray-800 dark:text-gray-300"> {/* Texte en gris foncé avec support mode sombre */}
        Voici quelques-uns des projets sur lesquels j'ai travaillé récemment. N'hésitez pas à explorer les détails de chacun en suivant les liens.
      </p>
      <ProjectList />
    </section>
  );
}
