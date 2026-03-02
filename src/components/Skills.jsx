import React from 'react';
import { LayoutTemplate, Database, Server, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    icon: <LayoutTemplate size={28} className="text-blue-600" />,
    title: "Frontend & UI",
    description: "Criação de interfaces responsivas, modernas e acessíveis.",
    skills: [
      "React.js (Hooks, Context API)",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "UI/UX Mobile-First",
      "Vite & Componentização"
    ]
  },
  {
    icon: <Database size={28} className="text-blue-600" />,
    title: "Lógica & Ferramentas",
    description: "Gerenciamento de dados e versionamento seguro de código.",
    skills: [
      "Integração de APIs REST",
      "Firebase (Auth/Firestore)",
      "Git & GitHub",
      "Gerenciamento de Estado",
      "SQL Básico/Intermediário"
    ]
  },
  {
    icon: <Server size={28} className="text-blue-600" />,
    title: "Infra & Deploy (Diferencial)",
    description: "Visão full-cycle para garantir performance em produção.",
    skills: [
      "Vercel (Serverless/Deploy)",
      "Docker & Containers",
      "Linux (Debian/CentOS)",
      "Python & Automação",
      "Troubleshooting de Servidores"
    ]
  }
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4">
            Meu Arsenal <span className="text-blue-600">Técnico</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O ecossistema de tecnologias que utilizo para transformar lógica complexa em interfaces fluidas e performáticas.
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
