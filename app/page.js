'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaMoon, FaSun, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaBootstrap, FaDatabase } from 'react-icons/fa'; 
import { FiFlag } from 'react-icons/fi';
import { SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiFirebase, SiExpress, SiPostgresql, SiMongodb, SiSequelize, SiJest, SiVite, SiWebpack, SiVercel } from 'react-icons/si';


const skills = {
  frontend: [
    { icon: <FaHtml5 size={40} className="text-orange-500" />, name: 'HTML' },
    { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: 'CSS' },
    { icon: <FaJs size={40} className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <SiTypescript size={40} className="text-blue-600" />, name: 'TypeScript' },
    { icon: <FaReact size={40} className="text-blue-500" />, name: 'React' },
    { icon: <SiNextdotjs size={40} className="text-gray-800" />, name: 'Next.js' },
    { icon: <FaBootstrap size={40} className="text-purple-600" />, name: 'Bootstrap' },
    { icon: <SiTailwindcss size={40} className="text-teal-400" />, name: 'Tailwind' },
    { icon: <SiRedux size={40} className="text-purple-700" />, name: 'Redux' },
  ],
  backend: [
    { icon: <FaNodeJs size={40} className="text-green-500" />, name: 'Node.js' },
    { icon: <SiMongodb size={40} className="text-green-600" />, name: 'MongoDB' },
    { icon: <SiExpress size={40} className="text-gray-800" />, name: 'Express' },
    { icon: <SiFirebase size={40} className="text-yellow-600" />, name: 'Firebase' },
    { icon: <FaDatabase size={40} className="text-gray-500" />, name: 'SQL' },
    { icon: <SiSequelize size={40} className="text-blue-700" />, name: 'Sequelize' },
    { icon: <SiPostgresql size={40} className="text-blue-600" />, name: 'PostgreSQL' },
  ],
  others: [
    { icon: <FaGit size={40} className="text-orange-600" />, name: 'Git' },
    { icon: <FaGithub size={40} className="text-gray-800" />, name: 'GitHub' },
    { icon: <SiJest size={40} className="text-red-600" />, name: 'Jest' },
    { icon: <SiVite size={40} className="text-purple-500" />, name: 'Vite' },
    { icon: <SiWebpack size={40} className="text-blue-600" />, name: 'Webpack' },
    { icon: <SiVercel size={40} className="text-gray-800" />, name: 'Vercel' },
  ],
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const translations = {
    es: {
      name: 'Fernando Gómez',
      developer: 'Desarrollador Full Stack con más de 2 años de experiencia.',
      projectsTitle: 'Proyectos Destacados',
      aboutMeTitle: 'Sobre mí',
      aboutMeDescription: 'Soy un desarrollador full stack con experiencia en proyectos freelance y personales. Me especializo en React, Node.js, y MongoDB, y me apasiona crear soluciones eficientes. Siempre estoy buscando nuevas oportunidades de aprendizaje y crecimiento profesional.',
      skillsTitle: 'Habilidades',
      contactTitle: 'Contacto',
      contactDescription: '¿Tienes algún proyecto en mente? No dudes en contactarme a través de mi correo electrónico:',
    },
    en: {
      name: 'Fernando Gómez',
      developer: 'Full Stack Developer with over 2 years of experience.',
      projectsTitle: 'Highlighted Projects',
      aboutMeTitle: 'About Me',
      aboutMeDescription: 'I am a full stack developer with experience in freelance and personal projects. I specialize in React, Node.js, and MongoDB, and I am passionate about creating efficient solutions. I am always looking for new learning and professional growth opportunities.',
      skillsTitle: 'Skills',
      contactTitle: 'Contact',
      contactDescription: 'Do you have a project in mind? Don’t hesitate to contact me at my email:',
    },
  };

  return (
    <div className={`container mx-auto px-6 py-12 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-end space-x-4 mb-8">
        <button onClick={toggleDarkMode} className="px-4 py-2 rounded">
          {darkMode ? <FaSun size={24} className="text-yellow-500" /> : <FaMoon size={24} className="text-gray-500" />}
        </button>
        <button onClick={toggleLanguage} className="px-4 py-2 rounded flex flex-col items-center">
          {language === 'es' ? (
            <>
              <FiFlag size={24} className="text-blue-600" />
              <span className="text-sm ">Español</span>
            </>
          ) : (
            <>
              <FiFlag size={24} className="text-red-600" />
              <span className="text-sm ">English</span>
            </>
          )}
        </button>
      </div>

      <section className="flex flex-col items-center text-center mb-16">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-6"
          >
            <Image
              src="/profile.jpeg"
              alt="Foto de Fernando Gómez"
              width={200}
              height={200}
              className="rounded-lg shadow-lg border-4"
            />
            <div className="text-left">
              <h1 className="text-5xl font-bold text-gold">{translations[language].name}</h1>
              <p className="mt-4 text-xl">{translations[language].developer}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-gold"
        >
          {translations[language].projectsTitle}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Doflamingo Joyas"
            description="Tienda de joyas online con React, Tailwind CSS, Node.js y MongoDB."
            link="https://github.com/Ferdeveloperr/doflamingo-joyas"
            video="/doflamingoTest.mp4"
          />
          <ProjectCard
            title="Kaizen Fitness"
            description="Plataforma de coaching online con React, Firebase y Tailwind CSS."
            link="https://github.com/Ferdeveloperr/kaizen-fitness"
            video="/kaizen-demo.mp4"
          />
          <ProjectCard
            title="Portfolio Personal"
            description="Mi portfolio profesional construido con Next.js y Framer Motion."
            link="https://github.com/Ferdeveloperr/portfolio"
            video="/portfolio-demo.mp4"
          />
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gold">{translations[language].aboutMeTitle}</h2>
        <p className="text-lg leading-relaxed mx-auto max-w-3xl">
          {translations[language].aboutMeDescription}
        </p>
      </section>

      <SkillsSection language={language} translations={translations} skills={skills} />

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gold">{translations[language].contactTitle}</h2>
        <p className="text-lg leading-relaxed">
          {translations[language].contactDescription}
          <br />
          <a href="mailto:fernandogomez@example.com" className="text-blue-500 underline">fernandojgom1395@gmail.com</a>
        </p>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-sm">&copy; 2024 Fernando Gómez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

const SkillsSection = ({ language, translations, skills }) => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gold">{translations[language].skillsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.keys(skills).map((category) => (
          <div key={category} className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 capitalize">{category}</h3>
            <div className="flex flex-wrap justify-center">
              {skills[category].map((skill, index) => (
                <div key={index} className="flex flex-col items-center mx-4">
                  {skill.icon}
                  <span className="mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, link, video }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={link} target="_blank" className="text-blue-500 underline">
        Ver proyecto
      </Link>
      <div className="mt-2">
        <video width="320" height="240" controls>
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </div>
  );
};

