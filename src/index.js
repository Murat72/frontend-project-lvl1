import readlineSync from 'readline-sync';


const numberAttempts = 3;

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const compareUserAnswer = (userAnswer, corAnswer, userName, countUserAttempts) => {
  if (userAnswer === corAnswer) {
    console.log('Correct!');
    if (countUserAttempts === numberAttempts) {
      console.log(`Congratulations, ${userName}!`);
    }
      return true;
  } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
  }
};

const showGreeating = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
}

export { 
    numberAttempts, showGreeating, compareUserAnswer, askQuestion, generateRandomNumber 
};
