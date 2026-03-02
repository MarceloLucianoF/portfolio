import React from 'react';

const pillars = [
  {
    icon: "🖥",
    title: "Infraestrutura Crítica",
    description: "Sustentação e orquestração de ambientes Linux de alta disponibilidade.",
    items: [
      "Administração Linux (Debian/CentOS)", 
      "Containers Docker e PostgreSQL", 
      "VPNs e Túneis SSH", 
      "Atuação em sistemas de monitoramento viário"
    ]
  },
  {
    icon: "🤖",
    title: "Automação & IA",
    description: "Uso de IA e código estruturado para ganho de previsibilidade operacional.",
    items: [
      "Engenharia de Prompts aplicada à documentação", 
      "Estruturação de bases técnicas com IA", 
      "Organização automatizada de manuais", 
      "Scripts de diagnóstico em Python e SQL"
    ]
  },
  {
    icon: "📚",
    title: "Engenharia de Conhecimento",
    description: "Estruturação de operações para reduzir a dependência de conhecimento informal.",
    items: [
      "Padronização de fluxos de troubleshooting", 
      "Consolidação de documentação técnica escalável", 
      "Contribuição para melhoria de SLA", 
      "Mapeamento de cenários recorrentes"
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
            Minha atuação combina três pilares estratégicos para elevar a maturidade técnica, a segurança e a eficiência de operações críticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-3xl mb-6">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 mb-6 h-12 leading-relaxed">{pillar.description}</p>
              
              <ul className="space-y-3">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700 font-medium">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>
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