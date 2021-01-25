import Big from 'big.js';

// first and second have mock integers values, so bigjs won't crash
const operate = (first = '0', second = '0', operation) => {
  const firstNumber = (first === null ? Big(0) : Big(first));
  const secondNumber = (second === null ? Big(0) : Big(second));

  let result;
  if (operation === '÷') {
    result = firstNumber / secondNumber;
  } else if (operation === 'X') {
    result = firstNumber * secondNumber;
  } else if (operation === '+') {
    result = firstNumber + secondNumber;
  } else if (operation === '-') {
    result = firstNumber - secondNumber;
  } else {
    result /= 100;
  }

  return result;
};

export default operate;
