import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const getProgressionArray = () => {
  const progressionArray = [];
  let progressionItem = 0;
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(-15, 15);
  for (let i = 0; i <= progressionLength; i += 1) {
    progressionItem += progressionStep;
    progressionArray.push(progressionItem);
  }
  return progressionArray;
};

const progression = () => {
  const progressionArray = getProgressionArray();
  const indexForQuestion = getRandomNumber(1, progressionArray.length - 1);
  const rightAnswer = progressionArray[indexForQuestion];
  progressionArray[indexForQuestion] = '..';
  const question = progressionArray.join(' ');
  return [question, String(rightAnswer)];
};

export default () => runGame(gameRule, progression);
