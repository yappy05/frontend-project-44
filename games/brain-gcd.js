#!/usr/bin/env node
import * as defaultMethods from "./../src/index.js";

const nod = (num) => {
  const countDivider = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) countDivider.push(i);
  }
  return countDivider;
};
const findMaxNod = (arrayDivider1, arrayDivider2) => {
  const array = [];
  for (const num of arrayDivider1) {
    if (arrayDivider2.includes(num)) {
      array.push(num);
    }
  }
  let max = 1;
  for (const num of array) {
    if (num > max) max = num;
  }
  return max;
};

defaultMethods.greeting();
let name = defaultMethods.knowName();
console.log("Find the greatest common divisor of given numbers.");
let flag;
for (let i = 0; i < 3; i++) {
  //создаем 2 случайных числа
  let num1 = defaultMethods.randomNum(30);
  num1 == 0 ? (num1 = 1) : null;
  let num2 = defaultMethods.randomNum(30);
  num2 == 0 ? (num2 = 1) : null;
  //находим наибольший общий делитель
  let nodCompare = findMaxNod(nod(num1), nod(num2));
  //задаем вопрос с примером
  defaultMethods.question(num1 + " " + num2);
  //записываем ответ
  let answer = defaultMethods.answer();
  //проверяем правильность ответa
  flag = defaultMethods.makeTry(
    answer == nodCompare,
    "Correct!",
    defaultMethods.uncorrectAnswer(nodCompare, answer),
    name
  );
  //если ответ хотя бы раз был не правильным то прерываем цикл
  if (!flag) break;
}
//если все ответы были правильные то поздравляем!
if (flag) defaultMethods.congratulations(name);
