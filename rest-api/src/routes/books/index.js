import { booksFactory } from "../../factories/booksFactory.js";
import { booksGet } from "./booksGet.js";
import { booksPost } from "./booksPost.js";
import { booksPut } from "./booksPut.js";
import { booksDelete } from "./booksDelete.js";
import { booksGetByID } from "./booksGetByID.js";

const booksService = booksFactory();

export const booksRoute = {
  "/books": {
    GET: booksGet(booksService),
    POST: booksPost(booksService),
  },
  "/books/:id": {
    GET: booksGetByID(booksService),
    PUT: booksPut(booksService),
    DELETE: booksDelete(booksService),
  },
};
