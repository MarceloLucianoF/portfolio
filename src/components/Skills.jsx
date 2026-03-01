import React from 'react';

const skillCategories = [
  {
    title: "Infraestrutura & DevOps",
    icon: "🖥️",
    description: "Sustentação de sistemas críticos e redes seguras.",
    skills: ["Linux (Debian/CentOS)", "Docker", "PostgreSQL", "OpenVPN & WireGuard", "Túneis SSH", "Firewall", "Chrony/NTP", "RabbitMQ"]
  },
  {
    title: "Desenvolvimento & Dados",
    icon: "💻",
    description: "Criação de aplicações e inteligência de negócios.",
    skills: ["Python", "JavaScript / React", "SQL Avançado", "Pandas & NumPy", "Git / GitHub", "Power BI", "Excel Avançado"]
  },
  {
    title: "Automação & IA",
    icon: "🤖",
    description: "Ganho de escala e otimização de processos operacionais.",
    skills: ["Engenharia de Prompts", "IA Responsável", "Claude / ChatGPT", "Automação de Manuais", "Scripts de Diagnóstico"]
  },
  {
    title: "Domínio Específico (Trânsito)",
    icon: "🚦",
    description: "Expertise técnica em hardware e sistemas metrológicos.",
    skills: ["Radares (F-LIN, DGT, etc)", "Sistemas OCR", "Laço Indutivo / Doppler", "Aferição INMETRO", "Manutenção de Hardware"]
  }
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4">
            Meu <span className="text-blue-600">Arsenal Técnico</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma combinação estratégica de conhecimentos em infraestrutura robusta, desenvolvimento de software e inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">{category.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:border-blue-300 hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificações Extras */}
        <div className="mt-16 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Certificações de Destaque</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-200">
              <span className="text-blue-600">🛡️</span> Introduction to Cybersecurity (Cisco)
            </div>
            <div className="flex items-center gap-2 text-gray-600 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-200">
              <span className="text-blue-600">🤝</span> Customer Success (Sebrae)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}