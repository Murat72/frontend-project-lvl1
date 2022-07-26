import {numberAttempts, showGreeating, compareUserAnswer, askQuestion} from '../src/index.js';

const max = 100;

const randomNumber = () => {
  return Math.floor((Math.random() * max) + 1);
}

const evenNumber = () => {
  let countUserAttempts = 1;
  const userName = showGreeating();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while(countUserAttempts <= numberAttempts) {
    const number = randomNumber();
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