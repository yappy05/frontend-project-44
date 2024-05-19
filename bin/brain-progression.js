#!/usr/bin/env node
import * as defaultMethods from "./../src/index.js";

//создаем массив с прогрессией
const createProgression = () => {
  const array = [];
  let numDiff = defaultMethods.randomNum(10);
  numDiff == 0 ? (numDiff = 1) : null;
  let num = defaultMethods.randomNum(50);
  for (let i = 0; i < 10; i++) {
    array.push(num);
    num += numDiff;
  }
  return array;
};
//создаем случайно число, и меняем элемент массива с этим числом на ".."
const hideNum = (array) => {
  let randomNum = defaultMethods.randomNum(array.length - 1);
  let invisibleNum = array[randomNum];
  array[randomNum] = "..";
  return invisibleNum;
};

defaultMethods.greeting();
let name = defaultMethods.knowName();
console.log("What number is missing in the progression?");
let flag;
for (let i = 0; i < 3; i++) {
  const arr = createProgression();
  let num = hideNum(arr);

  //преобразуем массив в строку
  let progression = "";
  for (const num of arr) {
    progression += num + " ";
  }
  //задаем вопрос
  defaultMethods.question(progression);
  //получаем ответ на вопрос
  let answer = defaultMethods.answer();
  //если наш ответ будет правильным то flag останеться true и вывведеться "Correct!"
  flag = defaultMethods.makeTry(
    answer == num,
    "Correct!",
    defaultMethods.uncorrectAnswer(num, answer)
  );
  //Если ответ будет неправильным flag = false, то мы вайдим из цикла
  if (!flag) break;
}
//Если все ответы были правильными, то поздравляем игрока!
if (flag) defaultMethods.congratulations(name);
