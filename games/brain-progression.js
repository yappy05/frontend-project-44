#!/usr/bin/env node
import * as defaultMethods from '../src/index.js';

// создаем массив с прогрессией
const createProgression = () => {
  const array = [];
  let numDiff = defaultMethods.randomNum(10);
  if (numDiff === 0) numDiff = 1;
  // numDiff == 0 ? (numDiff = 1) : null;
  let num = defaultMethods.randomNum(50);
  for (let i = 0; i < 10; i += 1) {
    array.push(num);
    num += numDiff;
  }
  return array;
};
// создаем случайно число, и меняем элемент массива с этим числом на ".."
// const hideNum = (array) => {
//   const randomNum = defaultMethods.randomNum(array.length - 1);
// let invisibleNum = array[randomNum];
// array[randomNum] = "..";
//   return randomNum;
// };

defaultMethods.greeting();
const name = defaultMethods.knowName();
console.log('What number is missing in the progression?');
let flag;
for (let j = 0; j < 3; j += 1) {
  const arr = createProgression();
  const unlessnum = defaultMethods.randomNum(arr.length - 1);
  const num = arr[unlessnum];
  arr[unlessnum] = '..';

  // преобразуем массив в строку
  let progression = '';

  for (let k = 0; k < arr.length; k += 1) {
    progression += `${arr[k]} `;
  }
  // for (const num of arr) {
  //   progression += `${num} `;
  // }
  // задаем вопрос
  defaultMethods.questionMy(progression);
  // получаем ответ на вопрос
  const answer = defaultMethods.answerMy();
  // если наш ответ будет правильным то flag останеться true и вывведеться "Correct!"
  flag = defaultMethods.makeTry(
    answer === num,
    'Correct!',
    defaultMethods.uncorrectAnswer(num, answer, name),
  );
  // Если ответ будет неправильным flag = false, то мы вайдим из цикла
  if (!flag) break;
}
// Если все ответы были правильными, то поздравляем игрока!
if (flag) defaultMethods.congratulations(name);
