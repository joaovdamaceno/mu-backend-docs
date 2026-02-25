---
title: Endpoints
---

# Endpoints

Esta lista foi montada a partir dos controllers do backend.

## Formato comum de erros

Todos os erros são retornados em JSON no formato abaixo (conforme `ApiError`):

```json
{
  "timestamp": "2026-01-10T14:45:01.123Z",
  "status": 400,
  "code": "VALIDATION_ERROR",
  "message": "Falha de validação dos dados enviados.",
  "path": "/api/modules",
  "details": [
    {
      "field": "title",
      "message": "Título é obrigatório",
      "rejectedValue": ""
    }
  ]
}
```

Campos:
- `timestamp`: instante UTC da falha.
- `status`: status HTTP.
- `code`: código estável de erro.
- `message`: mensagem humana.
- `path`: endpoint chamado.
- `details`: lista de erros detalhados (validação/parse/constraint). Pode vir vazia.

Códigos de erro possíveis no backend:
- **400**: `VALIDATION_ERROR`, `INVALID_JSON`, `BUSINESS_VALIDATION`, `BAD_REQUEST`.
- **401**: `UNAUTHORIZED`.
- **403**: `FORBIDDEN`.
- **404**: `RESOURCE_NOT_FOUND`.
- **409**: `CONFLICT`.
- **429**: `LOGIN_RATE_LIMIT_EXCEEDED`.
- **500**: `INTERNAL_ERROR`.

## AuthController

Base path: `/api/auth`

### POST `/api/auth/login` (login)

**Corpo (JSON)**

| Campo      | Tipo   | Obrigatório | Descrição                  |
|---|---|---|---|
| `username` | string | Sim         | Usuário para autenticação. |
| `password` | string | Sim         | Senha do usuário.          |

**Respostas**

| Status | Descrição                               | Payload                |
|---|---|---|
| `200`  | Login efetuado com sucesso.             | `{ "token": "<jwt>" }` |
| `400`  | Erro de validação/JSON inválido.        | Formato de erro comum. |
| `401`  | Credenciais inválidas.                  | Formato de erro comum. |
| `429`  | Muitas tentativas de login.             | Formato de erro comum. |
| `500`  | Falha inesperada.                       | Formato de erro comum. |

## ContestController

Base path: `/api/contests`

### GET `/api/contests` (list)

| Parâmetro | Local | Tipo    | Obrigatório | Descrição                         |
|---|---|---|---|---|
| `page`    | query | integer | Não         | Página (default `0`, mínimo `0`). |
| `size`    | query | integer | Não         | Tamanho (default `20`, `1..100`). |

**Respostas**

| Status | Descrição                     | Payload                |
|---|---|---|
| `200`  | Página de contests.           | Page de `ContestResponse`. |
| `400`  | Query params inválidos.       | Formato de erro comum. |
| `500`  | Falha inesperada.             | Formato de erro comum. |

### GET `/api/contests/{id}` (get)

| Parâmetro | Local | Tipo    | Obrigatório | Descrição                 |
|---|---|---|---|---|
| `id`      | path  | integer | Sim         | ID do contest.            |

**Respostas:** `200`, `404`, `500`.

### POST `/api/contests` (create)

**Corpo (JSON)**

| Campo                | Tipo      | Obrigatório | Descrição |
|---|---|---|---|
| `name`               | string    | Sim         | Nome do contest. |
| `durationMinutes`    | integer   | Sim         | Duração (>0). |
| `startDateTime`      | datetime  | Sim         | Data/hora de início. |
| `teamBased`          | boolean   | Não         | Se é por equipes. |
| `codeforcesMirrorUrl`| string    | Não         | URL HTTP/HTTPS opcional. |

**Respostas:** `201`, `400`, `500`.

### PUT `/api/contests/{id}` (update)

Mesma estrutura do create.

**Respostas:** `200`, `400`, `404`, `500`.

### DELETE `/api/contests/{id}` (delete)

**Respostas:** `200`, `404`, `500`.

### GET `/api/contests/{contestId}/teams` (list teams)

**Respostas:** `200`, `404`, `500`.

### POST `/api/contests/{contestId}/teams` (register team)

**Corpo (JSON)**

