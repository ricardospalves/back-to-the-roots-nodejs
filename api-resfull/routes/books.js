import { GetBooksController } from "../controller/books/getBooksController.js";
import { BooksRepository } from "../repositories/bookRepository.js";
import { BooksService } from "../services/booksService.js";
import { GetBooksUseCase } from "../useCases/books/getBooksUseCase.js";

const repository = new BooksRepository();
const service = new BooksService({ booksRepository: repository });
const useCase = new GetBooksUseCase(service);
const controller = new GetBooksController(useCase);

export const booksRoute = {
  "/books:get": (response, request) => {
    return controller.handle(response, request);
  },
};
