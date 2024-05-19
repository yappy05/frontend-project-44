#!/usr/bin/env node
import * as defaultMethods from "./../src/index.js";
defaultMethods.greeting();
console.log("What is the result of the expression?");
let name = defaultMethods.knowName();
let num;
let num1;
let num2;
let numStr;
let flag = true;
for (let i = 0; i < 3; i++) {
  num1 = defaultMethods.randomNum(10);
  num2 = defaultMethods.randomNum(10);
  switch (defaultMethods.randomNum(3)) {
    case 1:
      num = num1 + num2;
      numStr = num1 + " + " + num2;
      break;
    case 2:
      num = num1 - num2;
      numStr = num1 + " - " + num2;
      break;
    case 3:
      num = num1 * num2;
      numStr = num1 + " * " + num2;
      break;
    default:
      break;
  }
  defaultMethods.question(numStr);
  let answer = defaultMethods.answer();
  if (defaultMethods.compareAnswer(num, answer)) {
    console.log("Correct!");
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct is '${num}'.\nLet\'s try again, ${name}!`
    );
    flag = false;
    break;
  }
}
if (flag) console.log("Congratulations, " + name + "!");
