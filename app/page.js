'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Fernando Gómez
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-xl"
        >
          Desarrollador Full Stack con más de 2 años de experiencia.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8"
        >
          <Link href="#projects" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
            Ver mis Proyectos
          </Link>
        </motion.div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="text-lg leading-relaxed">
          Cuento con más de 2 años de experiencia en proyectos freelance y personales.
          Me destaco por mi capacidad de aprendizaje, habilidad de relevamiento de requisitos 
          y mis excelentes soft-skills.
        </p>
      </section>

      <section id="projects" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Doflamingo Joyas"
            description="Tienda de joyas online con React, Tailwind CSS, Node.js y MongoDB"
            link="https://github.com/Ferdeveloperr/doflamingo-joyas"
          />
        </div>
      </section>
    </div>
  );
}

const ProjectCard = ({ title, description, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 p-6 rounded-lg"
  >
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-lg mb-4">{description}</p>
    <Link href={link} className="text-blue-500 hover:underline">
      Ver proyecto en GitHub
    </Link>
  </motion.div>
);
