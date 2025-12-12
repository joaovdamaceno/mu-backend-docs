---
title: Deploy no GitHub Pages
---

Você tem 2 jeitos comuns:

## Opção A) Deploy manual (mais simples)

1. Crie um repositório, por exemplo:
   - `mu-backend-docs`
2. Suba este projeto para o GitHub.
3. No GitHub, vá em **Settings → Pages**
4. Escolha:
   - Source: **Deploy from a branch**
   - Branch: `gh-pages` (ou `main` se você fizer build e commitar, mas não recomendo)
5. Gere o build e publique (manual):

```bash
npm install
npm run build
```

Depois você precisa publicar o conteúdo do `build/` para uma branch (normalmente `gh-pages`).
O mais comum é usar GitHub Actions (Opção B).

## Opção B) GitHub Actions (recomendado)

Este projeto já vem com um workflow pronto em:
- `.github/workflows/deploy.yml`

O que você faz:

1. Crie repo `mu-backend-docs`
2. Faça push
3. Vá em **Settings → Pages**
   - Source: **GitHub Actions**
   - Se o domínio customizado for `mudocs.dev`, ajuste a Pages Source para a branch `gh-pages` e pasta `/ (root)` (o workflow já sobe o `CNAME`).
4. Faça um push novo (qualquer commit) e espere a Action rodar.

Observação: o `baseUrl` e o `url` no `docusaurus.config.js` precisam bater com seu repo.
Se seu repo for `mu-backend-docs`, o baseUrl geralmente fica: `/mu-backend-docs/`.
