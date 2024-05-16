import readlineSync from "readline-sync";

const knowName = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name;
};

const checkEvenNum = () => {
  let randomNum = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum}`);
  let answer = readlineSync.question("Your answer: ");
  if (randomNum % 2 == 0 && answer == "yes") {
    console.log("Correct!");
    return true;
  } else if (randomNum % 2 != 0 && answer == "no") {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${answer == "yes" ? "no" : "yes"}' is wrong answer ;(. Correct answer was '${answer == "yes" ? "no" : "yes"}')`
    );
    return false;
  }
};
export { checkEvenNum, knowName };
