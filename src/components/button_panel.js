import PropTypes from 'prop-types';
import Button from './button';

const ButtonPanel = ({ onClick }) => (
  <div>
    <div id="operations">
      <Button name="AC" onClick={onClick} />
      <Button name="+/-" onClick={onClick} />
      <Button name="%" onClick={onClick} />
      <Button name="÷" onClick={onClick} />
    </div>
    <div className="side_operations">
      <Button name="7" onClick={onClick} />
      <Button name="8" onClick={onClick} />
      <Button name="9" onClick={onClick} />
      <Button name="x" onClick={onClick} />
    </div>
    <div className="side_operations">
      <Button name="4" onClick={onClick} />
      <Button name="5" onClick={onClick} />
      <Button name="6" onClick={onClick} />
      <Button name="-" onClick={onClick} />
    </div>
    <div className="side_operations">
      <Button name="1" onClick={onClick} />
      <Button name="2" onClick={onClick} />
      <Button name="3" onClick={onClick} />
      <Button name="+" onClick={onClick} />
    </div>
    <div className="last_row">
      <Button name="0" onClick={onClick} />
      <Button name="." onClick={onClick} />
      <Button name="=" onClick={onClick} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
