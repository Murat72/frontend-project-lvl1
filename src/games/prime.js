import { runGameEngine} from '../index.js';

import { generateRandomNumber } from '../utils.js';

const isNumberPrime = (n) => {
  let isPrime = true;
  const sqrt = Math.sqrt(n);

  if (n === 2 || n === 3) {
    isPrime = true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    isPrime = false;
  } else {
    for (let i = 5; i <= sqrt; i += 6) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (!isPrime) {
      for (let i = 7; i <= sqrt; i += 6) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
  }
  return isPrime;
};

const generateRound = () => {
  const number = generateRandomNumber(2, 100);
  const question = `${number}`;
  const correctAnswer = isNumberPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}

const runPrimeNumberGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGameEngine(rule, generateRound);
};

export default runPrimeNumberGame;
