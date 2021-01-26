import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const valueOne = Big(numberOne);
  const valueTwo = Big(numberTwo);
  let total = 0;

  switch (operation) {
    case '+':
      total = valueOne.plus(valueTwo);
      break;
    case '-':
      total = valueOne.minus(valueTwo);
      break;
    case 'x':
      total = valueOne.times(valueTwo);
      break;
    case '÷':
      if (numberTwo === '0') {
        total = "Can't divide by zero";
      } else {
        total = valueOne.div(valueTwo);
      }
      break;

    default:
      break;
  }
  return total;
};

export default Operate;
