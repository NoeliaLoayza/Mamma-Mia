import styles from './Navbar.module.css';
import { formatMoney } from '../../utils/format';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
      <div className="container">
        <span className="text-white me-2">Pizzeria Mamma Mia!</span>
        <button className="btn btn-outline-secondary me-2 text-light">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-secondary me-2 text-light">🔓 Profile</button>
            <button className="btn btn-outline-secondary me-2 text-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-secondary me-2 text-light">🔐 Login</button>
            <button className="btn btn-outline-secondary me-2 text-light">🔐 Register</button>
          </>
        )}
        <button className="btn btn-outline-secondary ms-auto text-light">
          🛒 Total: {formatMoney(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

