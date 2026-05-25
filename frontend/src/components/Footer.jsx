import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-100 bg-slate-900 border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-gradient">Jone.dev</span>
            <p className="mt-2 text-sm text-gray-400">
             
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="mailto:jonek3318@gmail.com" className="text-slate-500 hover:text-primary transition-colors">
              <FiMail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
