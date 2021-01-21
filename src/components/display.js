import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div>
    <span>Result: </span>
    { result }
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
