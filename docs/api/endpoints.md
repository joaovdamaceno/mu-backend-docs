---
title: Endpoints
---

# Endpoints
Esta lista foi montada a partir dos controllers do backend. Consulte [Esquemas e payloads](./schemas.md) para exemplos de corpo
de requisição.

## Formato de erros comum
Todos os erros são retornados em JSON. O backend encapsula a mensagem humana, um código de erro estável e eventuais
mensagens de validação por campo.

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
Base path: `/api/modules/{moduleId}/exercises`

### GET `/api/modules/{moduleId}/exercises` (list)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `moduleId` | path | integer | Sim | Identificador do módulo pai. |
| `page` | query | integer | Não | Página (default 1). |
| `pageSize` | query | integer | Não | Tamanho da página (default 10). |
| `difficulty` | query | integer | Não | Filtra pela dificuldade cadastrada. |

- **Corpo**: vazio.
- **Exemplo de requisição**:
```http
GET /api/modules/12/exercises?page=1&pageSize=10
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `200` | Lista paginada de exercícios do módulo. | ```json
{
  "items": [
    {"id": 99, "moduleId": 12, "title": "Two Sum", "difficulty": 1, "link": "https://..."}
  ],
  "page": 1,
  "pageSize": 10,
  "total": 23
}
``` |
| `404` | Módulo não encontrado. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

### POST `/api/modules/{moduleId}/exercises` (create)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `moduleId` | path | integer | Sim | Identificador do módulo pai. |

**Corpo (JSON)**
| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Sim | Nome exibido para o exercício. |
| `difficulty` | integer | Não | Nível de dificuldade (0–2). |
| `link` | string | Não | URL para o enunciado/código. |

- **Exemplo de requisição**:
```json
{
  "title": "Two Sum",
  "difficulty": 1,
  "link": "https://..."
}
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `201` | Exercício criado. | ```json
{"id": 101, "moduleId": 12, "title": "Two Sum", "difficulty": 1, "link": "https://..."}
``` |
| `400/422` | Erro de validação. | Formato de erro comum. |
| `404` | Módulo não encontrado. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

## LessonController
Base path: `/api/modules/{moduleId}/lessons`

### GET `/api/modules/{moduleId}/lessons` (list)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `moduleId` | path | integer | Sim | Identificador do módulo pai. |
| `page` | query | integer | Não | Página (default 1). |
| `pageSize` | query | integer | Não | Tamanho da página (default 10). |

- **Corpo**: vazio.
- **Exemplo de requisição**:
```http
GET /api/modules/12/lessons?page=1&pageSize=10
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `200` | Lista paginada de aulas. | ```json
{
  "items": [
    {"id": 5, "moduleId": 12, "title": "Aula 01", "videoUrl": "https://youtube.com/...", "position": 1}
  ],
  "page": 1,
  "pageSize": 10,
  "total": 8
}
``` |
| `404` | Módulo não encontrado. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

### POST `/api/modules/{moduleId}/lessons` (create)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `moduleId` | path | integer | Sim | Identificador do módulo pai. |

**Corpo (JSON)**
| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Sim | Nome da aula. |
| `videoUrl` | string | Não | URL para o vídeo. |
| `position` | integer | Não | Ordem dentro do módulo. |

- **Exemplo de requisição**:
```json
{
  "title": "Aula 01",
  "videoUrl": "https://youtube.com/...",
  "position": 1
}
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `201` | Aula criada. | ```json
{"id": 6, "moduleId": 12, "title": "Aula 01", "videoUrl": "https://youtube.com/...", "position": 1}
``` |
| `400/422` | Erro de validação. | Formato de erro comum. |
| `404` | Módulo não encontrado. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

## ExtraMaterialController
Base path: `/api/modules/{moduleId}/materials`

