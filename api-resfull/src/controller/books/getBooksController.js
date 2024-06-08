import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";

export class GetBooksController {
  constructor(getBooksUseCase) {
    this.getBooksUseCase = getBooksUseCase;
  }

  async handle(request, response) {
    const books = await this.getBooksUseCase.execute();

    response.writeHead(200, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        results: books,
      })
    );

    return response.end();
  }
}
