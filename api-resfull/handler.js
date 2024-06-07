import { DEFAULT_HEADER } from "./constants/defaultHeader.js";
import { booksRoute } from "./routes/books.js";

const routes = {
  ...booksRoute,
  default: (request, response) => {
    response.writeHead(404, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        error: true,
        message: "Route not found",
      })
    );

    return response.end();
  },
};

const errorHandler = (response) => {
  return (error) => {
    console.log("Something went wrong", error.stack);

    response.writeHead(500, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        error: true,
        message: "Internal server error",
      })
    );

    return response.end();
  };
};

export const handler = (request, response) => {
  const { url, method } = request;
  const { pathname } = new URL(`http://${request.headers.host}${url}`);
  const pathnameWithoutTrailingSlash = pathname.replace(/\/$/, "");
  const routeKey = `${pathnameWithoutTrailingSlash}:${method.toLowerCase()}`;
  const routeChosen = routes[routeKey] ?? routes.default;

  return Promise.resolve(routeChosen(request, response)).catch(
    errorHandler(response)
  );
};
