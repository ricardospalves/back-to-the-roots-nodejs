import { once } from "node:events";
import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";
import { RESPONSE_ERROR_MESSAGES } from "../../constants/responseErrorMessages.js";
import { realTypeof } from "../../utils/realTypeof.js";

export class UpdateBookByIDController {
  constructor(updateByIDUseCase) {
    this.updateByIDUseCase = updateByIDUseCase;
  }

  async handle(request, response) {
    const { id: bookID } = request.params;
    const body = await once(request, "data");
    const book = JSON.parse(body);

    if (realTypeof(book) !== "object") {
      throw new Error(RESPONSE_ERROR_MESSAGES.invalidDataType.id);
    }

    const updatedBook = await this.updateByIDUseCase.execute(bookID, book);

    if (!updatedBook) {
      throw new Error(RESPONSE_ERROR_MESSAGES.bookNotFound.id);
    }

    response.writeHead(200, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        bookID,
        message: "Book updated successfully.",
      })
    );

    return response.end();
  }
}
