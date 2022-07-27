import {numberAttempts, showGreeating, compareUserAnswer, askQuestion} from '../src/index.js';

const max = 80;

const randomNumber = () => {
    return Math.floor((Math.random() * max) + 1);
}

function isNumeric(num){
    num = "" + num;
    return !isNaN(num) && !isNaN(parseFloat(num));
}

const getGCD = (firstNumber, secondNumber) => {
    while (firstNumber % secondNumber !== 0) {
        const tmp = firstNumber % secondNumber;
        firstNumber = secondNumber;
        secondNumber = tmp;
        getGCD(firstNumber, secondNumber);
    }
    return secondNumber;
}

const gcd = () => {
    let countUserAttempts = 1;
    const userName = showGreeating();
    console.log("Find the greatest common divisor of given numbers.");
    while(countUserAttempts <= numberAttempts) {
        const firstNumber = randomNumber();
        const secondNumber = randomNumber();
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