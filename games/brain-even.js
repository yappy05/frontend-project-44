#!/usr/bin/env node
import * as defaultMethods from '../src/index.js';

const checkEvenNum = (num, answer) => (num % 2 === 0 && answer === 'yes'
  ? true
  : !!(num % 2 !== 0 && answer === 'no'));

defaultMethods.greeting();
const name = defaultMethods.knowName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let flag = true;
for (let i = 0; i < 3; i += 1) {
  const num = defaultMethods.randomNum(100);
  defaultMethods.questionMy(num);
  const answer = defaultMethods.answerMy();
  flag = defaultMethods.makeTry(
    checkEvenNum(num, answer),
    defaultMethods.uncorrectAnswer(
      answer === 'yes' ? 'no' : 'yes',
      answer === 'no' ? 'no' : 'yes',
      name,
    ),
  );

  if (!flag) break;
}
if (flag) defaultMethods.congratulations(name);
