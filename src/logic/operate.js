import Big from 'big.js';

// first and second have mock integers values, so bigjs won't crash
const operate = (first, second, operation) => {
  const firstNumber = (first === null ? Big(0) : Big(first));
  const secondNumber = (second === null ? Big(0) : Big(second));

  let result;
  if (operation === '÷') {
    result = firstNumber / secondNumber;
  } else if (operation === 'x') {
    result = firstNumber * secondNumber;
  } else if (operation === '+') {
    result = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
  } else if (operation === '-') {
    result = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
  } else {
    result /= 100;
  }

  return result.toString();
};

export default operate;
