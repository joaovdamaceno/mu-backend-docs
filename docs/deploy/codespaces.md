---
title: Rodar no GitHub Codespaces
---

Você consegue rodar o Docusaurus no browser usando **GitHub Codespaces**.

## 1) Crie o repositório

1. Crie um repo novo (ex.: `mu-backend-docs`)
2. Faça push deste projeto

## 2) Abrir no Codespaces

No GitHub do repo:
- Clique em **Code → Codespaces → Create codespace on main**

## 3) Rodar

No terminal do Codespaces:

```bash
npm install
npm run start
```

O Codespaces vai sugerir “Forward port 3000”. Aceite e abra no browser.

## Dica

Este projeto já vem com `.devcontainer/devcontainer.json` para facilitar.
