import { DEFAULT_HEADER } from "../constants/defaultHeader.js";

export const responseError = (response, { status, message }) => {
  response.writeHead(status, DEFAULT_HEADER);
  response.write(
    JSON.stringify({
      error: true,
      message,
    })
  );

  return response.end();
};
