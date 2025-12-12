---
title: Como testar se está funcionando
---
Você pode testar de duas formas:
1. **Manual (Postman)**: mais rápido pra validar API e banco
2. **Automático (JUnit/Spring Boot Test)**: bom pra garantir que não quebrou
Para começar rápido, use **API → Postman**.

## Como rodar

### Pré-requisitos
- **Java + Maven/Gradle** instalados (Java 17+ recomendado).
- **Banco de testes** acessível (PostgreSQL local ou container) com as variáveis de ambiente configuradas:
  - `DB_URL=jdbc:postgresql://localhost:5432/mu`
  - `DB_USERNAME=postgres`
  - `DB_PASSWORD=postgres`

### Passo a passo
1. Garanta que o banco de testes está de pé e com migrações aplicadas (pode usar `docker compose up db` se existir). Para criar/limpar dados rapidamente, use os endpoints descritos em [API → Endpoints](../api/endpoints.md).
2. Exportar as variáveis de ambiente antes de rodar os testes:
   ```bash
   export DB_URL=jdbc:postgresql://localhost:5432/mu
   export DB_USERNAME=postgres
   export DB_PASSWORD=postgres
   ```
3. Rodar a suíte completa de testes automáticos:
   - Maven: `mvn test`
   - Gradle: `./gradlew test`
4. Para rodar apenas testes de integração (separados por profile/nomes), use o filtro da sua ferramenta:
   - Maven: `mvn -DskipUnitTests -Pintegration test` (ajuste os perfis conforme o projeto)
   - Gradle: `./gradlew integrationTest` (se a task existir)

Se os testes precisarem de dados iniciais, suba o backend e faça chamadas para os endpoints de carga (por exemplo, `POST /api/posts`) seguindo [API → Postman](../api/postman.md) ou scripts de seed do projeto.
