'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { FaMoon, FaSun } from 'react-icons/fa'; 

import { ClipLoader } from 'react-spinners'
import dynamic from 'next/dynamic';



const categories = {
  frontend: 'Frontend',
  backend: 'Backend',
  others: 'Otros',
};



const FaHtml5 = dynamic(() => import('react-icons/fa').then(mod => mod.FaHtml5), { ssr: false });
const FaCss3Alt = dynamic(() => import('react-icons/fa').then(mod => mod.FaCss3Alt), { ssr: false });
const FaJs = dynamic(() => import('react-icons/fa').then(mod => mod.FaJs), { ssr: false });
const SiTypescript = dynamic(() => import('react-icons/si').then(mod => mod.SiTypescript), { ssr: false });
const FaReact = dynamic(() => import('react-icons/fa').then(mod => mod.FaReact), { ssr: false });
const SiNextdotjs = dynamic(() => import('react-icons/si').then(mod => mod.SiNextdotjs), { ssr: false });
const FaBootstrap = dynamic(() => import('react-icons/fa').then(mod => mod.FaBootstrap), { ssr: false });
const SiTailwindcss = dynamic(() => import('react-icons/si').then(mod => mod.SiTailwindcss), { ssr: false });
const SiRedux = dynamic(() => import('react-icons/si').then(mod => mod.SiRedux), { ssr: false });
const FaNodeJs = dynamic(() => import('react-icons/fa').then(mod => mod.FaNodeJs), { ssr: false });
const SiMongodb = dynamic(() => import('react-icons/si').then(mod => mod.SiMongodb), { ssr: false });
const SiExpress = dynamic(() => import('react-icons/si').then(mod => mod.SiExpress), { ssr: false });
const SiFirebase = dynamic(() => import('react-icons/si').then(mod => mod.SiFirebase), { ssr: false });
const FaGit = dynamic(() => import('react-icons/fa').then(mod => mod.FaGit), { ssr: false });
const FaGithub = dynamic(() => import('react-icons/fa').then(mod => mod.FaGithub), { ssr: false });
const SiJest = dynamic(() => import('react-icons/si').then(mod => mod.SiJest), { ssr: false });
const SiVite = dynamic(() => import('react-icons/si').then(mod => mod.SiVite), { ssr: false });
const SiWebpack = dynamic(() => import('react-icons/si').then(mod => mod.SiWebpack), { ssr: false });
const SiVercel = dynamic(() => import('react-icons/si').then(mod => mod.SiVercel), { ssr: false });

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
      developer: 'Desarrollador React Ssr. | Estudiante de Ingeniería en Sistemas',
      projectsTitle: 'Proyectos Destacados',
      aboutMeTitle: 'Sobre mí',
      aboutMeDescription: 'Soy un desarrollador full stack con experiencia en proyectos freelance y personales. Me especializo en React, Node.js, y MongoDB, y me apasiona crear soluciones eficientes. Siempre estoy buscando nuevas oportunidades de aprendizaje y crecimiento profesional.',
      skillsTitle: 'Habilidades',
      contactTitle: 'Contacto',
      contactDescription: '¿Tienes algún proyecto en mente? No dudes en contactarme a través de mi correo electrónico:',
      projects: {
        doflamingoJoyas: 'Tienda de joyas online con React, Tailwind CSS, Node.js y MongoDB.',
        kaizenFitness: 'Plataforma de coaching online con React, Firebase y Tailwind CSS.',
        cotizacionesYA: 'Aplicación web desarrollada de manera ágil y eficiente para obtener cotizaciones.',
      },
      contactForm: {
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        placeholderName: 'Ingresa tu nombre',
        placeholderEmail: 'Ingresa tu email',
        placeholderMessage: 'Ingresa tu mensaje',
        submit: 'Enviar',
        errors: {
          name: 'Por favor ingresa un nombre válido.',
          email: 'Por favor ingresa un email válido.',
          message: 'Por favor ingresa un mensaje válido.',
        }
      }
    },
    en: {
      name: 'Fernando Gómez',
      developer: 'Ssr React Developer | Systems Engineering Student',
      projectsTitle: 'Highlighted Projects',
      aboutMeTitle: 'About Me',
      aboutMeDescription: 'I am a full stack developer with experience in freelance and personal projects. I specialize in React, Node.js, and MongoDB, and I am passionate about creating efficient solutions. I am always looking for new learning and professional growth opportunities.',
      skillsTitle: 'Skills',
      contactTitle: 'Contact',
      contactDescription: 'Do you have a project in mind? Don’t hesitate to contact me at my email:',
      projects: {
        doflamingoJoyas: 'Online jewelry store built with React, Tailwind CSS, Node.js, and MongoDB.',
        kaizenFitness: 'Online coaching platform built with React, Firebase, and Tailwind CSS.',
        cotizacionesYA: 'Web application developed in an agile and efficient way to obtain quotes.',
      },
      contactForm: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        placeholderName: 'Enter your name',
        placeholderEmail: 'Enter your email',
        placeholderMessage: 'Enter your message',
        submit: 'Send',
        errors: {
          name: 'Please enter a valid name.',
          email: 'Please enter a valid email.',
          message: 'Please enter a valid message.',
        }
      }
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
      src={language === 'es' ? 'https://flagcdn.com/w40/ar.jpg' : 'https://flagcdn.com/w40/us.jpg'} 
      alt={language === 'es' ? 'Español' : 'English'} 
      width={20} 
      height={20} 
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
              src="https://res.cloudinary.com/dzzec7hzl/image/upload/v1731432716/WhatsApp_Image_2023-11-20_at_15.41.27_56d89682_li0wws.jpg"
              alt="Foto de Fernando Gómez"
              width={120}
              height={120}
              className="rounded-lg shadow-lg border-2"
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
            description={translations[language].projects.doflamingoJoyas}
            link="https://github.com/Ferdeveloperr/doflamingo-joyas"
            video="https://res.cloudinary.com/dzzec7hzl/video/upload/v1732206202/WhatsApp_Video_2024-11-14_at_2.33.01_PM_jj4vaq.mp4"
          />
          <ProjectCard
            title="Kaizen Fitness"
            description={translations[language].projects.kaizenFitness}
            link="https://github.com/Ferdeveloperr/KaizenFrontend"
            video="https://res.cloudinary.com/dzzec7hzl/video/upload/v1732207110/WhatsApp_Video_2024-11-21_at_1.37.30_PM_bp9wbe.mp4"
          />
          <ProjectCard
            title="CotizacionesYA"
            description={translations[language].projects.cotizacionesYA}
            link="https://github.com/Ferdeveloperr/CotizacionesYA"
            video="https://res.cloudinary.com/dzzec7hzl/video/upload/v1731007393/WhatsApp_Video_2024-11-07_at_4.21.43_PM_woohxo.mp4"
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
      <label htmlFor="nombre" className="block text-white font-bold mb-2">
        {translations[language].contactForm.name}
      </label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        placeholder={translations[language].contactForm.placeholderName}
        value={formData.nombre}
        onChange={handleChange}
        onBlur={() => validateField('nombre', formData.nombre)}
        className="w-full p-2 rounded bg-white text-black border border-gray-500"
      />
      {formErrors.nombre && <span className="text-red-500">{translations[language].contactForm.errors.name}</span>}
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-white font-bold mb-2">
        {translations[language].contactForm.email}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder={translations[language].contactForm.placeholderEmail}
        value={formData.email}
        onChange={handleChange}
        onBlur={() => validateField('email', formData.email)}
        className="w-full p-2 rounded bg-white text-black border border-gray-500"
      />
      {formErrors.email && <span className="text-red-500">{translations[language].contactForm.errors.email}</span>}
    </div>
    <div className="mb-4">
      <label htmlFor="mensaje" className="block text-white font-bold mb-2">
        {translations[language].contactForm.message}
      </label>
      <textarea
        id="mensaje"
        name="mensaje"
        placeholder={translations[language].contactForm.placeholderMessage}
        value={formData.mensaje}
        onChange={handleChange}
        onBlur={() => validateField('mensaje', formData.mensaje)}
        className="w-full p-2 rounded bg-white text-black border border-gray-500"
      ></textarea>
      {formErrors.mensaje && <span className="text-red-500">{translations[language].contactForm.errors.message}</span>}
    </div>
    <button
      type="submit"
      className="w-full py-2 px-4 bg-gold text-black font-bold rounded hover:bg-black hover:text-gold transition-colors"
      disabled={sending}
    >
      {sending ? <ClipLoader size={24} color={'#000'} /> : translations[language].contactForm.submit}
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
                className="flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
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

