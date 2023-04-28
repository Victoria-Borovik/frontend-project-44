import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const even = () => {
  const question = getRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => runGame(gameRule, even);
