import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar } from 'react-icons/fi';

const achievements = [
  {
    title: 'Python Programming Course',
    organization: 'Guvi',
    description: 'Completed an intensive Python programming course, covering fundamentals and basic concepts.',
    icon: <FiAward className="text-secondary" size={32} />
  },
  {
    title: 'TCS National Qualifier Test',
    organization: 'TCS',
    description: 'Participated in the TCS NQT test and scored 77%.',
    icon: <FiStar className="text-yellow-500" size={32} />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-100/50 dark:bg-slate-800/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & <span className="text-gradient">Achievements</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-6 md:p-8 rounded-2xl flex items-start gap-6 hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-secondary/50 group"
            >
              <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">{item.title}</h3>
                <h4 className="text-sm font-medium text-primary mb-3">{item.organization}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
