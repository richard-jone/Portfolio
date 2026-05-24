import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Education</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none">
          {/* Timeline for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 md:w-1/2 md:pr-12 md:ml-auto md:mr-0 text-left md:text-right"
            style={{ clear: 'both' }}
          >
            {/* Desktop timeline dot */}
            <div className="hidden md:flex absolute top-6 -left-3 w-6 h-6 bg-primary rounded-full items-center justify-center border-4 border-slate-50 dark:border-slate-900 z-10 transform -translate-x-1/2"></div>
            
            {/* Mobile timeline dot */}
            <div className="md:hidden absolute top-6 -left-[2.35rem] w-4 h-4 bg-primary rounded-full items-center justify-center border-2 border-slate-50 dark:border-slate-900 z-10"></div>

            <div className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 relative group text-left">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              
              <div className="flex items-center gap-2 text-primary mb-2">
                <FiBookOpen />
                <span className="font-semibold text-sm">Bachelor of Engineering</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">Computer Science and Engineering</h3>
              <h4 className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-4">Holy Cross Engineering College</h4>
              
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Completed B.E. in Computer Science and Engineering with a strong focus on core concepts and practical implementation.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                <span className="flex items-center gap-1 text-slate-500 bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">
                  <FiCalendar /> Aug 2020 - May 2024
                </span>
                <span className="text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                  CGPA: 8.0
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
