import operate from './operate';

const Calculate = (data, btnName = '+') => {
  let { total, next, operation } = data;

  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (['÷', 'x', '+', '-', '%'].includes(btnName)) {
    total = null;
    operation = btnName;
    operate(total, next, operation);
  } else if (btnName === '=') {
    return { total, next, operation };
  } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(btnName)) {
    if (total === null) {
      total = '';
    }
    if (btnName === '.') {
      if (!(total.includes('.'))) {
        total += btnName;
      }
    } else {
      total += btnName;
    }
  }
  return { total, next, operation };
};

export default Calculate;
