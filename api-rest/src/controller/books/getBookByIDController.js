import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";
import { RESPONSE_ERRORS } from "../../constants/responseErrors.js";

export class GetBookByIDController {
  constructor(getBookByIDUseCase) {
    this.getBookByIDUseCase = getBookByIDUseCase;
  }

  async handle(request, response) {
    const { id: bookID } = request.params;
    const book = await this.getBookByIDUseCase.execute(bookID);

    if (!book) {
      throw new Error(RESPONSE_ERRORS.bookNotFound.id);
    }

    response.writeHead(200, DEFAULT_HEADER);
    response.write(JSON.stringify(book));

    return response.end();
  }
}
