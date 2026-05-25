const fs = require('fs');
const path = require('path');

const dirs = ['src/components', 'src/sections'];
const basePath = 'd:/Portfolio/frontend';

dirs.forEach(dir => {
  const fullPath = path.join(basePath, dir);
  if (!fs.existsSync(fullPath)) return;
  const files = fs.readdirSync(fullPath);
  
  files.forEach(file => {
    if (file.endsWith('.jsx')) {
      const filePath = path.join(fullPath, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Backgrounds
      content = content.replace(/bg-slate-50 dark:bg-slate-900/g, 'bg-[#111827]');
      content = content.replace(/bg-slate-100 dark:bg-slate-800/g, 'bg-gray-800');
      content = content.replace(/bg-slate-200 dark:bg-slate-800/g, 'bg-gray-800');
      content = content.replace(/bg-white dark:bg-slate-900/g, 'bg-[#111827]');
      content = content.replace(/bg-white\/80 dark:bg-slate-900\/80/g, 'bg-[#111827]/80');
      
      // Texts
      content = content.replace(/text-slate-900 dark:text-slate-50/g, 'text-gray-50');
      content = content.replace(/text-slate-800 dark:text-slate-100/g, 'text-gray-100');
      content = content.replace(/text-slate-700 dark:text-slate-300/g, 'text-gray-300');
      content = content.replace(/text-slate-600 dark:text-slate-400/g, 'text-gray-400');
      content = content.replace(/text-slate-500 dark:text-slate-400/g, 'text-gray-400');
      content = content.replace(/text-slate-900 dark:text-slate-100/g, 'text-gray-100');
      content = content.replace(/text-slate-900 dark:text-white/g, 'text-white');
      
      // Borders
      content = content.replace(/border-slate-200 dark:border-slate-700/g, 'border-white/10');
      content = content.replace(/border-slate-200 dark:border-slate-800/g, 'border-white/10');
      content = content.replace(/border-slate-300 dark:border-slate-600/g, 'border-white/10');
      content = content.replace(/border-slate-300 dark:border-slate-700/g, 'border-white/10');
      
      // Hovers
      content = content.replace(/hover:bg-slate-100 dark:hover:bg-slate-800/g, 'hover:bg-gray-800');
      content = content.replace(/hover:bg-slate-200 dark:hover:bg-slate-800/g, 'hover:bg-gray-800');
      content = content.replace(/hover:bg-slate-50 dark:hover:bg-slate-800/g, 'hover:bg-gray-800');
      
      // Just strip remaining dark: prefix
      content = content.replace(/dark:/g, '');
      
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
});
console.log("Cleanup done.");
