import readlineSync from 'readline-sync';

const knowName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const greeting = () => {
  console.log('Welcome to the Brain Games!');
};
const greetingWithName = (name) => {
  console.log(`Hello, ${name}!`);
};
const questionMy = (qs) => {
  console.log(`Question: ${qs}`);
};
const answerMy = () => readlineSync.question('Your answer: ');
const compareAnswer = (question, answer) => question === answer;
const randomNum = (num) => Math.floor(Math.random() * num);

// я менял его const makeTry = (func, uncorrect, correct = "Correct!")
const makeTry = (func, uncorrect) => {
  let flag = true;
  if (!func) {
    flag = false;
    console.log(uncorrect);
  } else {
    console.log('Correct!');
  }
  return flag;
};
const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};
const uncorrectAnswer = (answerTrue, answerFalse, name) => `'${answerFalse}' is wrong answer ;(. Correct answer is '${answerTrue}'.\nLet's try again, ${name}!`;

export {
  knowName,
  greeting,
  questionMy,
  answerMy,
  compareAnswer,
  randomNum,
  greetingWithName,
  makeTry,
  uncorrectAnswer,
  congratulations,
};
