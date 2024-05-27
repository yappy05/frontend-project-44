#!/usr/bin/env node
import * as defaultMethods from "./../src/index.js";
defaultMethods.greeting();
let name = defaultMethods.knowName();
console.log("What is the result of the expression?");
let calculateNum;
let num1;
let num2;
let calculateNumStr;
let flag = true;
for (let i = 0; i < 3; i++) {
  num1 = defaultMethods.randomNum(10);
  num2 = defaultMethods.randomNum(10);
  switch (defaultMethods.randomNum(3)) {
    case 0:
      calculateNum = num1 + num2;
      calculateNumStr = num1 + " + " + num2;
      break;
    case 1:
      calculateNum = num1 - num2;
      calculateNumStr = num1 + " - " + num2;
      break;
    case 2:
      calculateNum = num1 * num2;
      calculateNumStr = num1 + " * " + num2;
      break;
    default:
      break;
  }
  defaultMethods.question(calculateNumStr);
  let answer = defaultMethods.answer();
  if (defaultMethods.compareAnswer(calculateNum, answer)) {
    console.log("Correct!");
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct is '${calculateNum}'.\nLet's try again, ${name}!`
    );
    flag = false;
    break;
  }
}
if (flag) console.log("Congratulations, " + name + "!");
