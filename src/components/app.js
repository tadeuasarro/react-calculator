import Display from './display';
import ButtonPanel from './button_panel';
import Calculate from '../logic/calculate';

Calculate();

const App = () => (
  <div>
    <Display result="0" />
    <ButtonPanel />
  </div>
);

export default App;
