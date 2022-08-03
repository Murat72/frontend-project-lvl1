import { runGameEngine} from '../index.js';

import { generateRandomNumber } from '../utils.js';

const getGCD = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (a % b !== 0) {
    const tmp = a % b;
    a = b;
    b = tmp;
    getGCD(a, b);
  }
  return b;
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(1, 100);
  const secondNumber = generateRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${getGCD(firstNumber, secondNumber)}`;
  return [question, correctAnswer];
}

const runGCDGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  runGameEngine(rule, generateRound);
};

export default runGcdGame;
