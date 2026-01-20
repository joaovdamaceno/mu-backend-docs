---
title: Endpoints
---

# Endpoints

Esta lista foi montada a partir dos controllers do backend. Consulte [Esquemas e payloads](./schemas.md) para exemplos de corpo de requisição.

## Formato comum de erros

Todos os erros são retornados em JSON. O backend encapsula a mensagem humana, um código de erro estável e eventuais mensagens de validação por campo.

```json
{
  "error": "ValidationError",
  "message": "Campos obrigatórios não informados",
  "code": "VALIDATION_FAILED",
  "fields": {
    "title": ["não pode ser vazio"],
    "email": ["formato inválido"]
  },
  "traceId": "6f3c1f52a4b6"
}
```

- **400**: erros de validação (`VALIDATION_FAILED`), corpos malformados (`BAD_REQUEST`).
- **401/403**: credenciais ausentes ou sem permissão (`UNAUTHORIZED`, `FORBIDDEN`).
- **404**: recurso não encontrado (`NOT_FOUND`).
- **409**: conflitos de estado (`CONFLICT`).
- **422**: falhas de semântica específicas do domínio (`UNPROCESSABLE_ENTITY`).
- **500**: falha inesperada no backend (`INTERNAL_ERROR`), sempre com `traceId` para correlação.

## ExerciseController

Base path: `/api/modules/{moduleId}/lessons/{lessonId}/exercises`

### GET `/api/modules/{moduleId}/lessons/{lessonId}/exercises` (list)

| Parâmetro    | Local | Tipo    | Obrigatório | Descrição                          |
|---|---|---|---|---|
| `moduleId`   | path  | integer | Sim         | Identificador do módulo pai.       |
| `lessonId`   | path  | integer | Sim         | Identificador da aula.             |
| `page`       | query | integer | Não         | Página (default 1).                |
| `pageSize`   | query | integer | Não         | Tamanho da página (default 10).    |
| `difficulty` | query | integer | Não         | Filtra pela dificuldade cadastrada.|

- **Corpo**: vazio.
- **Exemplo de requisição**:

```http
GET /api/modules/12/lessons/1/exercises?page=1&pageSize=10
```

**Respostas**

| Status | Descrição                           | Payload                 |
|---|---|---|
| `200`  | Lista paginada de exercícios da aula.| Ver exemplo abaixo.     |
| `404`  | Módulo ou aula não encontrados.      | Formato de erro comum.  |
| `500`  | Falha inesperada.                    | Formato de erro comum.  |

**Payload `200`:**

```json
{
  "items": [
    { "id": 99, "moduleId": 12, "lessonId": 1, "title": "Two Sum", "difficulty": 1, "link": "https://..." }
  ],
  "page": 1,
  "pageSize": 10,
  "total": 23
}
```

### POST `/api/modules/{moduleId}/lessons/{lessonId}/exercises` (create)

| Parâmetro  | Local | Tipo    | Obrigatório | Descrição                    |
|---|---|---|---|---|
| `moduleId` | path  | integer | Sim         | Identificador do módulo pai. |
| `lessonId` | path  | integer | Sim         | Identificador da aula.       |

**Corpo (JSON)**

| Campo        | Tipo    | Obrigatório | Descrição                           |
|---|---|---|---|
| `title`      | string  | Sim         | Nome exibido para o exercício.      |
| `difficulty` | integer | Não         | Nível de dificuldade (0–2).         |
| `link`       | string  | Não         | URL para o enunciado/código.        |

- **Exemplo de requisição**:

```json
{
  "title": "Two Sum",
  "difficulty": 1,
  "link": "https://..."
}
```

**Respostas**

| Status   | Descrição                 | Payload                |
|---|---|---|
| `201`    | Exercício criado.         | Ver exemplo abaixo.    |
| `400/422`| Erro de validação.        | Formato de erro comum. |
| `404`    | Módulo ou aula não encontrados.| Formato de erro comum. |
| `500`    | Falha inesperada.         | Formato de erro comum. |

**Payload `201`:**

```json
{ "id": 101, "moduleId": 12, "lessonId": 1, "title": "Two Sum", "difficulty": 1, "link": "https://..." }
```

## LessonController

Base path: `/api/modules/{moduleId}/lessons`

### GET `/api/modules/{moduleId}/lessons` (list)

| Parâmetro  | Local | Tipo    | Obrigatório | Descrição                       |
|---|---|---|---|---|
| `moduleId` | path  | integer | Sim         | Identificador do módulo pai.    |
| `page`     | query | integer | Não         | Página (default 1).             |
| `pageSize` | query | integer | Não         | Tamanho da página (default 10). |

- **Corpo**: vazio.
- **Exemplo de requisição**:

```http
GET /api/modules/12/lessons?page=1&pageSize=10
```

**Respostas**

