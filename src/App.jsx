import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import GymUpMockup from './components/GymUpMockup';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased flex flex-col overflow-x-hidden w-full relative">
      <Navbar />
      
      <main className="pt-20 flex-grow w-full flex flex-col">
        
        {/* PRIMEIRA DOBRA: Impacto e Título */}
        <Hero />
        
        {/* POSICIONAMENTO ESTRATÉGICO: Sobre Mim Premium */}
        <About />
        
        {/* ARSENAL TÉCNICO: Skills divididas em pilares */}
        <Skills />
        
        {/* SEÇÃO PROJETOS EM DESTAQUE */}
        <section id="projetos" className="py-20 md:py-32 border-t border-gray-100 bg-gray-50 w-full">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
            <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-16 text-center">
               Projetos em <span className="text-blue-600">Destaque</span>
            </h2>

            <div className="space-y-12">
              
              {/* PROJETO 1: GymUp (SaaS / Frontend) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900">GymUp: Plataforma de Gestão de Treinos</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Aplicação web interativa para o ecossistema fitness, conectando Personal Trainers e Alunos. Desenvolvida com React e Tailwind CSS Mobile-First, o projeto utiliza Firebase para gerenciamento de estado assíncrono complexo e persistência de dados em tempo real. Destaca-se pelo gerenciador de estado do cronômetro global e dashboards inteligentes de evolução.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                     <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 shadow-inner">React.js</span>
                     <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 shadow-inner">Tailwind CSS</span>
                     <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 shadow-inner">Firebase (NoSQL)</span>
                  </div>
                </div>
                <div className="lg:col-span-5 flex justify-center w-full">
                    <GymUpMockup />
                </div>
              </div>

              {/* PROJETO 2: Especialista Docs Focalle (Automação / IA Corporativa) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gray-900 p-10 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
                
                <div className="lg:col-span-8 flex flex-col space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold w-max uppercase tracking-wider">
                    Solução Corporativa / Automação
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-white">Especialista Docs Focalle (IA)</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Desenvolvimento e implementação de um Expert em Inteligência Artificial voltado para a criação e automação de manuais técnicos de suporte N2. Este projeto estruturou do zero a base de conhecimento da empresa, consolidando informações críticas de hardwares e radares de trânsito em padrões rigorosos de troubleshooting.
                  </p>
                  
                  <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
                    <li><strong className="text-gray-200">Impacto Direto:</strong> Redução drástica do SLA de atendimento da equipe.</li>
                    <li><strong className="text-gray-200">Entrega:</strong> Produção autônoma de mais de 16 manuais e mapeamento de 15+ problemas comuns.</li>
                  </ul>

                  <div className="flex flex-wrap gap-3 pt-4">
                     <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-bold border border-gray-700">Engenharia de Prompts</span>
                     <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-bold border border-gray-700">Claude AI</span>
                     <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-bold border border-gray-700">Python</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-center relative z-10">
                   <div className="w-48 h-48 bg-gray-800 rounded-full border-8 border-gray-700 flex items-center justify-center shadow-2xl">
                      <span className="text-7xl">🧠</span>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* LINHA DO TEMPO: Experiência Profissional */}
        <Experience />
        
        {/* BASE TEÓRICA E TÉCNICA: Formação */}
        <Education />

      </main>

      {/* RODAPÉ */}
      <Footer />
      
    </div>
  );
}

export default App;