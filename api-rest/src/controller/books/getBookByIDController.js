import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";

export class GetBookByIDController {
  constructor(getBookByIDUseCase) {
    this.getBookByIDUseCase = getBookByIDUseCase;
  }

  async handle(request, response) {
    const { id: bookID } = request.params;
    const book = await this.getBookByIDUseCase.execute(bookID);

    response.writeHead(200, DEFAULT_HEADER);
    response.write(JSON.stringify(book));

    return response.end();
  }
}
