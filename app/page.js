'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { FaMoon, FaSun, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaBootstrap, FaDatabase } from 'react-icons/fa'; 
import { FiFlag } from 'react-icons/fi';
import { SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiFirebase, SiExpress, SiPostgresql, SiMongodb, SiSequelize, SiJest, SiVite, SiWebpack, SiVercel } from 'react-icons/si';
import { ClipLoader } from 'react-spinners'


const categories = {
  frontend: 'Frontend',
  backend: 'Backend',
  others: 'Otros',
};

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
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [sending, setSending] = useState(false);
  const [formErrors, setFormErrors] = useState({ nombre: '', email: '', mensaje: '' });

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

  const validateField = (name, value) => {
    let errorMessage = '';
    if (!value) {
      errorMessage = 'Este campo es obligatorio';
    }
    setFormErrors({ ...formErrors, [name]: errorMessage });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(formData).some((field) => !field);
    if (hasErrors) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
        background: '#000',
        color: '#fff',
        confirmButtonColor: '#d4af37',
      });
    } else {
      setSending(true);
      // Simulación de envío
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Formulario enviado',
          text: 'Gracias por tu mensaje. Te contactaremos pronto.',
          background: '#000',
          color: '#fff',
          confirmButtonColor: '#d4af37',
        });
        setFormData({ nombre: '', email: '', mensaje: '' });
        setSending(false);
      }, 2000);
    }
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
    <div className={`container mx-auto px-6 py-12 font-roboto transition-all duration-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-end space-x-4 mb-8">
        <button onClick={toggleDarkMode} className="px-4 py-2 rounded">
          {darkMode ? <FaSun size={24} className="text-yellow-500" /> : <FaMoon size={24} className="text-gray-500" />}
        </button>
        <button onClick={toggleLanguage} className="px-4 py-2 rounded flex items-center" aria-label="Toggle language">
    <Image 
      src={language === 'es' ? 'https://flagcdn.com/w20/ar.png' : 'https://flagcdn.com/w20/us.png'} 
      alt={language === 'es' ? 'Español' : 'English'} 
      width={24} 
      height={24} 
      className="mr-2" 
    />
    <span className="text-sm">{language === 'es' ? 'Español' : 'English'}</span>
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

      <section id="contact" className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-6 text-gold">{translations[language].contactTitle}</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 rounded-lg" style={{ backgroundColor: '#000', borderColor: '#d4af37', borderWidth: '2px' }}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-white font-bold mb-2">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              onBlur={() => validateField('nombre', formData.nombre)}
              className="w-full p-2 rounded bg-white text-white border border-gray-500"
            />
            {formErrors.nombre && <span className="text-red-500">{formErrors.nombre}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => validateField('email', formData.email)}
              className="w-full p-2 rounded bg-white text-white border border-gray-500"
            />
            {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-white font-bold mb-2">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              onBlur={() => validateField('mensaje', formData.mensaje)}
              className="w-full p-2 rounded bg-white text-white border border-gray-500"
            ></textarea>
            {formErrors.mensaje && <span className="text-red-500">{formErrors.mensaje}</span>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gold text-black font-bold rounded hover:bg-black hover:text-gold transition-colors"
            disabled={sending}
          >
            {sending ? <ClipLoader size={24} color={'#000'} /> : 'Enviar'}
          </button>
        </form>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-sm">&copy; 2024 Fernando Gómez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

const SkillsSection = ({ language, translations, skills }) => {
  return (
    <section id="skills" className="text-center mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gold">{language === 'es' ? 'Habilidades' : 'Skills'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.keys(categories).map((category) => (
          <div key={category}>
            <h3 className="text-2xl font-bold mb-4 text-gold">{categories[category]}</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills[category].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.8 }}
                  className="text-center"
                >
                  <div>{skill.icon}</div>
                  <p className="mt-2">{skill.name}</p>
                </motion.div>
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

