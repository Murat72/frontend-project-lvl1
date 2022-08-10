import runGameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  } return true;
};

const generateRound = () => {
  const number = generateRandomNumber(2, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeNumberGame = () => {
  runGameEngine(rule, generateRound);
};

export default runPrimeNumberGame;
