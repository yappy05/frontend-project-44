import readlineSync from "readline-sync";
const knowName = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};
const greeting = () => {
  console.log("Welcome to the Brain Games!");
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

export { knowName, greeting, question, answer, compareAnswer, randomNum };
