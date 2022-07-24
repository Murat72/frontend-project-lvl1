import readlineSync from 'readline-sync';

const evenNumber = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countAttempts = 0;
  while(countAttempts < 3) {
    const number = Math.floor(Math.random() * 100 + 1);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();
    if(userAnswer === correctAnswer) {
      countAttempts += 1;
      console.log("Correct!");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      break;
    }
  }
  if(countAttempts === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default evenNumber;