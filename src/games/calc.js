import runGameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getCorrectAnswer = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return `Not correct operation - ${operation}`;
  }
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(1, 50);
  const secondNumber = generateRandomNumber(1, 50);
  const operation = operations[generateRandomNumber(0, operations.length - 1)];
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = `${getCorrectAnswer(firstNumber, secondNumber, operation)}`;
  return [question, correctAnswer];
};

const runCalcGame = () => {
  runGameEngine(rule, generateRound);
};

export default runCalcGame;
