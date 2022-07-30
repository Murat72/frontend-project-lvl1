import { 
  numberAttempts, showGreeating, compareUserAnswer, askQuestion, generateRandomNumber 
} from '../src/index.js';

const isNumeric = (num) => {
  const number = String(num);
  return !Number.isNaN(number) && !Number.isNaN(parseFloat(number));
};

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

const gcd = () => {
  let countUserAttempts = 1;
  const userName = showGreeating();
  console.log('Find the greatest common divisor of given numbers.');
  while (countUserAttempts <= numberAttempts) {
    const firstNumber = generateRandomNumber(1, 100);
    const secondNumber = generateRandomNumber(1, 100);
    let userAnswer = askQuestion(`${firstNumber} ${secondNumber}`);
    if (isNumeric(userAnswer)) {
      userAnswer = Number(userAnswer);
    }
    const corAnswer = getGCD(firstNumber, secondNumber);
    if (compareUserAnswer(userAnswer, corAnswer, userName, countUserAttempts)) {
      countUserAttempts += 1;
    } else {
      break;
    }
  }
};

export default gcd;
