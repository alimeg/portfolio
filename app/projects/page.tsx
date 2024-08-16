import React from 'react';
import { ProjectList } from '../components/projectlist'; 

export const metadata = {
  title: 'Projets',
  description: 'Découvrez mes projets récents.',
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Mes Projets</h1>
      <p className="text-lg mb-8">
        Voici quelques-uns des projets sur lesquels j'ai travaillé récemment. N'hésitez pas à explorer les détails de chacun en suivant les liens.
      </p>
      <ProjectList />
    </section>
  );
}
