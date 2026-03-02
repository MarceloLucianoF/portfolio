import React from 'react';
import { Code2, Zap, ServerCog, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: <Code2 size={32} className="text-blue-600" />,
    title: "Desenvolvimento Frontend",
    description: "Construção de interfaces modernas, responsivas e focadas na experiência do usuário.",
    items: [
      "Ecossistema React (Hooks, Context, Vite)",
      "Estilização com Tailwind CSS",
      "Design Mobile-First e UI/UX",
      "Componentização escalável"
    ]
  },
  {
    icon: <Zap size={32} className="text-blue-600" />,
    title: "Lógica & Estado",
    description: "Gerenciamento de dados dinâmicos, integrações complexas e consumo de APIs.",
    items: [
      "JavaScript Moderno (ES6+)",
      "Gerenciamento de Estado Global",
      "Integração de APIs REST",
      "Integração com Firebase (Auth/Firestore)"
    ]
  },
  {
    icon: <ServerCog size={32} className="text-blue-600" />,
    title: "Visão Full-Cycle (Diferencial)",
    description: "Compreensão da esteira completa: do código limpo no front ao deploy no servidor.",
    items: [
      "Versionamento com Git e GitHub",
      "Deploy e Serverless (Vercel, Firebase)",
      "Familiaridade com Linux e Docker",
      "Troubleshooting ponta a ponta"
    ]
  }
];

export default function WhatIDo() {
  return (
    <section id="sobre" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4">
            O Que Eu <span className="text-blue-600">Faço</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combino o desenvolvimento de interfaces fluidas em React com uma visão profunda de como as aplicações rodam e escalam nos servidores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 mb-6 h-12 leading-relaxed">{pillar.description}</p>
              
              <ul className="space-y-3">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700 font-medium">
                    <CheckCircle2 size={16} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}