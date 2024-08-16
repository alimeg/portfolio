import React from 'react';
import { FaLinkedin, FaGithub, FaCode, FaMobileAlt, FaApple, FaAndroid } from 'react-icons/fa';
import Image from 'next/image';
import photo from '/app/images/dev-photo.jpeg';
import './landing.css'

export const metadata = {
  title: 'Meghalet Ali - Portfolio',
  description: 'Développeur Mobile et Full Stack passionné',
};

export default function Page() {
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

          <div className="overflow-hidden whitespace-nowrap relative">
            <div className="flex animate-scroll whitespace-nowrap">
              <Skill icon={<FaCode />} text="Full Stack" />
              <Skill icon={<FaMobileAlt />} text="Mobile" />
              <Skill icon={<FaApple />} text="Apple" />
              <Skill icon={<FaAndroid />} text="Android" />
              <Skill icon={<FaCode />} text="Full Stack" />
              <Skill icon={<FaMobileAlt />} text="Mobile" />
              <Skill icon={<FaApple />} text="Apple" />
              <Skill icon={<FaAndroid />} text="Android" />
            </div>
          </div>
        </section>

        <section className="flex justify-center space-x-6">
          <SocialLink href="https://www.linkedin.com/in/ali-meghalet" icon={<FaLinkedin />} label="LinkedIn" />
          <SocialLink href="https://github.com/alimeg" icon={<FaGithub />} label="GitHub" />
        </section>

        <section className="text-center">
          <a
            href="/cv"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Me contacter
          </a>
        </section>
      </main>
    </div>
  );
}

function Skill({ icon, text }) {
  return (
    <div className="flex flex-col items-center mx-4">
      <div className="text-3xl text-indigo-500 mb-2">{icon}</div>
      <span className="text-sm font-medium text-gray-600">{text}</span>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-indigo-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col items-center">
        <div className="text-3xl mb-1">{icon}</div>
        <span className="text-sm">{label}</span>
      </div>
    </a>
  );
}
