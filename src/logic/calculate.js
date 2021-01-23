import operate from './operate';

// data has mock information so the app won't crash
const Calculate = (data = { total: null, next: null, operation: null }, btnName = '+') => {
  let { total, next, operation } = data;

  if (btnName === 'AC') {
    total = 0;
    next = 0;
    operation = '';
  } else if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (['÷', 'X', '+', '-', '%'].includes(btnName)) {
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
