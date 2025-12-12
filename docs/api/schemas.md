---
title: Esquemas e payloads
---

Os endpoints usam JSON para request/response. Use estes exemplos como referência rápida ao montar chamadas; os campos exatos podem variar conforme as entidades/DTOs definidos no backend.

## Exemplos de criação

### Módulo
`POST /api/modules`
```json
{
  "title": "Introdução",
  "notes": "Texto opcional (pode ser grande)"
}
```

### Aula
`POST /api/modules/{moduleId}/lessons`
```json
{
  "title": "Aula 01",
  "videoUrl": "https://youtube.com/...",
  "position": 1
}
```

### Exercício
`POST /api/modules/{moduleId}/exercises`
```json
{
  "title": "Two Sum",
  "difficulty": 1,
  "link": "https://..."
}
```

### Post
`POST /api/posts`
```json
{
  "title": "Primeiro post",
  "tag": "news",
  "coverImageUrl": "https://...",
  "mainText": "Conteúdo do post"
}
```

### Inscrição
`POST /api/registrations`
```json
{
  "name": "Fulano",
  "email": "fulano@email.com",
  "whatsapp": "+55 45 99999-9999",
  "institution": "UNIOESTE"
}
```

> Consulte [API → Endpoints](./endpoints.md) para a lista completa de rotas e verbos HTTP.
