import React from "react";

const EMAIL = "marceloluciano30@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/in/marcelo-luciano-filho";

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4">
            Vamos <span className="text-blue-600">Conversar</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Se você busca um profissional alinhado às melhores práticas de Infraestrutura, 
            automação e confiabilidade de ambientes Linux, estou à disposição para avaliar novas oportunidades.
          </p>
        </div>

        {/* Cards (Agora com 2 colunas para manter o design limpo sem o WhatsApp) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            title="Enviar e-mail"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-blue-100 group-hover:scale-110 transition-transform">
              📧
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail</h3>
            <p className="text-sm text-gray-600 mb-6">
              Canal ideal para envio de propostas, descrições de vagas e comunicações formais.
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
              <span className="text-sm font-semibold text-gray-800">
                {EMAIL}
              </span>
              <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            title="Abrir LinkedIn"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-blue-100 group-hover:scale-110 transition-transform">
              🔗
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-600 mb-6">
              Para networking, alinhamentos iniciais e visualização do meu histórico profissional.
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
              <span className="text-sm font-semibold text-gray-800">
                /marcelo-luciano-filho
              </span>
              <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>
        </div>

        {/* CTA final */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Preferência de contato: <span className="font-semibold text-gray-700">LinkedIn</span> ou <span className="font-semibold text-gray-700">E-mail corporativo</span>.
          </p>
        </div>
      </div>
    </section>
  );
}