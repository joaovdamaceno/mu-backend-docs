---
title: API (visão geral)
---

A API é REST e normalmente roda em:
- `http://localhost:8080`

O padrão do projeto é:
- Endpoints base em `/api/...`
- JSON como request/response
- IDs numéricos (`Long` / `BIGSERIAL`)

## URLs base por ambiente
- **Local:** `http://localhost:8080/api`
- **Staging:** `https://staging.mu.example.com/api`
- **Produção:** `https://api.mu.example.com/api`

## Autenticação
- `Authorization: Bearer <token>` (JWT ou token de acesso curto)
- Use `X-Request-Id` (opcional) para rastreabilidade ponta a ponta.

## Versionamento e rate limit
- Versão estável exposta via prefixo de rota: `/api` (sem versão numérica; mudanças breaking geram novo prefixo no futuro).
- Rate limit padrão: **120 requisições/minuto** por token e IP combinados.

## Content negotiation
- `Content-Type: application/json` para POST/PUT/PATCH.
- `Accept: application/json` para respostas estruturadas.
- Campos de data/hora são ISO 8601 em UTC (timezone padrão).
- Locales de textos e erros seguem `pt-BR` por padrão.

## Postman
- Coleção: [downloads/postman_collection.json](/downloads/postman_collection.json)
- Ambiente: [downloads/postman_environment.json](/downloads/postman_environment.json)

## Leituras relacionadas
- **Endpoints:** [API → Endpoints](endpoints)
- **Payloads:** [API → Esquemas e payloads](schemas)
- **Postman/guia rápido:** [API → Postman](postman)
- **Changelog e releases:** consulte [Notas de versão](../dev-notes) para mudanças publicadas aos consumidores da API.
