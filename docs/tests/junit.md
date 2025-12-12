---
title: Testes automáticos (JUnit)
---

## Onde ficam

No padrão Maven:

- `src/test/java/...`

## Exemplo de testes úteis (ideia)

- `POST /api/posts` cria e retorna 201/200
- `GET /api/posts` lista e retorna array
- `GET /api/posts/{id}` retorna 200 quando existe e 404 quando não existe
- `POST /api/registrations`:
  - retorna 200/201
  - falha em email duplicado (unique constraint) com 409/400 dependendo do handler

## Dica prática

Se você está com pressa, foque em:
- 1 teste de “subiu e responde”
- 1 teste de “salva no banco”
- 1 teste de “lista”

E deixe os testes mais completos pra depois.
