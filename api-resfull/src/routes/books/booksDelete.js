import { DeleteByIDController } from "../../controller/books/deleteByIDController.js";
import { DeleteByIDUseCase } from "../../useCases/books/deleteByIDUseCase.js";

export const booksDelete = (booksService) => {
  return (request, response) => {
    const useCase = new DeleteByIDUseCase(booksService);
    const controller = new DeleteByIDController(useCase);

    return controller.handle(request, response);
  };
};
