import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="sale-banner">
        🔥 Mega Electronics Sale - Up to 50% OFF!
      </div>

      <nav className="navbar">
        <h2>TechKart</h2>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;