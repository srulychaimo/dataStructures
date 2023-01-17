import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export const userInput = async (
  question: string = "What is the number u would like to check: "
): Promise<number> => {
  const rl = readline.createInterface({ input, output, terminal: false });

  const answer = await rl.question(question);

  return Number(answer);
};
