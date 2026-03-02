# ⚛️ Portfólio Interativo | Marcelo Luciano Filho

Este repositório contém o código do meu portfólio profissional desenvolvido em **React**.

O objetivo do projeto é demonstrar organização de código, componentização, gerenciamento de dados e integração com funções serverless — aplicando boas práticas de frontend moderno.

🔗 **Acesso ao site em produção:**  
https://portfolio-marcelo-filho.vercel.app/

---

## 🧠 Conceitos Aplicados

### 🔹 Single Source of Truth (SSOT)
Todos os dados do currículo estão centralizados em `resume.json`.  
Esse arquivo alimenta:

- Componentes React
- Geração dinâmica de PDF
- Meta dados de SEO

Isso garante consistência entre interface e documentos exportados.

---

### 🔹 Geração Dinâmica de PDF
O endpoint `/api/cv.js` utiliza:

- Node.js
- `pdf-lib`
- Vercel Serverless Functions

O PDF é gerado em tempo real com base no `resume.json`, garantindo:

- Texto selecionável (ATS-friendly)
- Atualização automática
- Mesma fonte de dados da interface

---

### 🔹 OpenGraph Dinâmico
O endpoint `/api/og.js` utiliza `@vercel/og` para gerar imagens dinâmicas para compartilhamento em redes sociais (como LinkedIn).

---

### 🔹 Performance & UX (Mobile-First)

- React + Vite
- Tailwind CSS
- Componentização modular
- Uso de hooks
- `IntersectionObserver` para animações de scroll sem bibliotecas pesadas
- Bundle enxuto e foco em performance

---

## 🛠️ Stack Tecnológica

**Frontend**
- React
- Vite
- Tailwind CSS
- Lucide Icons

**Backend / Serverless**
- Node.js
- Vercel Functions

**Bibliotecas**
- `pdf-lib`
- `@vercel/og`

**Infraestrutura**
- Git
- GitHub
- Deploy contínuo via Vercel

---

## 📁 Estrutura do Projeto

```text
├── api/                # Serverless Functions (Vercel)
│   ├── cv.js           # Geração dinâmica de PDF
│   └── og.js           # Geração dinâmica de OpenGraph
├── public/
│   └── resume.json     # Fonte única de dados (SSOT)
├── src/
│   ├── components/     # Componentes React modularizados
│   └── App.jsx         # Composição principal da aplicação
├── index.html
└── vercel.json