import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'Skybrisk',
    duration: 'Aug 2025 - Jan 2026',
    description: 'Built a Student Management System for managing student records and academic details, and a Book Store Management System for handling book inventory, sales, and customer data. Gained hands-on experience in real-world projects using diverse technologies.'
  },
  {
    role: 'Intern',
    company: 'Digisailor',
    duration: 'Aug 2024 - Sep 2024',
    description: 'Completed internship training at Digi Sailor. During my internship, I gained hands-on experience working on web projects and collaborating with experienced developers.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-100/50 bg-slate-800/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Experience</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 rounded-2xl border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 flex items-center gap-2">
                    <FiBriefcase className="text-primary" /> {exp.role} 
                  </h3>
                  <h4 className="text-lg font-medium text-secondary mt-1">{exp.company}</h4>
                </div>
                <div className="mt-2 md:mt-0 inline-flex items-center gap-2 text-sm font-medium bg-slate-200 bg-slate-700 text-white-900 text-white-300 px-4 py-1.5 rounded-full w-max">
                  <FiCalendar /> {exp.duration}
                </div>
              </div>
              
              <p className="text-gray-400 relative z-10 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
