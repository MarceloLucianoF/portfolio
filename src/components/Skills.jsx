import React from 'react';
import { LayoutTemplate, Blocks, ServerCog, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    icon: <LayoutTemplate size={28} className="text-blue-600" />,
    title: "Stack Principal",
    description: "Tecnologias que utilizo no dia a dia para construir interfaces.",
    skills: [
      "React.js (Hooks, Context)",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Consumo de APIs REST"
    ]
  },
  {
    icon: <Blocks size={28} className="text-blue-600" />,
    title: "Arquitetura & Lógica",
    description: "Estruturação de projetos e gerenciamento de dados.",
    skills: [
      "Componentização escalável",
      "Gerenciamento de Estado",
      "Firebase (Auth/Firestore)",
      "Git & GitHub Workflow"
    ]
  },
  {
    icon: <ServerCog size={28} className="text-blue-600" />,
    title: "Diferencial Técnico",
    description: "Visão de servidor para garantir deploys sem dor de cabeça.",
    skills: [
      "Linux (base)",
      "Vercel (Serverless Deploy)",
      "Git/GitHub Workflow Avançado",
      "Troubleshooting em Produção"
    ]
  }
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4">
            Arsenal <span className="text-blue-600">Técnico</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Foco total no ecossistema moderno de Frontend, suportado por uma base sólida em infraestrutura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-6">{category.description}</p>
              
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-800 font-medium">
                    <CheckCircle2 size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                    {skill}
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