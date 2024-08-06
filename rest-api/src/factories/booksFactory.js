import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { BooksRepository } from "../repositories/bookRepository.js";
import { BooksService } from "../services/booksService.js";

const CURRENT_DIRECTORY = dirname(fileURLToPath(import.meta.url));
const FILE_PATH = join(CURRENT_DIRECTORY, "./../../database", "books.json");
const booksRepository = new BooksRepository({ filePath: FILE_PATH });

export const booksFactory = () => {
  const booksService = new BooksService({ booksRepository });

  return booksService;
};
