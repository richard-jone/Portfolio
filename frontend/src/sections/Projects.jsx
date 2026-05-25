import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'CHESS ACADEMY',
    description: 'Chess Academy is a web-based management system built to allow staff to enroll students, manage fee payments, track due amounts and dates, and update payment statuses. Admins can create and manage branches and assign staff. The dashboard provides an overview of students, pending dues, and revenue.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flask (Python)', 'MySQL'],
    link: 'http://Shadow122003.pythonanywhere.com',
    github: '#',
    imageText: 'CA'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-white/10 hover:border-primary/50"
            >
              <div className="h-48 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-secondary/80 opacity-60"></div>
                <span className="text-6xl font-bold text-white relative z-10">{project.imageText}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium bg-slate-200 bg-slate-700 text-gray-300 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <a href={project.github} className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
                    <FiGithub size={20} /> <span className="text-sm font-medium">Code</span>
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-secondary transition-colors flex items-center gap-1 ml-auto">
                    <span className="text-sm font-medium">Live Demo</span> <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
