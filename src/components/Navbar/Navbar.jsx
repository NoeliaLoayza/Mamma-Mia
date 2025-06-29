import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { formatMoney } from "../../utils/format";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
      <div className="container">
        <span className="text-white me-2">Pizzeria Mamma Mia!</span>
        <Link to="/" className="btn btn-outline-secondary me-2 text-light">
          🍕 Home
        </Link>
        {token ? (
          <>
            <Link
              to="/profile"
              className="btn btn-outline-secondary me-2 text-light"
            >
              🔓 Profile
            </Link>
            <button className="btn btn-outline-secondary me-2 text-light">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline-secondary me-2 text-light"
            >
              🔐 Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline-secondary me-2 text-light"
            >
              🔐 Register
            </Link>
          </>
        )}
        <Link
          to="/cart"
          className="btn btn-outline-secondary ms-auto text-light"
        >
          🛒 Total: {formatMoney(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
