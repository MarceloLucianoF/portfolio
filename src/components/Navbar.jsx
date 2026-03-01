import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Nome */}
          <a href="#inicio" className="text-2xl font-black text-gray-950 tracking-tighter hover:opacity-80 transition-opacity">
            Marcelo<span className="text-blue-600">.dev</span>
          </a>
          
          {/* Links de Navegação (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">Início</a>
            <a href="#habilidades" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">Habilidades</a>
            <a href="#projetos" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">Projetos</a>
            <a href="#experiencia" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">Experiência</a>
          </div>

          {/* Botão de Contato */}
          <div className="flex items-center">
            <a 
              href="mailto:marceloluciano30@gmail.com" 
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all"
            >
              Falar com Marcelo
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}