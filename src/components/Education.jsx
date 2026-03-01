import React from 'react';

const education = [
  {
    id: 1,
    institution: "Estácio",
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
    period: "Março 2023 – Julho 2025",
    details: "Coeficiente de Rendimento (CR): 9.10. Destaque em disciplinas como Segurança da Informação, Cloud/IoT, Programação Orientada a Objetos (Python/Java) e Banco de Dados.",
    icon: "🎓"
  },
  {
    id: 2,
    institution: "Instituto Educacional São João da Escócia",
    course: "Técnico em Eletrônica",
    period: "2020 – 2022",
    details: "Formação técnica sólida que fundamenta a minha expertise em hardwares, componentes eletrônicos, diagnóstico de radares de trânsito e manutenções físicas complexas.",
    icon: "⚡"
  }
];

export default function Education() {
  return (
    <section id="formacao" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4">
            Formação <span className="text-blue-600">Acadêmica</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A base teórica e técnica que sustenta minha atuação híbrida entre hardware e software.
          </p>
        </div>
        
        <div className="space-y-8">
          {education.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start hover:border-blue-100 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-3xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{item.course}</h3>
                <p className="text-blue-600 font-semibold mt-1">
                  {item.institution} <span className="text-gray-400 font-normal mx-2">|</span> <span className="text-gray-500 text-sm">{item.period}</span>
                </p>
                <p className="text-gray-600 mt-4 leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}