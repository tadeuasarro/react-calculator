import operate from './operate';

const Calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  const calcOperations = ['x', '+', '-', '÷', '='];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  switch (buttonName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      next *= -1;
      total *= -1;
      break;
    case '%':
      if (next == null) {
        next = String(total / 100);
      } else {
        next = String(next / 100);
      }
      break;
    case '.':
      if (next == null) {
        next = '0.';
      } else if (!next.includes('.')) {
        next += '.';
      }
      break;
    default:
      break;
  }

  if (calcOperations.includes(buttonName)) {
    if (operation !== null) {
      total = String(operate(total, next, operation));
      next = null;
    } else if (next != null) {
      total = next;
      next = null;
    }
    if (buttonName !== '=') {
      operation = buttonName;
    } else {
      operation = null;
    }
  }

  if (numbers.includes(buttonName)) {
    if (next != null) {
      next += buttonName;
    } else {
      next = buttonName;
    }
  }

  const calculator = {
    total,
    next,
    operation,
  };

  return calculator;
};

export default Calculate;
