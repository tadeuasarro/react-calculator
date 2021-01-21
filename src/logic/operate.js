const operate = (firstNumber, secondNumber, operation) => {
  let result;
  if (operation === '÷') {
    result = firstNumber / secondNumber;
  } else if (operation === 'X') {
    result = firstNumber * secondNumber;
  } else if (operation === '+') {
    result = firstNumber + secondNumber;
  } else {
    result = firstNumber - secondNumber;
  }

  return result;
};

export default operate;
