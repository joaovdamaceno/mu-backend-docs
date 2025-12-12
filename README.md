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

### Configurar GitHub Pages (mudocs.dev)

Na página do repositório, acesse **Settings → Pages** e selecione:

- **Source:** `gh-pages`
- **Folder:** `/ (root)`

Esse ajuste garante que o GitHub Pages sirva o conteúdo publicado pelo workflow (que já inclui o arquivo `CNAME` para `mudocs.dev`). Salve a configuração e aguarde o próximo deploy (ou faça um push) para que https://mudocs.dev/ use o site gerado, não os arquivos do repositório.
