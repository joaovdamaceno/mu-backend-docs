---
title: Troubleshooting (erros comuns)
---

## Erro: Unsupported Database: PostgreSQL 18.x

Isso acontece quando a versão do Flyway que você está usando não reconhece (ainda) a versão do Postgres do seu container.

Soluções práticas:

1. **Baixar a versão do Postgres do container** (ex.: `postgres:17`)
2. **Atualizar o Flyway** (dependência `flyway-core`) para uma versão que suporte Postgres 18
3. (Só pra dev) Desligar Flyway temporariamente:

```properties
spring.flyway.enabled=false
```

## Erro: Schema-validation (text vs oid)

Exemplo:

> found [text], but expecting [oid (Types#CLOB)]

Causa comum:
- Entidade JPA com `@Lob` em `String`, mas migration criou `TEXT`.

Como resolver (recomendado):

- Remover `@Lob` do campo `String`
- Trocar por `@Column(columnDefinition = "text")`

Depois:
- Rode novamente com `ddl-auto=validate`

## Quero “zerar” o banco inteiro e recriar

Se você usa Docker Compose com volume:

- apagar containers e volume:

```bash
docker compose down -v
docker compose up -d
```

Isso recria um Postgres limpo (Flyway vai rodar tudo do zero).