| Campo             | Tipo    | Obrigatório | Descrição |
|---|---|---|---|
| `teamName`        | string  | Condicional | Obrigatório se `teamBased=true`. |
| `coachName`       | string  | Não         | Nome do coach. |
| `institution`     | string  | Não         | Instituição. |
| `competitor1Name` | string  | Sim         | Competidor 1. |
| `competitor2Name` | string  | Condicional | Obrigatório se `teamBased=true`. |
| `competitor3Name` | string  | Condicional | Obrigatório se `teamBased=true`. |
| `reserveName`     | string  | Não         | Reserva. |
| `cafeComLeite`    | boolean | Não         | Time café com leite. |

**Respostas:** `201`, `400` (`VALIDATION_ERROR`/`BUSINESS_VALIDATION`), `404`, `409`, `500`.

## ModuleController

Base path: `/api/modules`

### GET `/api/modules` (list)

| Parâmetro | Local | Tipo    | Obrigatório | Descrição                         |
|---|---|---|---|---|
| `page`    | query | integer | Não         | Página (default `0`, mínimo `0`). |
| `size`    | query | integer | Não         | Tamanho (default `20`, `1..100`). |

**Respostas:** `200`, `400`, `500`.

### GET `/api/modules/full` (list full)

**Respostas:** `200`, `500`.

### GET `/api/modules/{id}` (get)

**Respostas:** `200`, `404`, `500`.

### POST `/api/modules` (create legacy)

| Campo       | Tipo    | Obrigatório | Descrição |
|---|---|---|---|
| `title`     | string  | Sim         | Nome do módulo. |
| `notes`     | string  | Não         | Anotações. |
| `published` | boolean | Não         | Publicado (default true). |

**Respostas:** `201`, `400`, `500`.

### POST `/api/modules/full` (create full)

Corpo `ModuleAggregateRequest`:
- `title`, `notes`, `published`
- `lessons[]` (title, videoUrl, orderIndex)
- `exercises[]` (title, ojUrl, difficulty, tags[])
- `extraMaterials[]` (title, url)

**Respostas:** `201`, `400`, `500`.

### PUT `/api/modules/full/{id}` (update full)
### PUT `/api/modules/full?id={id}` (update full por query)

Mesmo corpo do create full.

**Respostas:** `200`, `400`, `404`, `500`.

### PUT `/api/modules/{id}` (update)

Mesmo corpo do create legacy.

**Respostas:** `200`, `400`, `404`, `500`.

### DELETE `/api/modules/{id}` (delete)

**Respostas:** `200`, `404`, `409`, `500`.

## LessonController

Base path: `/api/modules/{moduleId}/lessons`

### GET `/api/modules/{moduleId}/lessons` (list)

**Respostas:** `200`, `404`, `500`.

### POST `/api/modules/{moduleId}/lessons` (create)

| Campo        | Tipo    | Obrigatório | Descrição |
|---|---|---|---|
| `title`      | string  | Sim         | Título da lição. |
| `videoUrl`   | string  | Sim         | URL do vídeo (http/https). |
| `orderIndex` | integer | Sim         | Ordem da lição. |

**Respostas:** `201`, `400`, `404`, `500`.

### PUT `/api/modules/{moduleId}/lessons/{lessonId}` (update)

Mesmo corpo do create.

**Respostas:** `200`, `400`, `404`, `500`.

### DELETE `/api/modules/{moduleId}/lessons/{lessonId}` (delete)

**Respostas:** `200`, `400` (`BUSINESS_VALIDATION` quando lição não pertence ao módulo), `404`, `500`.

## ExerciseController

Base path: `/api/modules/{moduleId}/exercises`

### GET `/api/modules/{moduleId}/exercises` (list)

**Respostas:** `200`, `404`, `500`.

### POST `/api/modules/{moduleId}/exercises` (create)

| Campo        | Tipo               | Obrigatório | Descrição |
|---|---|---|---|
| `title`      | string             | Sim         | Título do exercício. |
| `ojUrl`      | string             | Sim         | URL do juiz online (http/https). |
| `difficulty` | `ExerciseDifficulty` | Sim       | Dificuldade (enum). |
| `tags`       | string[]           | Não         | Tags do exercício. |

**Respostas:** `201`, `400`, `404`, `500`.

