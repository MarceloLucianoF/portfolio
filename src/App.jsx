import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo'; 
import GymUpMockup from './components/GymUpMockup';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Animações e UX Mobile
import FadeIn from './components/FadeIn';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased flex flex-col overflow-x-hidden w-full relative">
      <Navbar />
      
      <main className="pt-20 flex-grow w-full flex flex-col">
        
        {/* 1. IMPACTO IMEDIATO (Sempre visível ao carregar) */}
        <Hero />
        
        {/* 2. O QUE EU FAÇO */}
        <FadeIn>
          <WhatIDo />
        </FadeIn>
        
        {/* 3. PROJETOS ESTRATÉGICOS (Foco Frontend) */}
        <FadeIn>
          <section id="projetos" className="py-20 md:py-32 border-t border-gray-100 bg-gray-50 w-full">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
              <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4 text-center">
                 Projetos <span className="text-blue-600">Estratégicos</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16">
                Aplicações que desenvolvi unindo interfaces modernas em React com lógica de negócios complexa.
              </p>

              <div className="space-y-16">
                
                {/* PROJETO 1: GYMUP (FRONTEND SAAS) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-gray-100">
                  <div className="lg:col-span-7 flex flex-col space-y-6">
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">GymUp — Plataforma SaaS (React + Firebase)</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Plataforma para gestão de treinos com foco em UX Mobile-First e persistência em tempo real.
                    </p>
                    
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-start text-sm text-gray-700 font-medium">
                        <span className="text-blue-500 mr-2 font-bold">•</span> Componentização escalável e layout responsivo.
                      </li>
                      <li className="flex items-start text-sm text-gray-700 font-medium">
                        <span className="text-blue-500 mr-2 font-bold">•</span> Runner interativo com timers e fluxo série a série.
                      </li>
                      <li className="flex items-start text-sm text-gray-700 font-medium">
                        <span className="text-blue-500 mr-2 font-bold">•</span> Auth + Firestore (persistência em tempo real).
                      </li>
                      <li className="flex items-start text-sm text-gray-700 font-medium">
                        <span className="text-blue-500 mr-2 font-bold">•</span> Organização de estado e componentes pensando em manutenção.
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-6">
                       <a href="#" className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-sm">Ver Demo</a>
                       <a href="https://github.com/MarceloLucianoF" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-gray-100 text-gray-800 font-bold rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors text-sm">Ver Código</a>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-5 flex justify-center w-full">
                      <GymUpMockup />
                  </div>
                </div>

                {/* PROJETO 2: PORTFÓLIO INTERATIVO */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gray-950 p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
                  
                  <div className="lg:col-span-8 flex flex-col space-y-6 relative z-10">
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">Portfólio Interativo (React/Vite)</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Projeto focado em UI, componentização e uma fonte única de dados para conteúdo.
                    </p>
                    
                    <ul className="space-y-3 pt-2">
                      <li className="flex items-start text-sm text-gray-300 font-medium">
                        <span className="text-blue-400 mr-2 font-bold">•</span> Componentes reutilizáveis e estilização Tailwind.
                      </li>
                      <li className="flex items-start text-sm text-gray-300 font-medium">
                        <span className="text-blue-400 mr-2 font-bold">•</span> Performance e carregamento leve com animações nativas.
                      </li>
                      <li className="flex items-start text-sm text-gray-300 font-medium">
                        <span className="text-blue-400 mr-2 font-bold">•</span> Geração de currículo (PDF) no backend serverless (Vercel).
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-6">
                       <a href="https://github.com/MarceloLucianoF/portfolio" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-gray-800 text-white font-bold rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors text-sm">Ver Código</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </FadeIn>

        {/* 4. EXPERIÊNCIA PROFISSIONAL COMPACTA */}
        <FadeIn>
          <Experience />
        </FadeIn>
        
        {/* 5. ARSENAL TÉCNICO VISUAL */}
        <FadeIn>
          <Skills />
        </FadeIn>
        
        {/* 6. FORMAÇÃO */}
        <FadeIn>
          <Education />
        </FadeIn>

        {/* 7. CONTATO */}
        <FadeIn>
          <Contact />
        </FadeIn>

      </main>

      {/* UX MOBILE: Botão de voltar ao topo */}
      <ScrollToTop />

      {/* RODAPÉ */}
      <Footer />
    </div>
  );
}

export default App;