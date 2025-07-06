import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="right">
        <li className="a">
          <Link to="/">Shop</Link>
        </li>
        <li className="b">
          <Link to="/">Contact</Link>
        </li>
      </ul>

      <ul className="left">
        <li className="c">
          <Link to="/">Sign in</Link>
        </li>
        <li className="d">
          <Link to="/">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
