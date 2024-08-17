import React from 'react';
import { FaLinkedin, FaGithub, FaJava, FaCode, FaMobileAlt, FaApple, FaAndroid, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import Image from 'next/image';
import photo from '/app/images/dev-photo.jpeg';
import './components/skillscroller.css'
import './global.css';
import { SkillScroller } from './components/skillscroller'; 

export const metadata = {
  title: 'Meghalet Ali - Portfolio',
  description: 'Développeur Mobile et Full Stack passionné',
};

export default function Page() {
  // Liste des compétences à faire défiler
  const skills = [
    { icon: <FaHtml5 />, text: 'HTML' },
    { icon: <FaCss3Alt />, text: 'CSS' },
    { icon: <FaJs />, text: 'JavaScript' },
    { icon: <FaJava />, text: 'Java' },
    { icon: <FaCode />, text: 'Full Stack' },
    { icon: <FaMobileAlt />, text: 'Mobile' },
    { icon: <FaApple />, text: 'Apple' },
    { icon: <FaAndroid />, text: 'Android' },
    { icon: <FaHtml5 />, text: 'HTML' },
    { icon: <FaCss3Alt />, text: 'CSS' },
    { icon: <FaJs />, text: 'JavaScript' },
    { icon: <FaJava />, text: 'Java' },
    { icon: <FaCode />, text: 'Full Stack' },
  ];
 
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
        <main className="bg-white rounded-lg shadow-2xl p-8 m-4 max-w-2xl w-full space-y-8">
          <header className="text-center">
            <Image
              src={photo}
              alt="Meghalet Ali"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Meghalet Ali</h1>
            <p className="text-xl text-indigo-600 font-semibold">Développeur Mobile et Full Stack</p>
          </header>
  
          <section className="space-y-4">
            <p className="text-gray-600 text-center">
              Passionné par la création d'applications innovantes et performantes.
              Expertise en développement mobile et full stack.
            </p>
          </section>
          <section className="flex justify-center space-x-6">
            <SocialLink
              href="https://www.linkedin.com/in/ali-meghalet"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/alimeg"
              icon={<FaGithub />}
              label="GitHub"
            />
          </section>
  
          <section className="text-center">
            <a
              href="/cv"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Me contacter
            </a>
          </section>
          <section>
          <SkillScroller skills={skills} />
          </section>
        </main>
      </div>
    );
  }
  
  function SocialLink({ href, icon, label }) {
    return (
      <a
        href={href}
        className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition-transform transform hover:scale-90 duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-3xl mb-1">{icon}</div>
        <span className="text-sm">{label}</span>
      </a>
    );
  }
  
 