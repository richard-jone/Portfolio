import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Resume</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-primary/50"
          >
            <FiDownload /> Download Full Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl h-[600px] w-full"
        >
          <iframe 
            src="/resume.pdf#toolbar=0" 
            title="Resume PDF" 
            className="w-full h-full border-none bg-white"
          >
            <p>Your browser does not support PDFs. <a href="/resume.pdf">Download the PDF</a>.</p>
          </iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
