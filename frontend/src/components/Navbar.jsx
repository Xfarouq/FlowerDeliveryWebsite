import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="nav">
            <div className="right">
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </div>
            <div className="left">
                <li>
                    <Link to="/">Sign in</Link>
                </li>
                <li>
                    <Link to="/">Cart</Link>
                </li>
            </div>
        </div>
     );
}
 
export default Navbar;