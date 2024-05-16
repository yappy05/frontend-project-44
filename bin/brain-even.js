#!/usr/bin/env node
import { checkEvenNum, knowName } from "./../src/module-task4.js";
console.log("Welcome to the Brain Games!");
const name = knowName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let trueAnswerCount = 0;
for (let i = 0; i < 3; i++) {
  if (!checkEvenNum()) break;
  trueAnswerCount++;
}
if (trueAnswerCount == 3) console.log(`Congratulations, ${name}!`);
