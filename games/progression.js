import {numberAttempts, showGreeating, compareUserAnswer, askQuestion, generateRandomNumber} from '../src/index.js';

const isNumeric = (num) => {
    num = "" + num;
    return !isNaN(num) && !isNaN(parseFloat(num));
}

const generateProgression = (startNumber, step, length) => {
    let progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(startNumber);
        startNumber += step;
    }
    return progression;
}

const getProgression = () => {
    let countUserAttempts = 1;
    const userName = showGreeating();
    console.log("What number is missing in the progression?");
    while(countUserAttempts <= numberAttempts) {
        const firstNumber = generateRandomNumber(2, 100);
        const lengthProgression = generateRandomNumber(5, 10);
        const stepProgression = generateRandomNumber(2, 9);
        const progression = generateProgression(firstNumber, stepProgression, lengthProgression);
        const randomIndex = generateRandomNumber(0, lengthProgression - 1);
        const correctAnswer = progression[randomIndex];
        progression.splice(randomIndex, 1, '..');
        let userAnswer = askQuestion(`${progression.join(' ')}`);
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


export default getProgression;