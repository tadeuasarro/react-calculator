import Button from './button';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];
const handleClick = buttonName => {
  console.log(buttonName);
};
const buttonsNew = [];
const ButtonPanel = () => {
  for (let i = 0; i < buttons.length; i += 1) {
    buttonsNew.push(
      <div key={`group + ${i}`}>
        {
          buttons[i].map(name => (
            <Button onClick={() => handleClick(name)} key={name} name={name} />))
        }
      </div>,
    );
  }
  return (
    buttonsNew
  );
};

export default ButtonPanel;
