import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => (
  <button onClick={() => onClick(name)} type="button">
    { name }
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
