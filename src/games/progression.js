import runGameEngine from '../index.js';
import generateRandomNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (startNumber, step, length) => {
  const progression = [];
  let a = startNumber;
  for (let i = 0; i < length; i += 1) {
    progression.push(a);
    a += step;
  }
  return progression;
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(2, 100);
  const lengthProgression = generateRandomNumber(5, 10);
  const stepProgression = generateRandomNumber(2, 9);
  const progression = generateProgression(firstNumber, stepProgression, lengthProgression);
  const randomIndex = generateRandomNumber(0, lengthProgression - 1);
  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
};

const runProgressionGame = () => {
  runGameEngine(rule, generateRound);
};

export default runProgressionGame;
