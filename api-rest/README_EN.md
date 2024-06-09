# 🐢🚀 Back to the roots: Node.js

Node.js from scratch with no frameworks and no dependencies.

🇧🇷 Esta documentação tem tradução para [Português do Brasil](https://github.com/ricardospalves/back-to-the-roots-nodejs/blob/main/api-rest/README.md).

## Rest API

This is a basic example of how to create an API in pure JavaScript.

## About API

The REST API simulates a book management system where you can list all registered books, add new books, update them, and delete them.

In this project, I chose to use a JSON file to simulate a database, which simplifies project testing.

## Usage

1. Follow the instructions for the [prerequisites](https://github.com/ricardospalves/back-to-the-roots-nodejs?tab=readme-ov-file#prerequisites) and [installation](https://github.com/ricardospalves/back-to-the-roots-nodejs?tab=readme-ov-file#installation).

2. Run the API:

```bash
node --watch api-rest/src
```

3. The API has only one route http://localhost:3333/books that should be accessed through the following HTTP verbs:

- `POST`: registers a new book;
- `GET`: lists all registered books;
- `PUT`: updates a book;
- `DELETE`: deletes a book.

To test the API, you can use HTTP request tools such as [Insomnia](https://insomnia.rest/download) and [Postman](https://www.postman.com/), or if you prefer, you can use the cURLs below.

---

Register a new book:

```sh
curl --silent -X POST -d '{"name":"Dom Quixote De La mancha","author":"Miguel"}' localhost:3333/books
```

When a new book is registered, its ID is returned in the response. Copy this ID to use in update and delete requests.

---

List all registered books (you can simply copy and paste the URL in your browser):

```sh
curl --silent localhost:3333/books
```

---

Update a book (replace `<BOOK_ID>` with the ID of the book you registered):

```sh
curl --silent -X PUT -d '{"id":"<BOOK_ID>","author":"Miguel de Cervantes"}' localhost:3333/books
```

---

Delete a book (replace `<BOOK_ID>` with the ID of the book you registered):

```sh
curl --silent -X DELETE -d '{"id":"<BOOK_ID>"}' localhost:3333/books
```