| Status | Descrição                 | Payload                |
|---|---|---|
| `200`  | Lista paginada de aulas.  | Ver exemplo abaixo.    |
| `404`  | Módulo não encontrado.     | Formato de erro comum. |
| `500`  | Falha inesperada.          | Formato de erro comum. |

**Payload `200`:**

```json
{
  "items": [
    { "id": 5, "moduleId": 12, "title": "Aula 01", "videoUrl": "https://youtube.com/...", "position": 1 }
  ],
  "page": 1,
  "pageSize": 10,
  "total": 8
}
```

### POST `/api/modules/{moduleId}/lessons` (create)

| Parâmetro  | Local | Tipo    | Obrigatório | Descrição                    |
|---|---|---|---|---|
| `moduleId` | path  | integer | Sim         | Identificador do módulo pai. |

**Corpo (JSON)**

| Campo      | Tipo    | Obrigatório | Descrição            |
|---|---|---|---|
| `title`    | string  | Sim         | Nome da aula.        |
| `videoUrl` | string  | Não         | URL para o vídeo.    |
| `position` | integer | Não         | Ordem dentro do módulo.|

- **Exemplo de requisição**:

```json
{
  "title": "Aula 01",
  "videoUrl": "https://youtube.com/...",
  "position": 1
}
```

**Respostas**

| Status    | Descrição             | Payload                |
|---|---|---|
| `201`     | Aula criada.          | Ver exemplo abaixo.    |
| `400/422` | Erro de validação.    | Formato de erro comum. |
| `404`     | Módulo não encontrado.| Formato de erro comum. |
| `500`     | Falha inesperada.     | Formato de erro comum. |

**Payload `201`:**

```json
{ "id": 6, "moduleId": 12, "title": "Aula 01", "videoUrl": "https://youtube.com/...", "position": 1 }
```

## ExtraMaterialController

Base path: `/api/modules/{moduleId}/materials`

### GET `/api/modules/{moduleId}/materials` (list)

| Parâmetro  | Local | Tipo    | Obrigatório | Descrição                       |
|---|---|---|---|---|
| `moduleId` | path  | integer | Sim         | Identificador do módulo pai.    |
| `page`     | query | integer | Não         | Página (default 1).             |
| `pageSize` | query | integer | Não         | Tamanho da página (default 10). |

- **Corpo**: vazio.
- **Exemplo de requisição**:

```http
GET /api/modules/12/materials?page=1&pageSize=10
```

**Respostas**

| Status | Descrição                    | Payload                |
|---|---|---|
| `200`  | Materiais extras paginados.   | Ver exemplo abaixo.    |
| `404`  | Módulo não encontrado.         | Formato de erro comum. |
| `500`  | Falha inesperada.              | Formato de erro comum. |

**Payload `200`:**

```json
{
  "items": [
    { "id": 3, "moduleId": 12, "title": "Slides", "url": "https://..." }
  ],
  "page": 1,
  "pageSize": 10,
  "total": 4
}
```

### POST `/api/modules/{moduleId}/materials` (create)

| Parâmetro  | Local | Tipo    | Obrigatório | Descrição                    |
|---|---|---|---|---|
| `moduleId` | path  | integer | Sim         | Identificador do módulo pai. |

**Corpo (JSON)**

| Campo   | Tipo   | Obrigatório | Descrição                    |
|---|---|---|---|
| `title` | string | Sim         | Nome do material.            |
| `url`   | string | Sim         | Link direto para o material. |

- **Exemplo de requisição**:

```json
{
  "title": "Slides",
  "url": "https://..."
}
```

**Respostas**

| Status    | Descrição               | Payload                |
|---|---|---|
| `201`     | Material criado.        | Ver exemplo abaixo.    |
| `400/422` | Erro de validação.      | Formato de erro comum. |
| `404`     | Módulo não encontrado.  | Formato de erro comum. |
| `500`     | Falha inesperada.       | Formato de erro comum. |

**Payload `201`:**

```json
{ "id": 4, "moduleId": 12, "title": "Slides", "url": "https://..." }
```

## ModuleController

Base path: `/api/modules`

### GET `/api/modules` (list)

| Parâmetro  | Local | Tipo    | Obrigatório | Descrição                           |
|---|---|---|---|---|
| `page`     | query | integer | Não         | Página (default 1).                 |
| `pageSize` | query | integer | Não         | Tamanho da página (default 10).     |
| `search`   | query | string  | Não         | Filtra por título do módulo.        |

- **Corpo**: vazio.
- **Exemplo de requisição**:

```http
GET /api/modules?page=1&pageSize=10&search=introducao
```

**Respostas**

| Status | Descrição                | Payload                |
|---|---|---|
| `200`  | Lista paginada de módulos.| Ver exemplo abaixo.    |
| `500`  | Falha inesperada.         | Formato de erro comum. |

