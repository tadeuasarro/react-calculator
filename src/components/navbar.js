import { Link } from 'react-router-dom';

const Navbar = () => (
  <div id="navbar">
    <h1>Math-magicians</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/app">App</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
