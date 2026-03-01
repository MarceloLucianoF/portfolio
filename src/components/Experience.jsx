import React from 'react';

const experiences = [
  {
    id: 1,
    company: "Focalle Engenharia Viária",
    location: "Florianópolis, SC",
    roles: [
      {
        title: "Suporte Técnico N2",
        period: "Dezembro 2023 – Presente",
        description: "Garantia de alta disponibilidade e conectividade de sistemas complexos de radar e monitoramento viário. Orquestração de infraestrutura crítica e implementação de IA para otimização de SLA.",
        achievements: [
          "Administração de servidores Linux, containers Docker e redes seguras (OpenVPN, WireGuard, SSH).",
          "Criação do 'Especialista Docs Focalle' (IA/Engenharia de Prompts), padronizando manuais e reduzindo tempo de resposta.",
          "Automação de diagnósticos operacionais com scripts em Python e SQL."
        ],
        techStack: ["Linux", "Docker", "PostgreSQL", "Python", "IA", "Redes"]
      },
      {
        title: "Auxiliar de Processamento",
        period: "Outubro 2023 – Novembro 2023",
        description: "Atuação direta no auxílio aos processamentos de dados e validação de registros de infrações, garantindo a precisão das informações em campo.",
        achievements: [],
        techStack: []
      },
      {
        title: "Assistente Técnico",
        period: "Junho 2023 – Setembro 2023",
        description: "Montagem física, testes iniciais e diagnóstico preliminar de hardware, câmeras e sensores de equipamentos de segurança no trânsito.",
        achievements: [],
        techStack: []
      }
    ]
  },
  {
    id: 2,
    company: "Sulminas Fios e Cabos",
    location: "Poços de Caldas, MG",
    roles: [
      {
        title: "Estagiário de TI",
        period: "Julho 2022 – Dezembro 2022",
        description: "Atuação híbrida entre suporte de infraestrutura e inteligência de negócios.",
        achievements: [
          "Manutenção proativa de servidores e configuração de regras de firewall.",
          "Automação de relatórios gerenciais via consultas SQL avançadas integradas com Excel, otimizando o controle de estoque."
        ],
        techStack: ["SQL", "Excel Avançado", "Windows Server", "Firewall"]
      }
    ]
  },
  {
    id: 3,
    company: "Sistema COC de Ensino",
    location: "Poços de Caldas, MG",
    roles: [
      {
        title: "Estagiário de Suporte",
        period: "Fevereiro 2022 – Junho 2022",
        description: "Suporte técnico N1 a usuários no ambiente escolar, garantindo o bom funcionamento de estações de trabalho.",
        achievements: [
          "Diagnóstico e resolução de falhas de hardware/software.",
          "Manutenções preventivas e periódicas em equipamentos de TI."
        ],
        techStack: ["Hardware", "Help Desk", "Manutenção Preventiva"]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4">
            Trajetória <span className="text-blue-600">Profissional</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma jornada marcada por rápido crescimento, resolução de problemas complexos e entrega contínua de valor.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 border-b border-gray-100 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-gray-500 font-medium text-sm mt-1">📍 {exp.location}</p>
                </div>
              </div>

              {/* Linha do Tempo Interna (Cargos) */}
              <div className="relative border-l-2 border-blue-100 ml-3 space-y-10">
                {exp.roles.map((role, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Ponto da Timeline */}
                    <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h4 className="text-xl font-bold text-gray-800">{role.title}</h4>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 md:mt-0 w-max">
                        {role.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>
                    
                    {role.achievements.length > 0 && (
                      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        {role.achievements.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    )}

                    {role.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {role.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg border border-gray-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}