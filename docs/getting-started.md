---
title: Setup rápido (local)
---

## 1) Pré-requisitos

- Java (recomendado: 21+; se você já está usando 25, ok)
- Maven (ou Maven integrado no IntelliJ)
- PostgreSQL (local) **ou** Docker Desktop (recomendado)
- Node.js (só se você for rodar esta documentação)

## 2) Rodar o backend no IntelliJ

1. Abra o projeto do backend no IntelliJ (`mu-backend`).
2. No painel **Maven**, clique em **Reload All Maven Projects** (ícone de refresh).
3. Rode a classe `MuBackendApplication`.

Se o backend depender de variáveis de ambiente (DB_URL, DB_USERNAME, DB_PASSWORD), configure no Run Configurations do IntelliJ:

- `DB_URL=jdbc:postgresql://localhost:5432/mu`
- `DB_USERNAME=muuser`
- `DB_PASSWORD=mupass`
