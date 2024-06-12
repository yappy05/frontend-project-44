#!/usr/bin/env node
import * as defaultMethods from "../src/index.js";

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

defaultMethods.greeting();
const name = defaultMethods.knowName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let flag;
for (let j = 0; j < 3; j += 1) {
  let randomNum = defaultMethods.randomNum(10);
  while (randomNum === 0.0 || randomNum === 1.0) {
    randomNum = defaultMethods.randomNum(10);
  }
  const numPrime = isPrime(randomNum);
  defaultMethods.questionMy(randomNum);
  const answer = defaultMethods.answerMy() === "yes";
  // console.log(`answer = ${answer}, prime = ${numPrime}`);
  flag = defaultMethods.makeTry(
    answer === numPrime,
    defaultMethods.uncorrectAnswer(
      answer ? "no" : "yes",
      answer ? "yes" : "no",
      name
    )
  );
  if (!flag) break;
}
if (flag) defaultMethods.congratulations(name);
