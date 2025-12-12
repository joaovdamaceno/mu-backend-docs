---
title: Endpoints
---

# Endpoints
Esta lista foi montada a partir dos controllers do backend.
## ExerciseController
Base path: `/api/modules/{moduleId}/exercises`

| Método | Rota | Observação |
|---|---|---|
| GET | `/api/modules/{moduleId}/exercises` | `list` |
| POST | `/api/modules/{moduleId}/exercises` | `create` |

## LessonController
Base path: `/api/modules/{moduleId}/lessons`

| Método | Rota | Observação |
|---|---|---|
| GET | `/api/modules/{moduleId}/lessons` | `list` |
| POST | `/api/modules/{moduleId}/lessons` | `create` |

## ExtraMaterialController
Base path: `/api/modules/{moduleId}/materials`

| Método | Rota | Observação |
|---|---|---|
| GET | `/api/modules/{moduleId}/materials` | `list` |
| POST | `/api/modules/{moduleId}/materials` | `create` |

## ModuleController
Base path: `/api/modules`

| Método | Rota | Observação |
|---|---|---|
| GET | `/api/modules` | `list` |
| GET | `/api/modules/{id}` | `get` |
| POST | `/api/modules` | `create` |
| PUT | `/api/modules/{id}` | `update` |
| DELETE | `/api/modules/{id}` | `delete` |

## PostController
Base path: `/api/posts`

| Método | Rota | Observação |
|---|---|---|
| GET | `/api/posts` | `list` |
| GET | `/api/posts/{id}` | `get` |
| POST | `/api/posts` | `create` |
| DELETE | `/api/posts/{id}` | `delete` |

## RegistrationController
Base path: `/api/registrations`

| Método | Rota | Observação |
|---|---|---|
| POST | `/api/registrations` | `create` |
| GET | `/api/registrations` | `list` |

## Exemplos de payloads (JSON)

> Os campos exatos dependem das suas entidades/DTOs. Abaixo estão exemplos típicos para testar rápido no Postman.

### Criar um módulo

`POST /api/modules`

```json
{
  "title": "Introdução",
  "notes": "Texto opcional (pode ser grande)"
}
```

### Criar uma aula em um módulo

`POST /api/modules/{moduleId}/lessons`

```json
{
  "title": "Aula 01",
  "videoUrl": "https://youtube.com/...",
  "position": 1
}
```

### Criar um exercício em um módulo

`POST /api/modules/{moduleId}/exercises`

```json
{
  "title": "Two Sum",
  "difficulty": 1,
  "link": "https://..."
}
```

### Criar um post

`POST /api/posts`

```json
{
  "title": "Primeiro post",
  "tag": "news",
  "coverImageUrl": "https://...",
  "mainText": "Conteúdo do post"
}
```

### Criar uma inscrição

`POST /api/registrations`

```json
{
  "name": "Fulano",
  "email": "fulano@email.com",
  "whatsapp": "+55 45 99999-9999",
  "institution": "UNIOESTE"
}
```
