import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";
import { RESPONSE_ERROR_MESSAGES } from "../../constants/responseErrorMessages.js";

export class DeleteByIDController {
  constructor(deleteByIDUseCase) {
    this.deleteByIDUseCase = deleteByIDUseCase;
  }

  async handle(request, response) {
    const { id: bookID } = request.params;
    const deletedBook = await this.deleteByIDUseCase.execute(bookID);

    if (!deletedBook) {
      throw new Error(RESPONSE_ERROR_MESSAGES.bookNotFound.id);
    }

    response.writeHead(200, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        bookID,
        message: "Deleted book.",
      })
    );

    return response.end();
  }
}
