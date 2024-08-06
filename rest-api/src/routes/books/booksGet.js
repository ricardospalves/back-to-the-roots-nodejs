import { GetBooksController } from "../../controller/books/getBooksController.js";
import { GetBooksUseCase } from "../../useCases/books/getBooksUseCase.js";

export const booksGet = (booksService) => {
  return (request, response) => {
    const useCase = new GetBooksUseCase(booksService);
    const controller = new GetBooksController(useCase);

    return controller.handle(request, response);
  };
};
