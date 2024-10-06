'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1.',
    image: 'images/project1.png', // Add your image path
    link: 'https://example.com/project1', // Project link
  },
  {
    title: 'Project 2',
    description: 'Description of project 2.',
    image: 'images/project2.png',
    link: 'https://example.com/project2',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3.',
    image: 'images/project3.png',
    link: 'https://example.com/project3',
  },
  {
    title: 'Project 4',
    description: 'Description of project 4.',
    image: 'images/project4.png',
    link: 'https://example.com/project4',
  },
];

export default function Home() {
  const [displayText, setDisplayText] = useState('PHILIPPINES');
  const [isFlag, setIsFlag] = useState(false);

  useEffect(() => {
    const typingEffect = () => {
      const originalText = 'PHILIPPINES';
      let currentText = originalText;

      const typeInterval = setInterval(() => {
        if (currentText.length > 0) {
          currentText = currentText.slice(0, -1); // Backspace effect
          setDisplayText(currentText);
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsFlag(true); // Show the flag after erasing
            setTimeout(() => {
              setIsFlag(false); // Hide the flag to reset
              setDisplayText(originalText); // Reset to original text
            }, 2000); // Pause before showing the text again
          }, 500); // Pause after backspacing
        }
      }, 150); // Speed of backspacing

      return () => clearInterval(typeInterval); // Cleanup on unmount
    };

    const interval = setInterval(() => {
      typingEffect();
    }, 5000); // Change every 5 seconds

    return () => {
      clearInterval(interval); // Cleanup on component unmount
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center p-4 text-white mx-auto max-w-4xl">
      <div className="flex justify-center mb-4 mt-10">
        <motion.img
          src="images/profile-pic.png" // Ensure to add your image to the public folder
          alt="Portfolio Image"
          className="rounded-full w-40 h-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
      <div className="self-start">
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Mark 
        </motion.h1>
        <motion.p
          className="text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          A Web Developer from <span className="font-semibold">
            {isFlag ? (
              <motion.img
                src="images/PH.png" // Add the path to your Philippine flag image
                alt="Philippine Flag"
                className="inline-block w-10 h-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              displayText
            )}
          </span>
        </motion.p>

        <motion.p 
          className="text-md mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          Curabitur ut nulla consequat, fermentum justo ut, bibendum erat.
        </motion.p>
        
        <hr className="w-full border-t border-gray-600 my-4" /> {/* Line Divider */}

        <h2 className="text-3xl font-bold mb-6 mt-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }} // Scale effect on hover
              style={{ width: '60%', height: '40vh' }} // Fixed size
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="h-48 w-full flex items-center justify-center overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover h-full w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }} // Staggered entrance
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-md text-gray-400">{project.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
