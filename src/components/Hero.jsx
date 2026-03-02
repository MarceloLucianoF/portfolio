import React from "react";
import { Code2, FileText, Github, Linkedin } from "lucide-react";

const GITHUB_URL = "https://github.com/MarceloLucianoF";
const LINKEDIN_URL = "https://linkedin.com/in/marcelo-luciano-filho";
const FOTO_PERFIL_URL = "https://avatars.githubusercontent.com/u/103156755?s=400&v=4";
const CV_URL = "/api/cv";

export default function Hero() {
  return (
    <section id="inicio" className="py-20 md:py-32 bg-gray-50 text-gray-900 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            
            {/* BADGE PEQUENO */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold shadow-inner">
              Desenvolvedor Frontend em evolução
            </div>

            <p className="text-xl font-medium text-blue-600 mb-[-10px]">
              Olá, eu sou
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-gray-950">
              Marcelo <span className="text-blue-600">Luciano</span> Filho
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Desenvolvedor Frontend (React) <span className="text-gray-600 font-medium">| UI • Componentização • Integração com APIs</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Crio interfaces modernas, responsivas e bem componentizadas no ecossistema React.
              <br/><span className="text-gray-500 text-base mt-2 block">Diferencial: entendo deploy e operação o suficiente para entregar com mais segurança em produção.</span>
            </p>

            {/* QUOTE CURTA */}
            <div className="bg-gray-950 text-white p-5 rounded-xl border-l-4 border-blue-500 shadow-md w-full max-w-2xl">
              <p className="text-sm md:text-base font-semibold italic leading-relaxed">
                "Interfaces limpas no front, atenção ao detalhe e código organizado para evoluir com o produto."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
              <a href="#projetos" className="px-8 py-3.5 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 hover:scale-[1.03] transition-all flex items-center gap-2.5">
                <Code2 size={20} /> Ver Projetos
              </a>
              <a href={CV_URL} className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-[1.03] transition-all flex items-center gap-2.5" title="Baixar currículo dinâmico em PDF">
                <FileText size={20} /> Baixar Currículo
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-100 transition-all flex items-center gap-2.5">
                <Github size={20} /> GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-100 transition-all flex items-center gap-2.5">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center items-center relative order-first md:order-last mb-10 md:mb-0">
            <div className="absolute w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative group p-2 rounded-full bg-white shadow-2xl border-4 border-white transition-transform duration-500 hover:rotate-2">
              <img src={FOTO_PERFIL_URL} alt="Marcelo Luciano Filho" className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover shadow-inner group-hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}