### GET `/api/modules/{moduleId}/materials` (list)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `moduleId` | path | integer | Sim | Identificador do módulo pai. |
| `page` | query | integer | Não | Página (default 1). |
| `pageSize` | query | integer | Não | Tamanho da página (default 10). |

- **Corpo**: vazio.
- **Exemplo de requisição**:
```http
GET /api/modules/12/materials?page=1&pageSize=10
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `200` | Materiais extras paginados. | ```json
{
  "items": [
    {"id": 3, "moduleId": 12, "title": "Slides", "url": "https://..."}
  ],
  "page": 1,
  "pageSize": 10,
  "total": 4
}
``` |
| `404` | Módulo não encontrado. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

### POST `/api/modules/{moduleId}/materials` (create)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `moduleId` | path | integer | Sim | Identificador do módulo pai. |

**Corpo (JSON)**
| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Sim | Nome do material. |
| `url` | string | Sim | Link direto para o material. |

- **Exemplo de requisição**:
```json
{
  "title": "Slides",
  "url": "https://..."
}
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `201` | Material criado. | ```json
{"id": 4, "moduleId": 12, "title": "Slides", "url": "https://..."}
``` |
| `400/422` | Erro de validação. | Formato de erro comum. |
| `404` | Módulo não encontrado. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

## ModuleController
Base path: `/api/modules`

### GET `/api/modules` (list)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `page` | query | integer | Não | Página (default 1). |
| `pageSize` | query | integer | Não | Tamanho da página (default 10). |
| `search` | query | string | Não | Filtra por título do módulo. |

- **Corpo**: vazio.
- **Exemplo de requisição**:
```http
GET /api/modules?page=1&pageSize=10&search=introducao
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `200` | Lista paginada de módulos. | ```json
{
  "items": [
    {"id": 12, "title": "Introdução", "notes": "...", "lessonsCount": 8, "exercisesCount": 23}
  ],
  "page": 1,
  "pageSize": 10,
  "total": 14
}
``` |
| `500` | Falha inesperada. | Formato de erro comum. |

### GET `/api/modules/{id}` (get)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `id` | path | integer | Sim | Identificador do módulo. |

- **Corpo**: vazio.
- **Exemplo de requisição**:
```http
GET /api/modules/12
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `200` | Detalhe do módulo. | ```json
{"id": 12, "title": "Introdução", "notes": "Texto opcional", "lessonsCount": 8, "exercisesCount": 23}
``` |
| `404` | Módulo não encontrado. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

### POST `/api/modules` (create)
**Corpo (JSON)**
| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Sim | Nome do módulo. |
| `notes` | string | Não | Anotações ou descrição longa. |

- **Exemplo de requisição**:
```json
{
  "title": "Introdução",
  "notes": "Texto opcional (pode ser grande)"
}
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `201` | Módulo criado. | ```json
{"id": 12, "title": "Introdução", "notes": "Texto opcional"}
``` |
| `400/422` | Erro de validação. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

### PUT `/api/modules/{id}` (update)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `id` | path | integer | Sim | Identificador do módulo. |

**Corpo (JSON)**
| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Não | Nome do módulo. |
| `notes` | string | Não | Anotações ou descrição longa. |

- **Exemplo de requisição**:
```json
{
  "title": "Introdução (atualizado)",
  "notes": "Atualizando apontamentos"
}
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `200` | Módulo atualizado. | ```json
{"id": 12, "title": "Introdução (atualizado)", "notes": "Atualizando apontamentos"}
``` |
| `400/422` | Erro de validação. | Formato de erro comum. |
| `404` | Módulo não encontrado. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

### DELETE `/api/modules/{id}` (delete)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `id` | path | integer | Sim | Identificador do módulo. |

