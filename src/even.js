import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const isEven = (num) => num % 2 === 0;

const runIsEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const question = getRandomNumber(1, 100);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runIsEvenGame;
