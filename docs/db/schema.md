---
title: Schema atual (dbdiagram)
---

Abaixo está o **DBML** pronto para colar no https://dbdiagram.io/ (ele já inclui `Ref:` com `delete: cascade`, que é onde o dbdiagram aceita cascade).

```dbml
Table registrations {
  id bigint [pk, increment]
  name varchar(150) [not null]
  email varchar(150) [not null, unique]
  whatsapp varchar(50)
  institution varchar(150)
  campus varchar(150)
  course varchar(150)
  semester varchar(50)
  how_did_you_hear varchar(255)
  previous_experience text
  message text
  created_at timestamp [not null, default: `now()`]
}

Table modules {
  id bigint [pk, increment]
  title varchar(200) [not null]
  notes text
  created_at timestamp [not null, default: `now()`]
  updated_at timestamp [not null, default: `now()`]
  published boolean [not null, default: true]
}

Table lessons {
  id bigint [pk, increment]
  module_id bigint [not null]
  title varchar(200) [not null]
  video_url text [not null]
  position int [not null]
  slug varchar(200)
  summary text
}

Table exercises {
  id bigint [pk, increment]
  module_id bigint [not null]
  lesson_id bigint [not null]
  title varchar(200) [not null]
  difficulty varchar(255) [not null]
  oj_url varchar(255) [not null]
  oj_name varchar(255) [not null, default: 'Unknown']
}

Table exercise_tags {
  exercise_id bigint [not null]
  tag varchar(100) [not null]
  indexes {
    (exercise_id)
  }
}

Table extra_materials {
  id bigint [pk, increment]
  lesson_id bigint [not null]
  type varchar(200) [not null]
  url text [not null]
}

Table posts {
  id bigint [pk, increment]
  title varchar(200) [not null]
  tag varchar(50)
  cover_image_url text
  main_text text
  slug varchar(200)
  summary text
  author_name varchar(200)
  status varchar(50)
  created_at timestamp [not null, default: `now()`]
  updated_at timestamp [not null, default: `now()`]
}

Table post_sections {
  id bigint [pk, increment]
  post_id bigint [not null]
  image_url text
  text text
  position int [not null]
}

/* Foreign keys (Ref é onde você coloca cascade no dbdiagram) */
Ref: lessons.module_id > modules.id [delete: cascade]
Ref: exercises.module_id > modules.id [delete: cascade]
Ref: exercises.lesson_id > lessons.id [delete: cascade]
Ref: exercise_tags.exercise_id > exercises.id [delete: cascade]
Ref: extra_materials.lesson_id > lessons.id [delete: cascade]
Ref: post_sections.post_id > posts.id [delete: cascade]

```

## Dica importante (PostgreSQL + Hibernate)

Se você usa Flyway para criar colunas `TEXT`, **não use `@Lob` em `String`** nas entidades, porque o Hibernate pode esperar `CLOB/OID` e isso vira erro do tipo:

> Schema-validation: wrong column type ... found text ... expecting oid

Para texto grande em Postgres, normalmente funciona melhor:

- `@Column(columnDefinition = "text")`
- **sem** `@Lob`
