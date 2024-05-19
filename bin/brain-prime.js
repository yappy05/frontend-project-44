#!/usr/bin/env node
import * as defaultMethods from "./../src/index.js";

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

defaultMethods.greeting();
let name = defaultMethods.knowName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let flag;
for (let i = 0; i < 3; i++) {
  let randomNum = defaultMethods.randomNum(10);
  let numPrime = isPrime(randomNum);
  defaultMethods.question(randomNum);
  let answer = defaultMethods.answer() == "yes" ? true : false;
  flag = defaultMethods.makeTry(
    answer == numPrime,
    "Correct!",
    defaultMethods.uncorrectAnswer(numPrime, answer, name)
  );
  if (!flag) break;
}
if (flag) defaultMethods.congratulations(name);
