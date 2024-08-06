import { CreateBookController } from "../../controller/books/createBookController.js";
import { CreateBookUseCase } from "../../useCases/books/createBookUseCase.js";

export const booksPost = (booksService) => {
  return (request, response) => {
    const useCase = new CreateBookUseCase(booksService);
    const controller = new CreateBookController(useCase);

    return controller.handle(request, response);
  };
};
