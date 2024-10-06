// app/projects/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'A web application for managing tasks efficiently.',
    link: 'https://link-to-your-project-1.com',
    image: 'https://images.unsplash.com/photo-1601992912227-d7884cfb23a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3OXwwfDF8c2VhcmNofDF8fHRhc2t8ZW58MHx8fHwxNjY1Njg1MjU4&ixlib=rb-1.2.1&q=80&w=400', // Placeholder image
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform for online shopping.',
    link: 'https://link-to-your-project-2.com',
    image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3OXwwfDF8c2VhcmNofDMyfHxjb250YWluZXJ8ZW58MHx8fHwxNjY1Njg1MjYy&ixlib=rb-1.2.1&q=80&w=400', // Placeholder image
  },
  {
    title: 'Project 3',
    description: 'A portfolio website to showcase my work.',
    link: 'https://link-to-your-project-3.com',
    image: 'https://images.unsplash.com/photo-1547031651-8e9b1cb6a140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3OXwwfDF8c2VhcmNofDV8fHNpdGV8ZW58MHx8fHwxNjY1Njg1Mjc0&ixlib=rb-1.2.1&q=80&w=400', // Placeholder image
  },
  {
    title: 'Project 4',
    description: 'A mobile application for fitness tracking.',
    link: 'https://link-to-your-project-4.com',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3OXwwfDF8c2VhcmNofDMyfHxmb3J0dW5lfGVufDB8fHx8MTY2NTY4NTI5Mw&ixlib=rb-1.2.1&q=80&w=400', // Placeholder image
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <ul className="list-none">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-4 card"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-md mb-2">{project.description}</p>
            <img src={project.image} alt={project.title} className="rounded-lg mb-2" />
            <Link
              href={project.link}
              className="text-blue-500 hover:underline mt-2 block"
              target="_blank"
            >
              View Project
            </Link>
          </motion.li>
        ))}
      </ul>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </main>
  );
}
