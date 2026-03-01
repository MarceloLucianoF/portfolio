import React from 'react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gray-950 mb-10 text-center md:text-left">
          Sobre <span className="text-blue-600">Mim</span>
        </h2>
        
        <div className="text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            Sou <strong className="text-gray-900 font-bold">Engenheiro de Soluções</strong> com formação técnica em Eletrônica e graduando em Análise e Desenvolvimento de Sistemas (CR 9.10). Atualmente, atuo como Suporte Técnico N2 na Focalle Engenharia Viária, onde sou responsável por sustentar ambientes críticos de monitoramento viário e radares metrológicos.
          </p>
          
          <p>
            Minha especialidade está na interseção entre <strong className="text-gray-900 font-bold">infraestrutura Linux, automação com Python e aplicação estratégica de Inteligência Artificial</strong> para operações técnicas. Administro servidores Linux (Debian/CentOS), containers Docker, bancos PostgreSQL e redes seguras (OpenVPN, WireGuard, SSH), garantindo alta disponibilidade e integridade de sistemas utilizados em equipamentos aferidos pelo INMETRO.
          </p>

          {/* Destaque visual para o diferencial */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-xl shadow-sm">
            <p className="text-blue-900 font-medium italic">
              "Meu diferencial vai além da sustentação. Identifiquei gargalos operacionais e criei o 'Especialista Docs Focalle', um sistema estruturado de Engenharia de Conhecimento baseado em IA."
            </p>
          </div>

          <p>
            Essa iniciativa padronizou manuais técnicos, mapeou fluxos de troubleshooting e reduziu significativamente o SLA da equipe. Estruturei mais de 16 manuais técnicos, consolidei 200+ comandos operacionais Linux e documentei mais de 15 cenários críticos recorrentes.
          </p>

          <p>
            Paralelamente, desenvolvo soluções próprias como o <strong className="text-blue-600 font-bold">GymUp</strong>, uma aplicação SaaS em React com Firebase, demonstrando domínio em arquitetura frontend, gerenciamento de estado complexo e persistência em tempo real.
          </p>

          {/* Princípios */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Minha abordagem profissional é orientada por três princípios:</h3>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">🎯</span>
                <span className="font-medium text-gray-700">Resolver o problema imediato.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">📚</span>
                <span className="font-medium text-gray-700">Estruturar o conhecimento para que ele não volte.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">⚡</span>
                <span className="font-medium text-gray-700">Automatizar o que pode ser escalado.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-950 text-white p-8 rounded-2xl text-center shadow-xl">
            <p className="text-xl md:text-2xl font-bold leading-tight">
              Não apenas soluciono incidentes técnicos. Eu transformo operações complexas em sistemas <span className="text-blue-400">organizados, documentados e inteligentes.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}