- **Corpo**: vazio.
- **Exemplo de requisição**:
```http
DELETE /api/modules/12
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `204` | Remoção bem sucedida. | Corpo vazio. |
| `404` | Módulo não encontrado. | Formato de erro comum. |
| `409` | Conflito ao excluir (referências). | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

## PostController
Base path: `/api/posts`

### GET `/api/posts` (list)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `page` | query | integer | Não | Página (default 1). |
| `pageSize` | query | integer | Não | Tamanho da página (default 10). |
| `tag` | query | string | Não | Filtra por tag. |

- **Corpo**: vazio.
- **Exemplo de requisição**:
```http
GET /api/posts?page=1&pageSize=10&tag=news
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `200` | Lista paginada de posts. | ```json
{
  "items": [
    {"id": 1, "title": "Primeiro post", "tag": "news", "coverImageUrl": "https://...", "mainText": "Conteúdo do post"}
  ],
  "page": 1,
  "pageSize": 10,
  "total": 3
}
``` |
| `500` | Falha inesperada. | Formato de erro comum. |

### GET `/api/posts/{id}` (get)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `id` | path | integer | Sim | Identificador do post. |

- **Corpo**: vazio.
- **Exemplo de requisição**:
```http
GET /api/posts/1
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `200` | Detalhe do post. | ```json
{"id": 1, "title": "Primeiro post", "tag": "news", "coverImageUrl": "https://...", "mainText": "Conteúdo do post"}
``` |
| `404` | Post não encontrado. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

### POST `/api/posts` (create)
**Corpo (JSON)**
| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `title` | string | Sim | Título do post. |
| `tag` | string | Não | Categoria ou rótulo. |
| `coverImageUrl` | string | Não | Imagem de capa. |
| `mainText` | string | Sim | Conteúdo principal. |

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
| Status | Descrição | Payload |
|---|---|---|
| `201` | Post criado. | ```json
{"id": 2, "title": "Primeiro post", "tag": "news", "coverImageUrl": "https://...", "mainText": "Conteúdo do post"}
``` |
| `400/422` | Erro de validação. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

### DELETE `/api/posts/{id}` (delete)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `id` | path | integer | Sim | Identificador do post. |

- **Corpo**: vazio.
- **Exemplo de requisição**:
```http
DELETE /api/posts/1
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `204` | Remoção bem sucedida. | Corpo vazio. |
| `404` | Post não encontrado. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

## RegistrationController
Base path: `/api/registrations`

### POST `/api/registrations` (create)
**Corpo (JSON)**
| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `name` | string | Sim | Nome completo. |
| `email` | string | Sim | E-mail de contato. |
| `whatsapp` | string | Não | Telefone/WhatsApp. |
| `institution` | string | Não | Universidade ou organização. |

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
| Status | Descrição | Payload |
|---|---|---|
| `201` | Inscrição criada. | ```json
{"id": 7, "name": "Fulano", "email": "fulano@email.com", "whatsapp": "+55 45 99999-9999", "institution": "UNIOESTE"}
``` |
| `400/422` | Erro de validação. | Formato de erro comum. |
| `409` | Inscrição duplicada. | Formato de erro comum. |
| `500` | Falha inesperada. | Formato de erro comum. |

### GET `/api/registrations` (list)
| Parâmetro | Local | Tipo | Obrigatório | Descrição |
|---|---|---|---|---|
| `page` | query | integer | Não | Página (default 1). |
| `pageSize` | query | integer | Não | Tamanho da página (default 10). |
| `institution` | query | string | Não | Filtra por instituição. |

- **Corpo**: vazio.
- **Exemplo de requisição**:
```http
GET /api/registrations?page=1&pageSize=10
```

**Respostas**
| Status | Descrição | Payload |
|---|---|---|
| `200` | Lista paginada de inscrições. | ```json
{
  "items": [
    {"id": 7, "name": "Fulano", "email": "fulano@email.com", "whatsapp": "+55 45 99999-9999", "institution": "UNIOESTE"}
  ],
  "page": 1,
  "pageSize": 10,
  "total": 120
}
``` |
| `500` | Falha inesperada. | Formato de erro comum. |
