import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("signin"); // ✅ added
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const handleSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="navs">
      {/* Desktop Nav */}
      <div className="nav">
        <ul className="right">
          <li className="a">
            <Link to="/product">Products</Link>
          </li>
          <li className="b">
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul className="left">
          {!isAuthenticated ? (
            <li className="c">
              <button
                onClick={() => {
                  setAuthMode("signin");
                  setShowAuth(true);
                }}
                className="auth-btn"
              >
                Sign in
              </button>
            </li>
          ) : (
            <li className="c">
              <button onClick={handleLogout} className="auth-btn">
                Logout
              </button>
            </li>
          )}
          <li className="d">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        {showAuth && (
          <AuthModal
            onClose={() => setShowAuth(false)}
            onSuccess={handleSuccess}
            initialMode={authMode} // ✅ added
          />
        )}
      </div>

      {/* Mobile Nav */}
      <div className="nav-mobile">
        <img
          src="./images/Menu.svg"
          alt="Hamburger"
          className="ham"
          onClick={() => setMobileMenuOpen(true)}
        />
        <Link to="/cart">
          <img src="./images/nav.svg" alt="Cart Icon" />
        </Link>
      </div>

      {/* Slide-Out Menu */}
      <div className={`mobile-slideout ${mobileMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>
          ×
        </button>
        <ul>
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/category" onClick={() => setMobileMenuOpen(false)}>
              Product
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setAuthMode("signin");
                setShowAuth(true);
                setMobileMenuOpen(false);
              }}
            >
              Sign in
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setAuthMode("signup");
                setShowAuth(true);
                setMobileMenuOpen(false);
              }}
            >
              Sign up
            </button>
          </li>
          <li>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
