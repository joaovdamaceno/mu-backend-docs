---
title: Banco de dados
---

O MU Backend usa **PostgreSQL** e a ideia é manter o schema via **migrations** (Flyway), para o banco ficar previsível em qualquer máquina/ambiente.

Pontos importantes:

- O Flyway aplica arquivos `V1__...sql`, `V2__...sql` etc em ordem.
- O Flyway cria e usa a tabela `flyway_schema_history` para guardar o que já rodou.
- Em geral, **você não edita** migrations antigas depois de aplicadas; você cria uma nova migration.

Próximos passos:

- **Schema atual**: veja o diagrama e o DBML em `Banco de Dados → Schema`.
- **Rodar no Docker Desktop**: veja `Banco de Dados → Docker Desktop`.
- **Erros comuns**: veja `Banco de Dados → Troubleshooting`.
