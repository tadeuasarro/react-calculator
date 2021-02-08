/* eslint-disable */
import React, { useState } from 'react';
import Display from '../display/display';
import ButtonPanel from '../button/button_panel';
import Calculate from '../../logic/calculate';
import Navbar from '../navbar/navbar';

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setState(state => Calculate(state, buttonName));
  }

  return (
    <main>
      <Navbar />
      <div id="outer-container">
        <div id="container">
          <Display result={state.next ? state.next : state.total} />
          <ButtonPanel onClick={handleClick} />
        </div>
      </div>
    </main>
  );
}

export default App;