import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo'; 
import GymUpMockup from './components/GymUpMockup';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact'; // <-- Importado aqui!
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased flex flex-col overflow-x-hidden w-full relative">
      <Navbar />
      
      <main className="pt-20 flex-grow w-full flex flex-col">
        
        {/* 1. IMPACTO IMEDIATO */}
        <Hero />
        
        {/* 2. O QUE EU FAÇO (Os 3 Pilares) */}
        <WhatIDo />
        
        {/* 3. PROJETOS ESTRATÉGICOS */}
        <section id="projetos" className="py-20 md:py-32 border-t border-gray-100 bg-gray-50 w-full">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
            <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4 text-center">
               Projetos <span className="text-blue-600">Estratégicos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16">
              Casos reais onde estruturei conhecimento, reduzi SLA e desenvolvi arquiteturas complexas.
            </p>

            <div className="space-y-16">
              
              {/* PROJETO CORPORATIVO: Especialista Docs Focalle */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gray-950 p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
                
                <div className="lg:col-span-8 flex flex-col space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold w-max uppercase tracking-widest">
                    🚀 Case Corporativo (Focalle)
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">Especialista Docs Focalle (IA)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">O Problema</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Dependência de conhecimento informal e alto tempo de diagnóstico em suporte N2, gerando falta de padronização nos atendimentos.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">A Solução</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Criação de um Expert em IA para mapear fluxos, padronizar manuais e consolidar comandos críticos em uma base inteligente.
                      </p>
                    </div>
                  </div>
                  
                  {/* Bloco de Métricas de Impacto */}
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 mt-4">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Métricas de Impacto</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                      <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 16+ manuais e 200+ comandos documentados</li>
                      <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 15+ cenários críticos padronizados</li>
                      
                      <li className="flex items-start gap-2 font-bold text-gray-400">
                        <span className="text-red-400 mt-0.5">📉</span> Antes: Alta dependência de especialistas
                      </li>
                      <li className="flex items-start gap-2 font-bold text-white">
                        <span className="text-green-400 mt-0.5">📈</span> Depois: Redução de ~35% no tempo médio de diagnóstico (SLA)
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                     <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-xs font-bold border border-gray-700">Engenharia de Prompts</span>
                     <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-xs font-bold border border-gray-700">Claude AI</span>
                     <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-xs font-bold border border-gray-700">Python</span>
                     <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-xs font-bold border border-gray-700">Linux</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center relative z-10">
                   <div className="w-56 h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-8 border-gray-800 flex items-center justify-center shadow-2xl relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                      <span className="text-[5rem] relative z-10">🧠</span>
                   </div>
                </div>
              </div>

              {/* PROJETO SAAS: GymUp */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-gray-100">
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold w-max uppercase tracking-widest">
                    💻 Case Técnico / SaaS
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">GymUp — Plataforma de Gestão</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Aplicação SaaS desenvolvida para substituir planilhas estáticas por uma plataforma interativa, conectando Personal Trainers e Alunos com persistência em tempo real.
                  </p>
                  
                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded">👨‍🏫</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Painel do Coach</h4>
                        <p className="text-sm text-gray-600">Construtor dinâmico de fichas, gestão de alunos e biblioteca global de exercícios.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded">🏋️</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Experiência do Aluno</h4>
                        <p className="text-sm text-gray-600">Runner interativo com cronômetro global, registro série a série e UX Mobile-First.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded">⚡</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Destaque Técnico</h4>
                        <p className="text-sm text-gray-600">Gerenciamento de estado complexo com múltiplos timers assíncronos e sincronização direta com Firebase.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-6">
                     <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-xs font-bold border border-gray-200 shadow-sm">React.js</span>
                     <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-xs font-bold border border-gray-200 shadow-sm">Tailwind CSS</span>
                     <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-xs font-bold border border-gray-200 shadow-sm">Firebase (Auth/Firestore)</span>
                  </div>
                </div>
                
                <div className="lg:col-span-5 flex justify-center w-full">
                    <GymUpMockup />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. EXPERIÊNCIA PROFISSIONAL COMPACTA */}
        <Experience />
        
        {/* 5. ARSENAL TÉCNICO VISUAL */}
        <Skills />
        
        {/* 6. FORMAÇÃO */}
        <Education />

        {/* 7. CONTATO (Nova Etapa 2) */}
        <Contact />

      </main>

      {/* RODAPÉ */}
      <Footer />
    </div>
  );
}

export default App;