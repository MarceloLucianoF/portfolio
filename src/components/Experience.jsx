import React from 'react';
import { MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Focalle Engenharia Viária",
    location: "Florianópolis, SC",
    roles: [
      {
        title: "Suporte Técnico N2 & Automação",
        period: "Dezembro 2023 – Presente",
        description: "Vivência diária com incidentes em produção e automação, trazendo visão prática de deploy, logs e estabilidade para minha atuação como desenvolvedor.",
        achievements: [
          "Análise de logs e resolução de incidentes em ambientes produtivos contínuos.",
          "Automação de rotinas e scripts de diagnóstico em Python.",
          "Apoio à padronização técnica e fluxos operacionais da equipe."
        ],
        techStack: ["Linux", "Python", "Deploy", "Troubleshooting"]
      },
      {
        title: "Auxiliar de Processamento",
        period: "Outubro 2023 – Novembro 2023",
        description: "Apoio no processamento de dados e validação de registros, garantindo a precisão das informações e o compliance operacional.",
        achievements: [],
        techStack: []
      },
      {
        title: "Assistente Técnico",
        period: "Junho 2023 – Setembro 2023",
        description: "Montagem física, testes iniciais e diagnóstico preliminar de hardware e sensores de equipamentos.",
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
        description: "Atuação híbrida entre suporte de infraestrutura e inteligência de dados.",
        achievements: [
          "Manutenção proativa de servidores e configuração de regras de firewall.",
          "Automação de relatórios via SQL integrado ao Excel, apoiando o controle operacional."
        ],
        techStack: ["SQL", "Windows Server", "Firewall"]
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
        description: "Suporte N1 a usuários (docentes, coordenação e administrativo) em ambiente educacional.",
        achievements: [
          "Diagnóstico de hardware/software e resolução de incidentes em estações Windows.",
          "Apoio na configuração de infraestrutura de rede local e recursos multimídia."
        ],
        techStack: ["Suporte N1", "Hardware", "Redes"]
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
            Uma jornada marcada por evolução técnica, resolução de problemas estruturais e entrega contínua de confiabilidade.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 border-b border-gray-100 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-gray-500 font-medium text-sm mt-1 flex items-center gap-1.5">
                    <MapPin size={16} className="text-blue-500" /> {exp.location}
                  </p>
                </div>
              </div>

              <div className="relative border-l-2 border-blue-100 ml-3 space-y-10">
                {exp.roles.map((role, index) => (
                  <div key={index} className="relative pl-8">
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