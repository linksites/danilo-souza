# Danilo Souza Site

Site institucional do psicólogo clínico Danilo Souza, desenvolvido com React, Vite e Tailwind CSS.

## Tecnologias

- React 18
- Vite 8
- Tailwind CSS 3

## Requisitos

- Node.js 20+
- npm 10+

## Como rodar localmente

```bash
npm install
npm run dev
```

Servidor local padrão: `http://localhost:5173`.

Para rodar com host fixo em `127.0.0.1`:

```bash
npm run dev:local
```

## Build de produção

```bash
npm run build
npm run preview
```

Arquivos gerados em: `dist/`.

## Estrutura principal

```text
src/
  components/
    SiteLayout.jsx
  pages/
    HomePage.jsx
  App.jsx
  main.jsx
```

## Seções

A aplicação é uma página única (one-page) com navegação por âncoras dentro de `HomePage.jsx`:

- `#inicio` - Início
- `#perfil` - Perfil Profissional
- `#especialidades` - Especialidades
- `#abordagem` - Abordagem
- `#artigos` - Artigos
- `#faq` - FAQ
- `#enderecos` - Endereços
- `#contato` - Contato

## Deploy

O deploy é automático no GitHub Pages via workflow em `.github/workflows/deploy.yml`.

Gatilhos:

- Push na branch `master`
- Execução manual (`workflow_dispatch`)

Fluxo:

1. Instala dependências (`npm ci`)
2. Gera build (`npm run build`)
3. Publica o conteúdo de `dist/` no GitHub Pages

## Scripts disponíveis

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run dev:local`: inicia Vite em `127.0.0.1:5173`
- `npm run build`: gera build de produção
- `npm run build:watch`: gera build em modo watch
- `npm run preview`: preview local do build
