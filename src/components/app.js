/* eslint-disable */
import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setState(state => Calculate(state, buttonName));
  }

  return (
    <div>
      <Display result={state.next ? state.next : state.total} />
      <ButtonPanel onClick={handleClick} />
    </div>
  );
}

export default App;