import { once } from "node:events";
import { DEFAULT_HEADER } from "../../constants/defaultHeader.js";
import { RESPONSE_ERROR_MESSAGES } from "../../constants/responseErrorMessages.js";
import { realTypeof } from "../../utils/realTypeof.js";
import { validator } from "../../utils/validator.js";

const schema = validator({
  name: {
    type: "string",
  },
  author: {
    type: "string",
  },
});

export class UpdateBookByIDController {
  constructor(updateByIDUseCase) {
    this.updateByIDUseCase = updateByIDUseCase;
  }

  async handle(request, response) {
    const { id: bookID } = request.params;
    const data = await once(request, "data");
    const body = JSON.parse(data);

    if (realTypeof(body) !== "object") {
      throw new Error(RESPONSE_ERROR_MESSAGES.invalidDataType.id);
    }

    const { name, author } = schema(body);

    const updatedBook = await this.updateByIDUseCase.execute(bookID, {
      name,
      author,
    });

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
