import PropTypes from 'prop-types';
import Button from './button';

const ButtonPanel = ({ onClick }) => (
  <div>
    <div id="operations" className="row">
      <Button name="AC" onClick={onClick} />
      <Button name="+/-" onClick={onClick} />
      <Button name="%" onClick={onClick} />
      <Button color="button-orange" name="÷" onClick={onClick} />
    </div>
    <div className="row">
      <Button name="7" onClick={onClick} />
      <Button name="8" onClick={onClick} />
      <Button name="9" onClick={onClick} />
      <Button color="button-orange" name="x" onClick={onClick} />
    </div>
    <div className="row">
      <Button name="4" onClick={onClick} />
      <Button name="5" onClick={onClick} />
      <Button name="6" onClick={onClick} />
      <Button color="button-orange" name="-" onClick={onClick} />
    </div>
    <div className="row">
      <Button name="1" onClick={onClick} />
      <Button name="2" onClick={onClick} />
      <Button name="3" onClick={onClick} />
      <Button color="button-orange" name="+" onClick={onClick} />
    </div>
    <div className="row">
      <Button wide="button-zero" name="0" onClick={onClick} />
      <Button name="." onClick={onClick} />
      <Button color="button-orange" name="=" onClick={onClick} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
