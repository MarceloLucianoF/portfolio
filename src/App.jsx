import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import GymUpMockup from './components/GymUpMockup';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased flex flex-col overflow-x-hidden w-full relative">
      
      <Navbar />
      
      {/* flex-grow empurra o Footer para baixo. w-full garante que não vai espremer. */}
      <main className="pt-20 flex-grow w-full flex flex-col">
        
        <Hero />
        
        <Skills />
        
        {/* Seção Projetos com w-full para o fundo e max-w-7xl para o conteúdo */}
        <section id="projetos" className="py-20 md:py-32 border-t border-gray-100 bg-gray-50 w-full">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
            <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-16 text-center">
               Projetos em <span className="text-blue-600">Destaque</span>
            </h2>

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
                   <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 shadow-inner">Drag and Drop API</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center w-full">
                  <GymUpMockup />
              </div>

            </div>
          </div>
        </section>

        <Experience />

      </main>

      <Footer />
      
    </div>
  );
}

export default App;