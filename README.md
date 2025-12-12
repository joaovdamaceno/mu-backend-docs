# MU Backend Docs (Docusaurus)

Este projeto é a documentação do backend do Website da Maratona Unioeste (Spring Boot + PostgreSQL + Flyway).

## Rodar local (Windows / Linux / macOS)

Pré-requisitos:
- Node.js LTS (recomendado 20+)
- npm (vem junto) ou yarn/pnpm

No terminal, dentro desta pasta:

```bash
npm install
npm run start
```

Abra: http://localhost:3000

## Build estático

```bash
npm run build
npm run serve
```

## Estrutura

- `docs/` → páginas em Markdown (conteúdo principal)
- `docusaurus.config.js` → config do site
- `sidebars.js` → menu lateral
- `static/` → arquivos estáticos (downloads, imagens)

## Deploy

Veja `docs/deploy/github-pages.md`.
