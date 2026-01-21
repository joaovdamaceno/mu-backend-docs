---
title: Postman (Environment e Collection)
---

# Postman: importar Environment e Collection

Este guia explica como importar o **Environment** e a **Collection** do MU Backend no Postman e iniciar os testes rapidamente.

## 1. Baixar os arquivos

Faça o download dos arquivos abaixo:

- [Environment do MU Backend (Local)](/postman/mu-backend-local.postman_environment.json)
- [Collection do MU Backend](/postman/mu-backend-api.postman_collection.json)

## 2. Importar o Environment

1. No Postman, clique em **Import**.
2. Selecione o arquivo `mu-backend-local.postman_environment.json`.
3. Após importar, escolha o environment **Local** no seletor de ambientes (canto superior direito).

## 3. Importar a Collection

1. Ainda no Postman, clique em **Import** novamente.
2. Selecione o arquivo `mu-backend-api.postman_collection.json`.
3. A collection aparecerá na lista de Collections.

## 4. Autenticação (opcional)

Alguns endpoints podem aceitar um token de autenticação. Se necessário, configure a variável `{{token}}` no Environment, mas lembre-se de que ela é **opcional** para autenticação quando o endpoint não exige credenciais.

## 5. Testar as requisições

Com o environment selecionado, basta abrir a collection e executar as requisições desejadas.
