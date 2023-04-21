import { getRandomNumber, runGame } from '../index.js';

const gameRule = 'What is the result of the expression?';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomNumOfOperation = getRandomNumber(0, 2);
  return operations[randomNumOfOperation];
};

const getCalcResult = (operant1, operant2, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = operant1 + operant2;
      break;
    case '-':
      result = operant1 - operant2;
      break;
    case '*':
      result = operant1 * operant2;
      break;
    default:
      result = null;
  }
  return result;
};

const calc = () => {
  const operand1 = getRandomNumber(1, 100);
  const operand2 = getRandomNumber(1, 10);
  const operation = getRandomOperation();
  const question = (`${operand1} ${operation} ${operand2}`);
  const rightAnswer = getCalcResult(operand1, operand2, operation);
  return [question, String(rightAnswer)];
};

export default () => runGame(gameRule, calc);