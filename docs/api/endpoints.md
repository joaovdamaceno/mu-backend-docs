---
title: Endpoints
---

# Endpoints
Esta lista foi montada a partir dos controllers do backend. Consulte [Esquemas e payloads](./schemas.md) para exemplos de corpo de requisição.

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
