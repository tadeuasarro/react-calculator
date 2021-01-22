/* eslint-disable */
import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

const handleClick = buttonName => {
  console.log(buttonName);
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    }
  }


  render(){
    return (
      <div>
        <Display result="0" />
        <ButtonPanel onClick={() => handleClick()} />
      </div>
    );
  }
}

export default App;
