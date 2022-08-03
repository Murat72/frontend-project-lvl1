import { runGameEngine} from '../index.js';

import { generateRandomNumber } from '../utils.js';

const generateRound = () => {
  const number = generateRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
}

const runEvenNumberGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameEngine(rule, generateRound);
};

export default runEvenNumberGame;

