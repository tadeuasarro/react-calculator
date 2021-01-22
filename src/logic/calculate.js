import operate from './operate';

const Calculate = (data = { total: null, next: null, operation: null }, btnName = '+') => {
  let { total, next, operation } = data;

  if (btnName === 'AC') {
    total = 0;
    next = 0;
    operation = '';
  } else if (btnName === '+/-') {
    total *= 1;
    next *= 1;
  } else if (btnName === '%') {
    total /= 100;
  } else if (['÷', 'X', '+', '-'].includes(btnName)) {
    operation = btnName;
    operate(total, next, operation);
  } else if (btnName === '=') {
    return total;
  } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(btnName)) {
    total += btnName;
  }
  return total;
};

export default Calculate;
