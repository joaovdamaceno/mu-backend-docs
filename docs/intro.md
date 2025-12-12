---
slug: /
title: Visão geral
---

Esta documentação descreve como rodar, manter e testar o **MU Backend** (Spring Boot + PostgreSQL).

O backend atende o website da **Maratona Unioeste**, com recursos típicos como:

- Inscrições (registrations)
- Módulos e aulas (modules / lessons)
- Exercícios e tags (exercises / exercise_tags)
- Materiais extras (extra_materials)
- Posts e seções de post (posts / post_sections)

O banco é gerenciado por **migrations** (Flyway) e o backend expõe uma API REST para o frontend consumir.

> Se você estiver usando Docker Desktop, comece por: **Banco de Dados → Docker Desktop**.
