import React from 'react';
import Project from './project'; 
import Poke from 'public/images/poke-SC.png'
import Portfolio from 'public/images/portfolio-SS.png'
import InvoiceAppImage from 'public/images/invoice.png'



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
      text: 'Cette application permet aux utilisateurs d\'explorer et d’acquérir des cartes Pokémon. Elle utilise Vue.js et Vuetify pour une interface fluide.'
    }
  },
  {
    id: 3,
    title: 'Application de Gestion des Factures et Garanties',
    description: 'Une application multiplateforme permettant aux utilisateurs de télécharger, gérer et suivre l\'expiration de leurs factures et garanties, avec des rappels par notifications push, email et SMS.',
    technologies: [
      'Ionic', 
    'Vue.js',
    'Express',
    'AWS', 
    'Supabase',
    'PostgreSQL',
    'Firebase',
    'Nodemailer',
    'Twilio'
    ],
    link: 'https://invoice-warranty-keper.vercel.app', 
    additionalContent: {
      image: InvoiceAppImage,
      text: 'Cette application multiplateforme permet aux utilisateurs de gérer facilement leurs factures et garanties. Grâce à un stockage sécurisé sur AWS S3, les utilisateurs peuvent télécharger et consulter leurs documents directement depuis l\'application. \n Pour garantir une expérience optimale, l\'application envoie des notifications push via Firebase Cloud Messaging (FCM) afin d\'alerter les utilisateurs avant l\'expiration de leurs garanties, leur assurant de ne jamais manquer une échéance importante. \n En complément, des notifications par email sont envoyées grâce à Nodemailer, permettant aux utilisateurs de recevoir des rappels détaillés directement dans leur boîte de réception. \n Pour les utilisateurs préférant un rappel instantané, l\'application utilise également Twilio pour envoyer des notifications par SMS. \n Cette solution complète permet une gestion fluide, centralisée et sécurisée des factures et garanties, avec plusieurs canaux de notification pour s\'assurer que l\'utilisateur soit toujours informé en temps réel.',
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
          additionalContent={project.additionalContent}
        />
      ))}
    </div>
  );
};
