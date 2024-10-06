// app/contact/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="min-h-screen p-8 text-center">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Email: <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a>
      </motion.p>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500" target="_blank">linkedin.com/in/yourprofile</a>
      </motion.p>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </main>
  );
}
