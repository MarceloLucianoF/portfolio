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
        
        {/* 3. PROJETOS ESTRATÉGICOS */}
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
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold w-max uppercase tracking-widest">
                      🚀 Projeto Principal (Frontend)
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">GymUp — Plataforma SaaS</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Aplicação SaaS desenvolvida para substituir planilhas estáticas por uma plataforma interativa, conectando Personal Trainers e Alunos com persistência em tempo real.
                    </p>
                    
                    <div className="space-y-4 pt-2">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded">⚛️</div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">Arquitetura de UI</h4>
                          <p className="text-sm text-gray-600">Componentização escalável, UX Mobile-First e estilização avançada utilizando Tailwind CSS.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded">⚡</div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">Gerenciamento de Estado</h4>
                          <p className="text-sm text-gray-600">Lógica de interface com múltiplos timers assíncronos (Runner interativo) sem perda de performance na renderização.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded">🔥</div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">Integração BaaS</h4>
                          <p className="text-sm text-gray-600">Sincronização de dados direta com Firebase (Firestore) e autenticação de usuários.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-6">
                       <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-xs font-bold border border-gray-200 shadow-sm">React.js</span>
                       <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-xs font-bold border border-gray-200 shadow-sm">Tailwind CSS</span>
                       <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-xs font-bold border border-gray-200 shadow-sm">Firebase</span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-5 flex justify-center w-full">
                      <GymUpMockup />
                  </div>
                </div>

                {/* PROJETO 2: INICIATIVA FOCALLE (O SEU DIFERENCIAL) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gray-950 p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
                  
                  <div className="lg:col-span-8 flex flex-col space-y-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-xs font-bold w-max uppercase tracking-widest">
                      💻 Case de Automação & Infra
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">Iniciativa Interna de Padronização com IA</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Visão de Back-end</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Aplicação de scripts Python e Engenharia de Prompts para consolidar mais de 200 comandos operacionais Linux, provando versatilidade além da interface.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">Impacto Real</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Estruturação de base documental técnica que contribuiu para a redução do tempo médio de diagnóstico (SLA) na equipe de sustentação N2.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-6">
                       <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-xs font-bold border border-gray-700">Python</span>
                       <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-xs font-bold border border-gray-700">Linux</span>
                       <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-xs font-bold border border-gray-700">Claude AI</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex justify-center relative z-10">
                     <div className="w-56 h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-8 border-gray-800 flex items-center justify-center shadow-2xl relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20"></div>
                        <span className="text-[5rem] relative z-10">⚙️</span>
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