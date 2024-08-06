import { RESPONSE_ERROR_MESSAGES } from "./constants/responseErrorMessages.js";
import { ValidationError } from "./entities/validationError.js";
import { routes } from "./routes/index.js";
import { removeTrailingSlash } from "./utils/removeTrailingSlash.js";
import { responseError } from "./utils/responseError.js";

const errorHandler = (response) => {
  return (error) => {
    if (error instanceof ValidationError) {
      return responseError(response, {
        status: 422,
        message: error.message,
      });
    }

    const errorMessage = error?.message;

    if (errorMessage in RESPONSE_ERROR_MESSAGES) {
      const { status, message } = RESPONSE_ERROR_MESSAGES[errorMessage];

      return responseError(response, {
        status,
        message,
      });
    }

    return responseError(response, {
      status: 500,
      message: "Internal server error.",
    });
  };
};

export const handler = (request, response) => {
  const method = request.method.toUpperCase();
  const { pathname } = new URL(`http://${request.headers.host}${request.url}`);
  const pathnameWithoutTrailingSlash = removeTrailingSlash(pathname);
  let chosenRoute = routes?.[pathnameWithoutTrailingSlash]?.[method];

  if (!chosenRoute) {
    const routeKeys = Object.keys(routes).filter((key) => key.includes(":"));
    const matchedKey = routeKeys.find((key) => {
      const regex = new RegExp(`^${key.replace(/:[^/]+/g, "([^/]+)")}$`);
      return regex.test(pathname);
    });

    if (matchedKey) {
      const regex = new RegExp(`^${matchedKey.replace(/:[^/]+/g, "([^/]+)")}$`);
      const dynamicParams = regex.exec(pathname).slice(1);
      const dynamicHandler = routes[matchedKey][method];
      const paramKeys = matchedKey
        .match(/:[^/]+/g)
        .map((key) => key.substring(1));

      const params = dynamicParams.reduce(
        (acc, val, i) => ({ ...acc, [paramKeys[i]]: val }),
        {}
      );

      request.params = params;

      chosenRoute = dynamicHandler;
    } else {
      chosenRoute = routes.notFound.GET;
    }
  }

  return Promise.resolve(chosenRoute(request, response)).catch(
    errorHandler(response)
  );
};
