import { once } from "node:events";
import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";
import { BookEntity } from "../../entities/bookEntity.js";

export class CreateBookController {
  constructor(createBookUseCase) {
    this.createBookUseCase = createBookUseCase;
  }

  async handle(request, response) {
    const data = await once(request, "data");
    const body = JSON.parse(data);
    const book = new BookEntity(body);

    this.createBookUseCase.execute(book);

    response.writeHead(201, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        message: "Livro cadastrado com sucesso.",
      })
    );

    return response.end();
  }
}
