# 🚀 Portfólio Corporativo | Marcelo Luciano Filho

Bem-vindo ao repositório do meu portfólio profissional e currículo interativo. 

Mais do que uma página estática, este projeto foi desenvolvido com a mentalidade de **Engenharia de Soluções e Automação**. Ele aplica conceitos de *Single Source of Truth* (SSOT) para gerenciar dados e utiliza funções Serverless para geração dinâmica de documentos.

🔗 **Acesso ao site em produção:** [portfolio-marcelo-filho.vercel.app](https://portfolio-marcelo-filho.vercel.app/)

## 🧠 Destaques da Arquitetura

* **Single Source of Truth (`resume.json`):** Todos os dados vitais do currículo estão centralizados em um único arquivo JSON. Alterações feitas nele refletem automaticamente no frontend e nos PDFs gerados.
* **Automação de PDF (Serverless):** Utilizando Node.js e `pdf-lib` na Edge/Serverless da Vercel (`/api/cv.js`), o currículo em PDF é construído em tempo real com base no `resume.json`, garantindo leitura perfeita para sistemas ATS (Applicant Tracking Systems).
* **OpenGraph Dinâmico:** Geração de *social banners* dinâmicos via código (`/api/og.js`) para otimização de SEO e compartilhamento no LinkedIn.
* **Performance & UX:** Construído com React + Vite, estilizado com Tailwind CSS (Mobile-First) e enriquecido com animações nativas usando `IntersectionObserver` para garantir alto desempenho sem inchar o *bundle*.

## 🛠️ Stack Tecnológica

* **Frontend:** React.js, Vite, Tailwind CSS, Lucide Icons.
* **Backend / FaaS:** Vercel Serverless Functions (Node.js).
* **Bibliotecas Foco:** `pdf-lib` (geração de documentos), `@vercel/og` (geração de imagens).
* **Hospedagem & CI/CD:** Vercel.

## 📁 Estrutura do Projeto

\`\`\`text
├── api/                # Backend (Serverless Functions Vercel)
│   ├── cv.js           # Gerador dinâmico de PDF (ATS-friendly)
│   └── og.js           # Gerador dinâmico de OpenGraph Image
├── public/             # Assets e SSOT
│   └── resume.json     # 🎲 Banco de dados do currículo
├── src/
│   ├── components/     # Componentes de UI modularizados (Hero, Contact, etc.)
│   └── App.jsx         # Orquestrador principal da SPA
├── index.html          # Entry point otimizado para SEO
└── vercel.json         # Configurações de rotas e rewrites
\`\`\`

## 🚀 Como executar localmente

Para rodar o frontend:
\`\`\`bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento do Vite
npm run dev
\`\`\`

> **Nota:** O comando \`npm run dev\` sobe apenas o frontend (React). Para testar as rotas da API (como o gerador de PDF em \`/api/cv\`), é recomendado utilizar o CLI da Vercel executando \`vercel dev\`.

---
*Desenvolvido por [Marcelo Luciano Filho](https://linkedin.com/in/marcelo-luciano-filho).*