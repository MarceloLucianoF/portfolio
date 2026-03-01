import React from 'react';

const GITHUB_URL = "https://github.com/MarceloLucianoF";
const LINKEDIN_URL = "https://linkedin.com/in/marcelo-luciano-filho";
const EMAIL = "marceloluciano30@gmail.com";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Lado Esquerdo: Copyright e Nome */}
        <div className="text-center md:text-left">
          <p className="text-2xl font-black text-gray-950 tracking-tighter mb-1">
            Marcelo<span className="text-blue-600">.dev</span>
          </p>
          <p className="text-sm font-medium text-gray-500">
            &copy; {currentYear} Marcelo Luciano Filho. Todos os direitos reservados.
          </p>
        </div>

        {/* Lado Direito: Links Sociais */}
        <div className="flex items-center gap-4">
          <a 
            href={`mailto:${EMAIL}`}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-200 shadow-sm"
            title="Enviar E-mail"
          >
            📧
          </a>
          <a 
            href={GITHUB_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
            title="GitHub"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a 
            href={LINKEDIN_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
            title="LinkedIn"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
        </div>

      </div>
    </footer>
  );
}