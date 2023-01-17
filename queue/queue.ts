import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { userInput } from "../userInput/userInput";

class Queue {
  queue: number[];

  constructor() {
    this.queue = [];
  }

  async enqueue() {
    const num = await userInput();
    this.queue.push(num);
    console.log(queue);
  }

  dequeue() {
    if (!this.queue.length) {
      return null;
    }
    return this.queue.shift();
  }

  addRandom(length: number = 10) {
    for (let i = 0; i < length; i++) {
      this.queue.push(Math.floor(Math.random() * length));
    }
  }

  async usersAction() {
    const rl = readline.createInterface({ input, output, terminal: false });

    let answer: string | null = null;

    while (!answer) {
      answer = await rl.question(
        "What is the action you would like to do?  enqueue = 1 | dequeue = 2 "
      );
    }

    if (answer === "1") {
      return this.enqueue();
    }
    if (answer === "2") {
      return this.dequeue();
    }

    console.error("value must be 1 or 2");
  }
}

const queue = new Queue();
