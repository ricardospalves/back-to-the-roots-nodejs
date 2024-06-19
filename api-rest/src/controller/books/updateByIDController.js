import { once } from "node:events";
import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";

export class UpdateBookByIDController {
  constructor(updateByIDUseCase) {
    this.updateByIDUseCase = updateByIDUseCase;
  }

  async handle(request, response) {
    const { id: bookID } = request.params;
    const data = await once(request, "data");
    const book = JSON.parse(data);

    await this.updateByIDUseCase.execute(bookID, book);

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
