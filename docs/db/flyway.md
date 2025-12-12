---
title: Flyway (migrations)
---

## Onde ficam as migrations

No padrão do Spring Boot + Flyway:

```
src/main/resources/db/migration/
  V1__init_schema.sql
  V2__alguma_coisa.sql
  ...
```

Quando você sobe a aplicação:

- O Spring inicializa o datasource
- O Flyway conecta no banco
- Ele cria `flyway_schema_history` (se não existir)
- Ele aplica as migrations pendentes em ordem

## Config mínima no application.properties

Exemplo (usando variáveis de ambiente):

```properties
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration
```

## DDL auto do Hibernate (importante)

Se você está usando Flyway, normalmente você NÃO quer o Hibernate alterando o schema.

Recomendação comum:

```properties
spring.jpa.hibernate.ddl-auto=validate
```

- `validate` = só verifica se o schema bate com as entidades.
- Se der erro de tipo (text vs oid), ajuste as entidades (ex.: tirar `@Lob`).

Se você estiver no começo e quer “forçar”, dá pra usar `update`, mas aí o banco pode ficar diferente das migrations.
