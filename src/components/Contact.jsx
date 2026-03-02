import React from "react";

const EMAIL = "marceloluciano30@gmail.com";
const WHATSAPP_NUMBER_E164 = "5535998744678"; // +55 35 99874-4678 (sem + e sem espaços)
const LINKEDIN_URL = "https://linkedin.com/in/marcelo-luciano-filho";

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold tracking-tighter text-gray-950 mb-4">
            Vamos <span className="text-blue-600">Conversar</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Se você está buscando alguém para Infraestrutura/DevOps, automação e
            confiabilidade de ambientes Linux críticos, eu consigo ajudar desde
            o primeiro dia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            title="Enviar e-mail"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-blue-100 group-hover:scale-110 transition-transform">
              📧
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail</h3>
            <p className="text-sm text-gray-600 mb-6">
              Ideal para envio de proposta, vaga e detalhes da oportunidade.
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-800">
                {EMAIL}
              </span>
              <span className="text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
              "Olá Marcelo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade em Infra/DevOps."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            title="Chamar no WhatsApp"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-blue-100 group-hover:scale-110 transition-transform">
              💬
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-600 mb-6">
              Para conversas rápidas e alinhamento inicial (recrutador/tech lead).
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-800">
                +55 (35) 99874-4678
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
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            title="Abrir LinkedIn"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-blue-100 group-hover:scale-110 transition-transform">
              🔗
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-600 mb-6">
              Conexão direta + mensagens e histórico profissional completo.
            </p>

            <div className="flex items-center justify-between">
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
            Preferência de contato:{" "}
            <span className="font-semibold text-gray-700">WhatsApp</span> para
            alinhamento rápido e{" "}
            <span className="font-semibold text-gray-700">E-mail</span> para
            proposta/vaga.
          </p>
        </div>
      </div>
    </section>
  );
}