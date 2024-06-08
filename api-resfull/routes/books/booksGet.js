import { GetBooksController } from "../../controller/books/getBooksController.js";
import { booksRepository } from "../../repositories/bookRepository.js";
import { BooksService } from "../../services/booksService.js";
import { GetBooksUseCase } from "../../useCases/books/getBooksUseCase.js";

export const booksGet = (request, response) => {
  const service = new BooksService({ booksRepository });
  const useCase = new GetBooksUseCase(service);
  const controller = new GetBooksController(useCase);

  return controller.handle(request, response);
};
