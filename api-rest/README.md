# 🐢🚀 Back to the roots: Node.js

Node.js do zero sem frameworks e sem dependências.

🇺🇸 This doc have been translated into [English](https://github.com/ricardospalves/back-to-the-roots-nodejs/blob/main/api-rest/README_EN.md).

## API Rest

Este é um exemplo básico de como criar uma API em JavaScript puro.

## Sobre a API

A API REST simula um sistema de controle de livros onde se pode listar todos os
livros cadastrados, cadastrar novos livros, atualizá-los e deletá-los.

Neste projeto eu escolhi usar um arquivo JSON para simular um banco de dados,
isso simplifica o teste do projeto.

## Uso

1. Siga as instruções para os [pré-requisitos](https://github.com/ricardospalves/back-to-the-roots-nodejs?tab=readme-ov-file#prerequisites) e [instalação](https://github.com/ricardospalves/back-to-the-roots-nodejs?tab=readme-ov-file#installation).

2. Rode a API:

```bash
node --watch api-rest/src
```

3. A API possui apenas a rota http://localhost:3333/books que deve ser acessada
   através dos seguintes verbos HTTP:

- `POST`: cadastra um novo livro;
- `GET`: lista todos os livros cadastrados;
- `PUT`: atualiza um livro;
- `DELETE`: deleta um livro.

Para testar a API você pode usar ferramentas de requições HTTP como o
[Insomnia](https://insomnia.rest/download) e
[Postman](https://www.postman.com/), ou se preferir pode usar os cURLs abaixo.

---

Cadastrar um novo livro:

```sh
curl --silent -X POST -d '{"name":"Dom Quixote De La mancha","author":"Miguel"}' localhost:3333/books
```

Quando um novo livro é cadastrado, o ID dele é retornado na resposta. Copie este
ID para usar nas requisições de atualizar e deletar.

---

Listar todos os livros cadastrados (se preferir você pode simplemente copiar e
colar a URL no seu navegador):

```sh
curl --silent localhost:3333/books
```

---

Atualizar um livro (substitua o `<BOOK_ID>` pelo ID do livro que você
cadastrou):

```sh
curl --silent -X PUT -d '{"id":"<BOOK_ID>","author":"Miguel de Cervantes"}' localhost:3333/books
```

---

Deletar um livro (substitua o `<BOOK_ID>` pelo ID do livro que você cadastrou):

```sh
curl --silent -X DELETE -d '{"id":"<BOOK_ID>"}' localhost:3333/books
```
