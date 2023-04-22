import { getRandomNumber, runGame } from '../index.js';

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
  const itemForQuestion = getRandomNumber(1, progressionArray.length - 1);
  const rightAnswer = progressionArray[itemForQuestion];
  progressionArray[itemForQuestion] = '..';
  const question = progressionArray.join(' ');
  return [question, String(rightAnswer)];
};

export default () => runGame(gameRule, progression);
