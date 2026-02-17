import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <span className="navbar-brand fw-bold">Routing</span>

      <div className="navbar-nav">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About Us
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/pricing">
          Pricing
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
