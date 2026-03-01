import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'GymUp',
    subtitle: 'Plataforma de Gestão e Execução de Treinos',
    description: 'Aplicação web interativa para o ecossistema fitness. Substitui planilhas por uma experiência gamificada, conectando Personal Trainers e Alunos. Desenvolvi um "Smart Dashboard" e um gerenciador de estado complexo para acompanhamento de treinos e cronômetros em tempo real.',
    techStack: ['React.js', 'Tailwind CSS', 'Firebase', 'Drag and Drop API'],
    highlights: [
      'Gerenciamento assíncrono de cronômetros e persistência de dados.',
      'UX Mobile-First com detecção de dispositivo (Modo Foco vs Modo Lista).',
      'Hidratação e normalização de dados com rotinas de segurança (Safe Mode).'
    ],
    linkGithub: '#', // Insira seu link aqui
    linkLive: '#',   // Insira seu link aqui
  },
  {
    id: 2,
    title: 'Especialista Docs Focalle',
    subtitle: 'Automação e IA em Gestão de Conhecimento',
    description: 'Desenvolvimento e implementação de um Expert em IA voltado para a criação estruturada de manuais técnicos de suporte N2. Ferramenta essencial para a padronização e redução de SLA na empresa.',
    techStack: ['Engenharia de Prompts', 'Python', 'Claude AI', 'Linux'],
    highlights: [
      'Redação autônoma de mais de 16 manuais técnicos padronizados.',
      'Compilação e documentação de 200+ comandos Linux operacionais.',
      'Criação de fluxos de troubleshooting consolidados para 3 bases de conhecimento.'
    ],
    linkGithub: '#',
    linkLive: '', 
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Projetos & Inovação</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 font-medium mb-4">{project.subtitle}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Principais Entregas:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {project.highlights.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 mt-auto">
                {project.linkGithub && (
                  <a href={project.linkGithub} className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors">
                    GitHub →
                  </a>
                )}
                {project.linkLive && (
                  <a href={project.linkLive} className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                    Acessar Projeto →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}