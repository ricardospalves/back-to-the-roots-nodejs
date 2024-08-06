import { GetBookByIDController } from "../../controller/books/getBookByIDController.js";
import { GetBookByIDUseCase } from "../../useCases/books/getBookByIDUseCase.js";

export const booksGetByID = (booksService) => {
  return (request, response) => {
    const useCase = new GetBookByIDUseCase(booksService);
    const controller = new GetBookByIDController(useCase);

    return controller.handle(request, response);
  };
};
