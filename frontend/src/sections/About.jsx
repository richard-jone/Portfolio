import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="glass p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Professional Summary</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                I am a dedicated Web Developer with extensive skills in web development. 
                I am deeply passionate about building responsive and user-friendly web applications that 
                deliver excellent digital experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With a solid foundation in Computer Science and Engineering, I am adept at both front-end 
                and back-end development. My goal is to constantly learn new technologies and contribute my 
                technical skills and creativity to a dynamic development team.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="glass p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary/30">
              <h4 className="text-4xl font-bold text-primary mb-2">1+</h4>
              <p className="text-sm text-gray-400">Years of Practice</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary/30">
              <h4 className="text-4xl font-bold text-secondary mb-2">5+</h4>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary/30">
              <h4 className="text-4xl font-bold text-accent mb-2">8.0</h4>
              <p className="text-sm text-gray-400">CGPA</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-primary/30">
              <h4 className="text-4xl font-bold text-primary mb-2">100%</h4>
              <p className="text-sm text-gray-400">Dedication</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
