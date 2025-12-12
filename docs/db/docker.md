---
title: Docker Desktop (PostgreSQL)
---

A forma mais simples é subir só o Postgres via Docker Desktop e rodar o backend no IntelliJ.

## 1) Crie um arquivo docker-compose.yml

Crie um arquivo `docker-compose.yml` em qualquer pasta (ex.: `C:\dev\mu-db\docker-compose.yml`):

```yaml
version: "3.9"
services:
  db:
    image: postgres:17
    container_name: mu-postgres
    environment:
      POSTGRES_DB: mu
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - mu_pgdata:/var/lib/postgresql/data

volumes:
  mu_pgdata:
```

> Eu coloquei `postgres:17` porque é a versão que costuma dar menos dor de cabeça com ferramentas.
> Se você usar Postgres 18 e aparecer aviso do Flyway, geralmente ainda roda, mas pode avisar que não foi testado.

## 2) Subir pelo Docker Desktop (GUI)

1. Abra o Docker Desktop
2. Vá em **Containers**
3. Procure opção de **Compose** (ou “Create from compose file”)
4. Selecione o `docker-compose.yml`
5. Clique em **Deploy**

## 3) Subir pelo terminal (mais direto)

Na pasta do `docker-compose.yml`:

```bash
docker compose up -d
```

Para parar e remover (mantendo volume):

```bash
docker compose down
```

Para apagar TUDO (inclui dados do banco):

```bash
docker compose down -v
```

## 4) Variáveis no IntelliJ

No Run/Debug Configuration do seu backend, adicione:

- `DB_URL=jdbc:postgresql://localhost:5432/mu`
- `DB_USERNAME=postgres`
- `DB_PASSWORD=postgres`

Rode o backend. Se o Flyway estiver ativo, você deve ver logs de migrations.