### PUT `/api/modules/{moduleId}/exercises/{exerciseId}` (update)

Mesmo corpo do create.

**Respostas:** `200`, `400`, `404`, `500`.

### DELETE `/api/modules/{moduleId}/exercises/{exerciseId}` (delete)

**Respostas:** `200`, `400` (`BUSINESS_VALIDATION` quando exercício não pertence ao módulo), `404`, `500`.

## ExtraMaterialController

Base path: `/api/modules/{moduleId}/materials`

### GET `/api/modules/{moduleId}/materials` (list)

**Respostas:** `200`, `404`, `500`.

### POST `/api/modules/{moduleId}/materials` (create)

| Campo   | Tipo   | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Sim         | Título do material. |
| `url`   | string | Sim         | URL do material (http/https). |

**Respostas:** `201`, `400`, `404`, `500`.

### PUT `/api/modules/{moduleId}/materials/{materialId}` (update)

Mesmo corpo do create.

**Respostas:** `200`, `400`, `404`, `500`.

### DELETE `/api/modules/{moduleId}/materials/{materialId}` (delete)

**Respostas:** `200`, `400` (`BUSINESS_VALIDATION` quando material não pertence ao módulo), `404`, `500`.

## PostController

Base path: `/api/posts`

### GET `/api/posts` (list)

| Parâmetro | Local | Tipo    | Obrigatório | Descrição                         |
|---|---|---|---|---|
| `page`    | query | integer | Não         | Página (default `0`, mínimo `0`). |
| `size`    | query | integer | Não         | Tamanho (default `20`, `1..100`). |

**Respostas:** `200`, `400`, `500`.

### GET `/api/posts/{id}` (get)

**Respostas:** `200`, `404`, `500`.

### POST `/api/posts` (create)

| Campo           | Tipo      | Obrigatório | Descrição |
|---|---|---|---|
| `title`         | string    | Sim         | Título do post. |
| `tag`           | string    | Não         | Tag/categoria. |
| `slug`          | string    | Sim         | Slug (`^[a-z0-9]+(?:-[a-z0-9]+)*$`). |
| `summary`       | string    | Não         | Resumo. |
| `coverImageUrl` | string    | Não         | URL da capa. |
| `authorName`    | string    | Sim         | Nome do autor. |
| `status`        | string    | Sim         | Status do post. |
| `mainText`      | string    | Não         | Texto principal. |
| `sections`      | array     | Não         | Seções do post. |

**Respostas:** `201`, `400`, `409`, `500`.

### PUT `/api/posts/{id}` (update)

Mesmo corpo do create.

**Respostas:** `200`, `400`, `404`, `409`, `500`.

### DELETE `/api/posts/{id}` (delete)

**Respostas:** `200`, `404`, `500`.

## RegistrationController

Base path: `/api/registrations`

### GET `/api/registrations` (list)

| Parâmetro | Local | Tipo    | Obrigatório | Descrição                         |
|---|---|---|---|---|
| `page`    | query | integer | Não         | Página (default `0`, mínimo `0`). |
| `size`    | query | integer | Não         | Tamanho (default `20`, `1..100`). |

**Respostas:** `200`, `400`, `500`.

### GET `/api/registrations/{id}` (get)

**Respostas:** `200`, `404`, `500`.

### POST `/api/registrations` (create)

| Campo                | Tipo   | Obrigatório | Descrição |
|---|---|---|---|
| `name`               | string | Sim         | Nome completo. |
| `email`              | string | Sim         | Email. |
| `whatsapp`           | string | Não         | WhatsApp. |
| `institution`        | string | Não         | Instituição. |
| `campus`             | string | Sim         | Campus. |
| `course`             | string | Sim         | Curso. |
| `semester`           | string | Sim         | Semestre. |
| `howDidYouHear`      | string | Sim         | Como conheceu. |
| `previousExperience` | string | Não         | Experiência prévia. |
| `message`            | string | Não         | Mensagem adicional. |

**Respostas:** `201`, `400`, `409`, `500`.

### PUT `/api/registrations/{id}` (update)

Mesmo corpo do create.

**Respostas:** `200`, `400`, `404`, `409`, `500`.

### DELETE `/api/registrations/{id}` (delete)

**Respostas:** `200`, `404`, `500`.
