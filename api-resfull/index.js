import { createServer } from "node:http";
import { handler } from "./handler.js";

const PORT = 3333;
const HOSTNAME = "localhost";

const server = createServer(handler);

server.listen(PORT, HOSTNAME, () => {
  console.log(`server is running on http://${HOSTNAME}:${PORT}`);
});
