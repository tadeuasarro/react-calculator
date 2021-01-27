import PropTypes from 'prop-types';

const Button = ({
  name,
  onClick,
  color,
  wide,
}) => (
  <button className={`${color} ${wide}`} onClick={() => onClick(name)} type="button">
    { name }
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  color: 'button-gray',
  wide: 'button-shape',
};

export default Button;
