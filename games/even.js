import {numberAttempts, showGreeating, compareUserAnswer, askQuestion, generateRandomNumber} from '../src/index.js';

const evenNumber = () => {
  let countUserAttempts = 1;
  const userName = showGreeating();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while(countUserAttempts <= numberAttempts) {
    const number = generateRandomNumber(1, 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const userAnswer = askQuestion(number).toLowerCase();
    if (compareUserAnswer(userAnswer, correctAnswer, userName, countUserAttempts)) {
      countUserAttempts += 1;
    } else {
      break;
    }
  }
};

export default evenNumber;