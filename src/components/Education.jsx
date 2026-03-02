import React from 'react';
import { GraduationCap, Cpu, ShieldCheck, Users, Database, Bot, Languages } from 'lucide-react';

export default function Education() {
  return (
    <section id="formacao" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4">
            Formação & <span className="text-blue-600">Certificações</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A base teórica e técnica que sustenta minha evolução constante como Desenvolvedor e solucionador de problemas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Lado Esquerdo: Educação Acadêmica */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Acadêmico</h3>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex gap-5">
              <div className="mt-1">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 leading-tight">Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)</h4>
                <p className="text-blue-600 font-semibold text-sm mt-1">Estácio | Março 2023 – Julho 2025</p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Coeficiente de Rendimento (CR): 9.10. Destaque em disciplinas como Programação Orientada a Objetos, Banco de Dados e Engenharia de Software.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex gap-5">
              <div className="mt-1">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
                  <Cpu className="text-gray-600" size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 leading-tight">Técnico em Eletrônica</h4>
                <p className="text-gray-500 font-semibold text-sm mt-1">Inst. Educacional São João da Escócia | 2020 – 2022</p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  Formação técnica sólida que fundamentou meu raciocínio lógico e entendimento profundo de hardware, redes e sistemas computacionais.
                </p>
              </div>
            </div>
          </div>

          {/* Lado Direito: Certificações e Cursos */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Certificações & Idiomas</h3>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 flex-shrink-0">
                    <Bot className="text-blue-600" size={20} />
                  </div>
                  <span className="font-medium text-gray-800">IA & Engenharia de Prompts</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 flex-shrink-0">
                    <Database className="text-gray-700" size={20} />
                  </div>
                  <span className="font-medium text-gray-800">SQL para Análise de Dados (Udemy)</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 flex-shrink-0">
                    <ShieldCheck className="text-gray-700" size={20} />
                  </div>
                  <span className="font-medium text-gray-800">Cisco Cybersecurity</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 flex-shrink-0">
                    <Users className="text-gray-700" size={20} />
                  </div>
                  <span className="font-medium text-gray-800">Sebrae Customer Success</span>
                </li>
                <li className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100 flex-shrink-0">
                    <Languages className="text-blue-600" size={20} />
                  </div>
                  <span className="font-medium text-gray-800">Inglês (Técnico) & Espanhol (Básico)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}