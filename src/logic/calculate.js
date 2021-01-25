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
    console.log({ total, next, operation });
    if (operation) {
      operation = btnName;
      total = operate(total, next, operation);
      next = null;
    } else {
      operation = btnName;
      total = next;
      next = null;
    }
  } else if (btnName === '=') {
    total = (operate(total, next, operation));
    next = null;
    operation = null;
  } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(btnName)) {
    if (next === null) {
      next = '';
    }
    if (btnName === '.') {
      if (!(next.includes('.'))) {
        next += btnName;
      }
    } else {
      next += btnName;
    }
  }
  return { total, next, operation };
};

export default Calculate;
