import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const readline = createInterface({
  input,
  output,
});

readline.question(`What's your name? `, (answer) => {
  console.log(`Welcome ${answer}!`);

  readline.close();
});
