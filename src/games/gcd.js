import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (operand1, operand2) => {
  const lesserOpereand = (operand1 < operand2) ? operand1 : operand2;
  for (let i = lesserOpereand; i > 1; i -= 1) {
    if (operand1 % i === 0 && operand2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const gcd = () => {
  const operand1 = getRandomNumber(1, 25);
  const operand2 = getRandomNumber(1, 25);
  const question = `${operand1} ${operand2}`;
  const rightAnswer = getGcd(operand1, operand2);
  return [question, String(rightAnswer)];
};

export default () => runGame(gameRule, gcd);
