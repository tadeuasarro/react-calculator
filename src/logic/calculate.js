import operate from './operate';

const Calculate = (data, btnName = '+') => {
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
  } else if (btnName === '.') {
    total += btnName;
  }
  return total;
};

export default Calculate;
