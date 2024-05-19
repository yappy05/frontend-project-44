import readlineSync from "readline-sync";
const knowName = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};
const greeting = () => {
  console.log("Welcome to the Brain Games!");
};
const greetingWithName = (name) => {
  console.log(`Hello, ${name}!`);
};
const question = (qs) => {
  console.log(`Question: ${qs}`);
};
const answer = () => {
  return readlineSync.question("Your answer: ");
};
const compareAnswer = (question, answer) => {
  return question == answer ? true : false;
};
const randomNum = (num) => {
  return Math.floor(Math.random() * num);
};

const makeTry = (arg, correct, uncorrect) => {
  let flag = true;
  if (!arg) {
    flag = false;
    console.log(uncorrect);
  } else {
    console.log(correct);
  }
  return flag;
};
const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};
const uncorrectAnswer = (answerTrue, answerFalse, name = "Sergey") => {
  return `'${answerFalse}' is wrong answer ;(. Correct answer is '${answerTrue}.\nLet\'s try again, ${name}!`;
};

export {
  knowName,
  greeting,
  question,
  answer,
  compareAnswer,
  randomNum,
  greetingWithName,
  makeTry,
  uncorrectAnswer,
  congratulations,
};
