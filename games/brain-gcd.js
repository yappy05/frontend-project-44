#!/usr/bin/env node
import * as defaultMethods from '../src/index.js';

const nod = (num) => {
  const countDivider = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) countDivider.push(i);
  }
  return countDivider;
};
const findMaxNod = (arrayDivider1, arrayDivider2) => {
  const array = [];
  // for (const num of arrayDivider1) {
  //   if (arrayDivider2.includes(num)) {
  //     array.push(num);
  //   }
  // }
  for (let j = 0; j < arrayDivider1.length; j += 1) {
    if (arrayDivider2.includes(arrayDivider1[j])) {
      array.push(arrayDivider1[j]);
    }
  }

  let max = 1;
  // for (const num of array) {
  //   if (num > max) max = num;
  // }
  for (let k = 0; k < array.length; k += 1) {
    if (array[k] > max) max = array[k];
  }
  return max;
};

defaultMethods.greeting();
const name = defaultMethods.knowName();
console.log('Find the greatest common divisor of given numbers.');
let flag;
for (let l = 0; l < 3; l += 1) {
  // создаем 2 случайных числа
  let num1 = defaultMethods.randomNum(30);
  // num1 == 0 ? (num1 = 1) : null;
  if (num1 === 0) num1 = 1;
  const num2 = defaultMethods.randomNum(30);
  // num2 == 0 ? (num2 = 1) : null;
  if (num1 === 0) num1 = 2;
  // находим наибольший общий делитель
  const nodCompare = findMaxNod(nod(num1), nod(num2));
  // задаем вопрос с примером
  defaultMethods.questionMy(`${num1} ${num2}`);
  // записываем ответ
  const answer = defaultMethods.answerMy();
  // проверяем правильность ответa
  flag = defaultMethods.makeTry(
    answer !== nodCompare,
    defaultMethods.uncorrectAnswer(nodCompare, answer, name),
  );
  // если ответ хотя бы раз был не правильным то прерываем цикл
  if (!flag) break;
}
// если все ответы были правильные то поздравляем!
if (flag) defaultMethods.congratulations(name);
