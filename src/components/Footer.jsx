import React from 'react';
import { Github, Linkedin, Mail, FileJson } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-gray-300">Marcelo.dev</p>
          <p className="text-xs mt-1 text-gray-500">
            © {currentYear} Marcelo Luciano Filho. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="/resume.json" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 text-[10px] font-mono" title="View raw resume.json">
            <FileJson size={14} /> resume.json (dados)
          </a>
          <a href="mailto:marceloluciano30@gmail.com" className="text-gray-500 hover:text-white transition-colors" title="E-mail">
            <Mail size={20} />
          </a>
          <a href="https://github.com/MarceloLucianoF" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/marcelo-luciano-filho" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors" title="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}