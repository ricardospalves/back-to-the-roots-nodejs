import { booksFactory } from "../../factories/booksFactory.js";
import { booksGet } from "./booksGet.js";
import { booksPost } from "./booksPost.js";
import { booksPut } from "./booksPut.js";
import { booksDelete } from "./booksDelete.js";

const booksService = booksFactory();

export const booksRoute = {
  "/books:get": booksGet(booksService),
  "/books:post": booksPost(booksService),
  "/books:put": booksPut(booksService),
  "/books:delete": booksDelete(booksService),
};