**Payload `200`:**

```json
{
  "items": [
    { "id": 12, "title": "Introdução", "notes": "...", "lessonsCount": 8, "exercisesCount": 23 }
  ],
  "page": 1,
  "pageSize": 10,
  "total": 14
}
```

### GET `/api/modules/{id}` (get)

| Parâmetro | Local | Tipo    | Obrigatório | Descrição                 |
|---|---|---|---|---|
| `id`      | path  | integer | Sim         | Identificador do módulo.  |

- **Corpo**: vazio.
- **Exemplo de requisição**:

```http
GET /api/modules/12
```

**Respostas**

| Status | Descrição               | Payload                |
|---|---|---|
| `200`  | Detalhe do módulo.      | Ver exemplo abaixo.    |
| `404`  | Módulo não encontrado.  | Formato de erro comum. |
| `500`  | Falha inesperada.       | Formato de erro comum. |

**Payload `200`:**

```json
{ "id": 12, "title": "Introdução", "notes": "Texto opcional", "lessonsCount": 8, "exercisesCount": 23 }
```

### POST `/api/modules` (create)

**Corpo (JSON)**

| Campo   | Tipo   | Obrigatório | Descrição                         |
|---|---|---|---|
| `title` | string | Sim         | Nome do módulo.                   |
| `notes` | string | Não         | Anotações ou descrição longa.     |

- **Exemplo de requisição**:

```json
{
  "title": "Introdução",
  "notes": "Texto opcional (pode ser grande)"
}
```

**Respostas**

| Status    | Descrição            | Payload                |
|---|---|---|
| `201`     | Módulo criado.       | Ver exemplo abaixo.    |
| `400/422` | Erro de validação.   | Formato de erro comum. |
| `500`     | Falha inesperada.    | Formato de erro comum. |

**Payload `201`:**

```json
{ "id": 12, "title": "Introdução", "notes": "Texto opcional" }
```

### PUT `/api/modules/{id}` (update)

| Parâmetro | Local | Tipo    | Obrigatório | Descrição                 |
|---|---|---|---|---|
| `id`      | path  | integer | Sim         | Identificador do módulo.  |

**Corpo (JSON)**

| Campo   | Tipo   | Obrigatório | Descrição                         |
|---|---|---|---|
| `title` | string | Não         | Nome do módulo.                   |
| `notes` | string | Não         | Anotações ou descrição longa.     |

- **Exemplo de requisição**:

```json
{
  "title": "Introdução (atualizado)",
  "notes": "Atualizando apontamentos"
}
```

**Respostas**

| Status    | Descrição              | Payload                |
|---|---|---|
| `200`     | Módulo atualizado.     | Ver exemplo abaixo.    |
| `400/422` | Erro de validação.     | Formato de erro comum. |
| `404`     | Módulo não encontrado. | Formato de erro comum. |
| `500`     | Falha inesperada.      | Formato de erro comum. |

**Payload `200`:**

```json
{ "id": 12, "title": "Introdução (atualizado)", "notes": "Atualizando apontamentos" }
```

### DELETE `/api/modules/{id}` (delete)

| Parâmetro | Local | Tipo    | Obrigatório | Descrição                 |
|---|---|---|---|---|
| `id`      | path  | integer | Sim         | Identificador do módulo.  |

- **Corpo**: vazio.
- **Exemplo de requisição**:

```http
DELETE /api/modules/12
```

**Respostas**

| Status | Descrição                           | Payload                |
|---|---|---|
| `204`  | Remoção bem-sucedida.               | Corpo vazio.           |
| `404`  | Módulo não encontrado.              | Formato de erro comum. |
| `409`  | Conflito ao excluir (referências).  | Formato de erro comum. |
| `500`  | Falha inesperada.                   | Formato de erro comum. |

## PostController

Base path: `/api/posts`

### GET `/api/posts` (list)

| Parâmetro  | Local | Tipo    | Obrigatório | Descrição                       |
|---|---|---|---|---|
| `page`     | query | integer | Não         | Página (default 1).             |
| `pageSize` | query | integer | Não         | Tamanho da página (default 10). |
| `tag`      | query | string  | Não         | Filtra por tag.                 |

- **Corpo**: vazio.
- **Exemplo de requisição**:

```http
GET /api/posts?page=1&pageSize=10&tag=news
```

**Respostas**

| Status | Descrição               | Payload                |
|---|---|---|
| `200`  | Lista paginada de posts.| Ver exemplo abaixo.    |
| `500`  | Falha inesperada.       | Formato de erro comum. |

**Payload `200`:**

```json
{
  "items": [
    { "id": 1, "title": "Primeiro post", "tag": "news", "coverImageUrl": "https://...", "mainText": "Conteúdo do post" }
  ],
  "page": 1,
  "pageSize": 10,
  "total": 3
}
```

