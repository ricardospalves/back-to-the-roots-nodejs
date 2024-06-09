import { once } from "node:events";
import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";

export class UpdateBookByIDController {
  constructor(updateByIDUseCase) {
    this.updateByIDUseCase = updateByIDUseCase;
  }

  async handle(request, response) {
    const data = await once(request, "data");
    const json = JSON.parse(data);
    const { id, ...book } = json;
    const bookID = await this.updateByIDUseCase.execute(id, book);

    response.writeHead(200, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        bookID,
        message: "Livro atualizado com sucesso.",
      })
    );

    return response.end();
  }
}
