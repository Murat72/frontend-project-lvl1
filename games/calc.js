import {
  numberAttempts, showGreeating, compareUserAnswer, askQuestion, generateRandomNumber,
} from '../src/index.js';

const isNumeric = (num) => {
  const number = String(num);
  return !Number.isNaN(number) && !Number.isNaN(parseFloat(number));
};

const randomOperations = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};

const correctAnswer = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 'Not correct operation';
  }
};

const calc = () => {
  let countUserAttempts = 1;
  const userName = showGreeating();
  console.log('What is the result of the expression?');
  while (countUserAttempts <= numberAttempts) {
    const firstNumber = generateRandomNumber(1, 50);
    const secondNumber = generateRandomNumber(1, 50);
    const operation = randomOperations();
    let userAnswer = askQuestion(`${firstNumber} ${operation} ${secondNumber}`);
    if (isNumeric(userAnswer)) {
      userAnswer = Number(userAnswer);
    }
    const corAnswer = correctAnswer(firstNumber, secondNumber, operation);
    if (compareUserAnswer(userAnswer, corAnswer, userName, countUserAttempts)) {
      countUserAttempts += 1;
    } else {
      break;
    }
  }
};

export default calc;
