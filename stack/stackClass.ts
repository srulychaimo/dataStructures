import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { userInput } from "../userInput/userInput";

class Stack {
  stack: number[] | undefined[];
  top: number;
  length: number;

  constructor(length: number = 10) {
    this.stack = new Array(length);
    this.top = -1;
    this.length = length;
  }

  async push() {
    const value = await userInput();
    const start = performance.now();
    if (this.top >= this.stack.length - 1) {
      console.log("this full");

      return false;
    } else {
      this.top++;
      this.stack[this.top] = Number(value);

      const end = performance.now();
      console.log(`Execution time: ${end - start} ms`);
      await this.userAction();
      return true;
    }
  }

  async pop() {
    const start = performance.now();
    if (stack.top < 0) {
      console.log("Stack is empty");

      return 0;
    } else {
      let x = this.stack[this.top];

      this.stack[this.top] = undefined;
      this.top--;
      console.log(this.stack, x);

      const end = performance.now();
      console.log(`Execution time: ${end - start} ms`);
      await this.userAction();
      return x;
    }
  }

  getTop() {
    const start = performance.now();
    console.log(this.stack[this.top]);
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);

    this.userAction();
  }

  async userAction() {
    const rl = readline.createInterface({ input, output, terminal: false });
    let answer;
    while (!answer) {
      answer = await rl.question(
        "What action would you want to make on the stack? => ('push', 'pop', 'top') "
      );
    }

    switch (answer) {
      case "push":
        return this.push();
      case "pop":
        return this.pop();
      case "top":
        return this.getTop();
      default:
        console.log("Most be or push, pop, top!");

        break;
    }
    await this.userAction();
  }

  addRandom(length: number = 10) {
    for (let i = 0; i < length; i++) {
      if (this.top >= this.stack.length - 1) {
        console.log("this full");

        return false;
      } else {
        this.top++;
        this.stack[this.top] = Math.floor(Math.random() * length);
      }
    }
  }
}

const stack = new Stack();
stack.addRandom();
