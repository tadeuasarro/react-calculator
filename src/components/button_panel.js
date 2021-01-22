/* eslint-disable */
import PropTypes from 'prop-types';
import Button from './button';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];
const buttonsNew = [];
const ButtonPanel = ({ onClick }) => {
  for (let i = 0; i < buttons.length; i += 1) {
    buttonsNew.push(
      <div key={`group + ${i}`}>
        {
          buttons[i].map(name => (
            <Button onClick={() => onClick()} key={name} name={name} />))
        }
      </div>,
    );
  }
  return (
    buttonsNew
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ButtonPanel;
