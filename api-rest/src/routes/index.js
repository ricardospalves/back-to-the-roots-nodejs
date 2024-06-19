import { booksRoute } from "./books/index.js";

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
