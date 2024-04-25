import { createServer } from "node:http";

const HOSTNAME = "localhost";
const PORT = 3000;

const server = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");

  return response.end("Hello World!");
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`🚀 Server running at http://${HOSTNAME}:${PORT}/`);
});
