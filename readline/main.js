import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const readline = createInterface({
  input,
  output,
});
const answer = await readline.question(`What's your name? `);

console.log(`Welcome ${answer}!`);

readline.close();
