import { booksGet } from "./booksGet.js";
import { booksPost } from "./booksPost.js";

export const booksRoute = {
  "/books:get": booksGet,
  "/books:post": booksPost,
};
