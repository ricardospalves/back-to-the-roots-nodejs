import { booksRoute } from "./books/index.js";
import { DEFAULT_HEADER } from "../constants/defaultHeader.js";

export const routes = {
  ...booksRoute,
  notFound: {
    GET: (request, response) => {
      response.writeHead(404, DEFAULT_HEADER);
      response.write(
        JSON.stringify({
          error: true,
          message: "Route not found.",
        })
      );

      return response.end();
    },
  },
};
