---
title: Postman (coleção pronta)
---

Eu deixei dois arquivos em `static/downloads/`:

- `postman_collection.json`
- `postman_environment.json`

## Importar no Postman

1. Abra o Postman
2. **Import** → selecione `postman_collection.json`
3. **Import** → selecione `postman_environment.json`
4. Selecione o Environment **Local**
5. Rode as requests

## Observações

- Ajuste `baseUrl` se seu backend estiver em outra porta/host.
- Se algum endpoint tiver mudado no seu backend, edite a rota dentro do Postman.