### GET `/api/posts/{id}` (get)

| Parâmetro | Local | Tipo    | Obrigatório | Descrição              |
|---|---|---|---|---|
| `id`      | path  | integer | Sim         | Identificador do post. |

- **Corpo**: vazio.
- **Exemplo de requisição**:

```http
GET /api/posts/1
```

**Respostas**

| Status | Descrição             | Payload                |
|---|---|---|
| `200`  | Detalhe do post.      | Ver exemplo abaixo.    |
| `404`  | Post não encontrado.  | Formato de erro comum. |
| `500`  | Falha inesperada.     | Formato de erro comum. |

**Payload `200`:**

```json
{ "id": 1, "title": "Primeiro post", "tag": "news", "coverImageUrl": "https://...", "mainText": "Conteúdo do post" }
```

### POST `/api/posts` (create)

**Corpo (JSON)**

| Campo           | Tipo   | Obrigatório | Descrição            |
|---|---|---|---|
| `title`         | string | Sim         | Título do post.      |
| `tag`           | string | Não         | Categoria ou rótulo. |
| `coverImageUrl` | string | Não         | Imagem de capa.      |
| `mainText`      | string | Sim         | Conteúdo principal.  |

- **Exemplo de requisição**:

```json
{
  "title": "Primeiro post",
  "tag": "news",
  "coverImageUrl": "https://...",
  "mainText": "Conteúdo do post"
}
```

**Respostas**

| Status    | Descrição           | Payload                |
|---|---|---|
| `201`     | Post criado.        | Ver exemplo abaixo.    |
| `400/422` | Erro de validação.  | Formato de erro comum. |
| `500`     | Falha inesperada.   | Formato de erro comum. |

**Payload `201`:**

```json
{ "id": 2, "title": "Primeiro post", "tag": "news", "coverImageUrl": "https://...", "mainText": "Conteúdo do post" }
```

### DELETE `/api/posts/{id}` (delete)

| Parâmetro | Local | Tipo    | Obrigatório | Descrição              |
|---|---|---|---|---|
| `id`      | path  | integer | Sim         | Identificador do post. |

- **Corpo**: vazio.
- **Exemplo de requisição**:

```http
DELETE /api/posts/1
```

**Respostas**

| Status | Descrição              | Payload                |
|---|---|---|
| `204`  | Remoção bem-sucedida.  | Corpo vazio.           |
| `404`  | Post não encontrado.   | Formato de erro comum. |
| `500`  | Falha inesperada.      | Formato de erro comum. |

## RegistrationController

Base path: `/api/registrations`

### POST `/api/registrations` (create)

**Corpo (JSON)**

| Campo         | Tipo   | Obrigatório | Descrição                  |
|---|---|---|---|
| `name`        | string | Sim         | Nome completo.             |
| `email`       | string | Sim         | E-mail de contato.         |
| `whatsapp`    | string | Não         | Telefone/WhatsApp.         |
| `institution` | string | Não         | Universidade ou organização.|

- **Exemplo de requisição**:

```json
{
  "name": "Fulano",
  "email": "fulano@email.com",
  "whatsapp": "+55 45 99999-9999",
  "institution": "UNIOESTE"
}
```

**Respostas**

| Status    | Descrição             | Payload                |
|---|---|---|
| `201`     | Inscrição criada.     | Ver exemplo abaixo.    |
| `400/422` | Erro de validação.    | Formato de erro comum. |
| `409`     | Inscrição duplicada.  | Formato de erro comum. |
| `500`     | Falha inesperada.     | Formato de erro comum. |

**Payload `201`:**

```json
{ "id": 7, "name": "Fulano", "email": "fulano@email.com", "whatsapp": "+55 45 99999-9999", "institution": "UNIOESTE" }
```

### GET `/api/registrations` (list)

| Parâmetro     | Local | Tipo    | Obrigatório | Descrição                       |
|---|---|---|---|---|
| `page`        | query | integer | Não         | Página (default 1).             |
| `pageSize`    | query | integer | Não         | Tamanho da página (default 10). |
| `institution` | query | string  | Não         | Filtra por instituição.         |

- **Corpo**: vazio.
- **Exemplo de requisição**:

```http
GET /api/registrations?page=1&pageSize=10
```

**Respostas**

| Status | Descrição                    | Payload                |
|---|---|---|
| `200`  | Lista paginada de inscrições.| Ver exemplo abaixo.    |
| `500`  | Falha inesperada.            | Formato de erro comum. |

**Payload `200`:**

```json
{
  "items": [
    { "id": 7, "name": "Fulano", "email": "fulano@email.com", "whatsapp": "+55 45 99999-9999", "institution": "UNIOESTE" }
  ],
  "page": 1,
  "pageSize": 10,
  "total": 120
}
```
