import { CreateBookController } from "../../controller/books/createBookController.js";
import { booksRepository } from "../../repositories/bookRepository.js";
import { BooksService } from "../../services/booksService.js";
import { CreateBookUseCase } from "../../useCases/books/createBookUseCase.js";

export const booksPost = (request, response) => {
  const service = new BooksService({ booksRepository });
  const useCase = new CreateBookUseCase(service);
  const controller = new CreateBookController(useCase);

  return controller.handle(request, response);
};
