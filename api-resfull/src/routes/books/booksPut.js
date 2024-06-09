import { UpdateBookByIDController } from "../../controller/books/updateByIDController.js";
import { UpdateByIDUseCase } from "../../useCases/books/updateByIDUseCase.js";

export const booksPut = (booksService) => {
  return (request, response) => {
    const useCase = new UpdateByIDUseCase(booksService);
    const controller = new UpdateBookByIDController(useCase);

    return controller.handle(request, response);
  };
};
