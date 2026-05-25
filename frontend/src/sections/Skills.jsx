import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 100 },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 100 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, level: 85 },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 80 },
      { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 75 },
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 70 },
      { name: 'Express.js', icon: <SiExpress className="text-gray-400" />, level: 75 },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 80 },
      { name: 'SQL / MySQL', icon: <SiMysql className="text-blue-600" />, level: 75 },
      { name: 'Python (Flask)', icon: <FaPython className="text-yellow-500" />, level: 80 },
    ]
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'Problem Solving', icon: null, level: 85 },
      { name: 'Analytical Thinking', icon: null, level: 85 },
      { name: 'Communication', icon: null, level: 90 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-100/50 bg-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full "></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass p-6 rounded-2xl hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-100 border-b border-white/10 pb-2">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <span className="text-xl">{skill.icon}</span>}
                        <span className="font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
