import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center justify-between">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-start text-left"
        >
          <span className="text-primary font-medium tracking-wider uppercase mb-2">Hello, I'm</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Benjamin <br/>
            <span className="text-gradient">Richard Jone</span> J.
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6">
            Web Developer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-8">
            Passionate about building responsive, user-friendly web applications. 
            Adept at both front-end and back-end development, eager to contribute 
            technical skills to a dynamic team.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-primary/50 flex items-center gap-2"
            >
              <FiMail /> Contact Me
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
            >
              <FiDownload /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-lg opacity-50"></div>
            <div className="relative w-full h-full rounded-full border-2 border-white/10 glass overflow-hidden flex items-center justify-center bg-slate-800">
               {/* Profile Image Placeholder */}
               <span className="text-6xl text-white/50">J</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
