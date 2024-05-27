#!/usr/bin/env node
import * as defaultMethods from "./../src/index.js";

const checkEvenNum = (num, answer) => {
  return num % 2 == 0 && answer == "yes"
    ? true
    : num % 2 != 0 && answer == "no"
      ? true
      : false;
};

defaultMethods.greeting();
const name = defaultMethods.knowName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let flag = true;
for (let i = 0; i < 3; i++) {
  let num = defaultMethods.randomNum(100);
  defaultMethods.question(num);
  let answer = defaultMethods.answer();
  flag = defaultMethods.makeTry(
    checkEvenNum(num, answer),
    "Correct!",
    defaultMethods.uncorrectAnswer(
      answer == "yes" ? "no" : "yes",
      answer == "no" ? "no" : "yes",
      name
    )
  );

  if (!flag) break;
}
if (flag) defaultMethods.congratulations(name);
