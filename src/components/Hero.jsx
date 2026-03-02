import React from "react";
import { MessageCircle, FileText } from "lucide-react"; // Importando os ícones

const GITHUB_URL = "https://github.com/MarceloLucianoF";
const LINKEDIN_URL = "https://linkedin.com/in/marcelo-luciano-filho";
const FOTO_PERFIL_URL = "https://avatars.githubusercontent.com/u/103156755?s=400&v=4";
const CV_URL = "/api/cv";
const RESUME_JSON_URL = "/resume.json";

export default function Hero() {
  return (
    <section id="inicio" className="py-20 md:py-32 bg-gray-50 text-gray-900 w-full relative overflow-hidden">
      
      {/* EASTER EGG PARA TECH LEADS */}
      <a
        href={RESUME_JSON_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 md:bottom-6 md:right-8 text-[10px] font-mono text-gray-400 opacity-20 hover:opacity-100 transition-opacity duration-300 z-50 flex items-center gap-1 cursor-crosshair"
        title="Single Source of Truth (JSON)"
      >
        <span className="text-blue-500 font-bold">{`{ }`}</span> GET /resume.json
      </a>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Desenvolvedor em Evolução
            </div>

            <p className="text-xl font-medium text-blue-600 mb-[-10px]">
              Olá, eu sou
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-gray-950">
              Marcelo <span className="text-blue-600">Luciano</span> Filho
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Desenvolvedor Frontend (React) <span className="text-gray-600 font-medium">| UI, Componentização & Deploy</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Focado na construção de interfaces modernas, responsivas e escaláveis no ecossistema React, com o grande diferencial de entender a fundo a infraestrutura e o deploy por trás do código.
            </p>

            <div className="bg-gray-950 text-white p-5 rounded-xl border-l-4 border-blue-500 shadow-md w-full max-w-2xl">
              <p className="text-sm md:text-base font-semibold italic leading-relaxed">
                "Crio experiências visuais fluidas no Frontend e aplico minha vivência em servidores para garantir que a aplicação rode com excelência na produção."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
              <a href="#contato" className="px-8 py-3.5 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 hover:scale-[1.03] transition-all flex items-center gap-2.5">
                <MessageCircle size={20} /> Contato
              </a>
              <a href={CV_URL} className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-[1.03] transition-all flex items-center gap-2.5" title="Baixar currículo dinâmico em PDF">
                <FileText size={20} /> Baixar Currículo
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-100 transition-all flex items-center gap-2.5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5" /> GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-100 transition-all flex items-center gap-2.5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Lado Direito: Foto e Tech Floating Icons */}
          <div className="md:col-span-5 flex justify-center items-center relative order-first md:order-last mb-10 md:mb-0">
            <div className="absolute w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative group p-2 rounded-full bg-white shadow-2xl border-4 border-white transition-transform duration-500 hover:rotate-2">
              <img src={FOTO_PERFIL_URL} alt="Marcelo Luciano Filho" className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-inner group-hover:scale-[1.02] transition-transform duration-500" />
            </div>
            
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-pulse">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
            </div>
            <div className="absolute -top-5 -right-5 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-pulse" style={{ animationDelay: "0.5s" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8 rounded" />
            </div>
            <div className="absolute top-1/2 -left-12 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-pulse" style={{ animationDelay: "1s" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-8 h-8" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}