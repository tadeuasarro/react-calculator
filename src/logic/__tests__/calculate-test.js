import Calculate from '../calculate';

describe('if user presses AC key, calculate', () => {
  test('assigns null to all calculatorData', () => {
    expect(Calculate({
      total: 9, next: 6, operation: '+',
    }, 'AC')).toEqual({
      total: null, next: null, operation: null,
    });
  });
  test("doesn't leave calculatorData unmutated", () => {
    expect(Calculate({
      total: 9, next: 6, operation: '+',
    }, 'AC')).not.toEqual({
      total: 9, next: 6, operation: '+',
    });
  });
});

describe('before first numerical input', () => {
  test("if user presses / key, calculate doesn't leave total at null", () => {
    expect(Calculate({
      total: null, next: null, operation: null,
    }, '/')).not.toEqual({
      total: null, next: null, operation: '/',
    });
  });
});

describe('after first numerical input', () => {
  test('if user presses + key, calculate assigns + to operation', () => {
    expect(Calculate({
      total: 9, next: null, operation: null,
    }, '+')).toEqual({
      total: 9, next: null, operation: '+',
    });
  });
  test("if user presses + key, calculate doesn't leave operation at null", () => {
    expect(Calculate({
      total: 9, next: null, operation: null,
    }, '+')).not.toEqual({
      total: 9, next: null, operation: null,
    });
  });
  test('if user presses - key, calculate assigns - to operation', () => {
    expect(Calculate({
      total: 9, next: null, operation: null,
    }, '-')).toEqual({
      total: 9, next: null, operation: '-',
    });
  });
  test("if user presses - key, calculate doesn't leave operation at null", () => {
    expect(Calculate({
      total: 9, next: null, operation: null,
    }, '-')).not.toEqual({
      total: 9, next: null, operation: null,
    });
  });
  test('if user presses x key, calculate assigns * to operation', () => {
    expect(Calculate({
      total: 9, next: null, operation: null,
    }, 'x')).toEqual({
      total: 9, next: null, operation: 'x',
    });
  });
  test("if user presses x key, calculate doesn't leave operation at null", () => {
    expect(Calculate({
      total: 9, next: null, operation: null,
    }, 'x')).not.toEqual({
      total: 9, next: null, operation: null,
    });
  });
});

describe('if user presses a number key before the operator', () => {
  test("but after first numerical input, calculate doesn't reassign that input to total", () => {
    expect(Calculate({
      total: '9', next: null, operation: null,
    }, '6')).not.toEqual({
      total: '6', next: null, operation: null,
    });
  });
});

describe('if user presses a number key after the operator', () => {
  test('but before first new numerical input, calculate assigns that digit to next', () => {
    expect(Calculate({
      total: '9', next: null, operation: '+',
    }, '6')).toEqual({
      total: '9', next: '6', operation: '+',
    });
  });
  test('and after first new numerical input, calculate appends that digit to the end of next', () => {
    expect(Calculate({
      total: '9', next: '6', operation: '+',
    }, '6')).toEqual({
      total: '9', next: '66', operation: '+',
    });
  });
  test("and after first new numerical input, calculate doesn't reassign that value to next", () => {
    expect(Calculate({
      total: '9', next: '6', operation: '+',
    }, '6')).not.toEqual({
      total: '9', next: '6', operation: '+',
    });
  });
});

describe('if user presses . key before the operator', () => {
  test('but after a previous . input, calculate does nothing', () => {
    expect(Calculate({
      total: '9.', next: null, operation: null,
    }, '.')).toEqual({
      total: '9.', next: '0.', operation: null,
    });
  });
  test('but after a previous . input, calculate does not add a second .', () => {
    expect(Calculate({
      total: '9.', next: null, operation: null,
    }, '.')).not.toEqual({
      total: '9..', next: null, operation: null,
    });
  });
});

describe('if user presses . key after the operator', () => {
  test('and before first new numerical input, calculate creates a floating number 0. and assigns it to next', () => {
    expect(Calculate({
      total: '9', next: null, operation: '+',
    }, '.')).toEqual({
      total: '9', next: '0.', operation: '+',
    });
  });
  test('but after first new numerical input, calculate creates a floating number by appending . to current next', () => {
    expect(Calculate({
      total: '9', next: '6', operation: '+',
    }, '.')).toEqual({
      total: '9', next: '6.', operation: '+',
    });
  });
  test('but after a previous . input, calculate does nothing', () => {
    expect(Calculate({
      total: '9', next: '6.', operation: '+',
    }, '.')).toEqual({
      total: '9', next: '6.', operation: '+',
    });
  });
  test('but after a previous . input, calculate does not add a second .', () => {
    expect(Calculate({
      total: '9', next: '6.', operation: '+',
    }, '.')).not.toEqual({
      total: '9', next: '6..', operation: '+',
    });
  });
});

describe('if user presses = key', () => {
  test('before assigning an operation, calculate does nothing', () => {
    expect(Calculate({
      total: '9', next: null, operation: null,
    }, '=')).toEqual({
      total: '9', next: null, operation: null,
    });
  });
  test('after assigning an operation, calculate performs the operation and sets next / operation to null', () => {
    expect(Calculate({
      total: '9', next: '6', operation: '+',
    }, '=')).toEqual({
      total: '15', next: null, operation: null,
    });
  });
  test('after assigning an operation, calculate performs the operation and does not leave next or operation unmutated', () => {
    expect(Calculate({
      total: '9', next: '6', operation: '+',
    }, '=')).not.toEqual({
      total: 15, next: '6', operation: '+',
    });
  });
});