import { runGameEngine} from '../index.js';

import { generateRandomNumber } from '../utils.js';

const getRandomOperations = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
};

const getCorrectAnswer = (firstNumber, secondNumber, operation) => {
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

const generateRound = () => {
  const firstNumber = generateRandomNumber(1, 50);
  const secondNumber = generateRandomNumber(1, 50);
  const operation = getRandomOperations();
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = `${getCorrectAnswer(firstNumber, secondNumber, operation)}`;
  return [question, correctAnswer];
}

const runCalcGame = () => {
  const rule = 'What is the result of the expression?';
  runGameEngine(rule, generateRound);
};
export default runCalcGame;
