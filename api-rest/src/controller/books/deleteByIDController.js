import { once } from "node:events";
import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";

export class DeleteByIDController {
  constructor(deleteByIDUseCase) {
    this.deleteByIDUseCase = deleteByIDUseCase;
  }

  async handle(request, response) {
    const data = await once(request, "data");
    const json = JSON.parse(data);
    const { id } = json;
    const bookID = await this.deleteByIDUseCase.execute(id);

    response.writeHead(200, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        bookID,
        message: "Livro deletado.",
      })
    );

    return response.end();
  }
}
