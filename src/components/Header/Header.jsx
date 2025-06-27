import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`text-center bg-warning py-5 ${styles.headerBackground}`}>
      <h1>¡Pizzería Mamma Mía!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className={styles.hr}/>
    </header>
  );
};

export default Header;
