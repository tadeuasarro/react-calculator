/* eslint-disable */
import React from 'react';
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    this.setState(state => Calculate(state, buttonName))
  }

  render() {
    return (
      <div>
        <Display result={this.state.total} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;