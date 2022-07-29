import {numberAttempts, showGreeating, compareUserAnswer, askQuestion, generateRandomNumber} from '../src/index.js';

const isNumeric = (num) => {
    num = "" + num;
    return !isNaN(num) && !isNaN(parseFloat(num));
}

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
}

const getPrimeNumber = () => {
    let countUserAttempts = 1;
    const userName = showGreeating();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    while(countUserAttempts <= numberAttempts) {
        const number = generateRandomNumber(2, 100);
        const correctAnswer = isNumberPrime(number) ? 'yes' : 'no';
        let userAnswer = askQuestion(`${number}`);
        if (isNumeric(userAnswer)) {
            userAnswer = Number(userAnswer);
        }
        if (compareUserAnswer(userAnswer, correctAnswer, userName, countUserAttempts)) {
            countUserAttempts += 1;
        } else {
            break;
        }
    }
};


export default getPrimeNumber;