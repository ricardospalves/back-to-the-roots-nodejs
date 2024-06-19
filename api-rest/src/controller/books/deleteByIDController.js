import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";

export class DeleteByIDController {
  constructor(deleteByIDUseCase) {
    this.deleteByIDUseCase = deleteByIDUseCase;
  }

  async handle(request, response) {
    const { id: bookID } = request.params;

    await this.deleteByIDUseCase.execute(bookID);

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
