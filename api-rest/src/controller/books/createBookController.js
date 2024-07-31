import { once } from "node:events";
import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";
import { BookEntity } from "../../entities/bookEntity.js";
import { realTypeof } from "../../utils/realTypeof.js";
import { RESPONSE_ERRORS } from "../../constants/responseErrors.js";

export class CreateBookController {
  constructor(createBookUseCase) {
    this.createBookUseCase = createBookUseCase;
  }

  async handle(request, response) {
    const data = await once(request, "data");
    const body = JSON.parse(data);

    if (realTypeof(body) !== "object") {
      throw new Error(RESPONSE_ERRORS.invalidDataType.id);
    }

    const book = new BookEntity(body);
    const bookID = await this.createBookUseCase.execute(book);

    response.writeHead(201, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        bookID,
        message: "Book registered successfully.",
      })
    );

    return response.end();
  }
}
