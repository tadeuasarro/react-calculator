/* eslint-disable */
import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

const handleClick = () => {
  console.log('buttonName');
};

const App = () => {
  return (
    <div>
      <Display result="0" />
      <ButtonPanel onClick={() => handleClick()} />
    </div>
  );

}

export default App;
