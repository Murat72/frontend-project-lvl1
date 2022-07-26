import {numberAttempts, showGreeating, compareUserAnswer, askQuestion} from '../src/index.js';

const max = 50;

const randomNumber = () => {
    return Math.floor((Math.random() * max) + 1);
}

function isNumeric(num){
    num = "" + num;
    return !isNaN(num) && !isNaN(parseFloat(num));
  }

const randomOperations = () => {
    const operations = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
}

const correctAnswer = (firstNumber, secondNumber, operation) => {
    switch(operation) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        default:
            return "Not correct operation";
    }
}

const calc = () => {
    let countUserAttempts = 1;
    const userName = showGreeating();
    console.log("What is the result of the expression?");
    while(countUserAttempts <= numberAttempts) {
        const firstNumber = randomNumber();
        const secondNumber = randomNumber();
        const operation = randomOperations();
        let userAnswer = askQuestion(`${firstNumber} ${operation} ${secondNumber}`);
        if (isNumeric(userAnswer)) {
            userAnswer = Number(userAnswer);
        }
        const corAnswer = correctAnswer(firstNumber, secondNumber, operation);
        if (compareUserAnswer(userAnswer, corAnswer, userName, countUserAttempts)) {
            countUserAttempts += 1;
        } else {
            break;
        }
    }
};

export default calc;