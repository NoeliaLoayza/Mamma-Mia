import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center bg-dark text-light py-3 mt-5">
      © {currentYear} - Pizzería Mamma Mía! - Todos los derechos reservados
    </footer>
  );
};

export default Footer;
