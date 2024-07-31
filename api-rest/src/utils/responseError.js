import { DEFAULT_HEADER } from "../constants/defaultHeader.js";

export const responseError = (response, { status, message }) => {
  response.writeHead(500, DEFAULT_HEADER);
  response.write(
    JSON.stringify({
      error: true,
      message: "Internal server error.",
    })
  );

  return response.end();
};
