import styles from './CardPizza.module.css';
import { formatMoney } from '../../utils/format';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '27rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className={styles.layoutText}>
          <p><strong>Ingredientes:</strong></p>
          <span>🍕 {ingredients.join(', ')}</span>
          <br />
          <p><strong>Precio:</strong> {formatMoney(price)}</p>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-secondary">Ver más 👀</button>
          <button className="btn btn-dark">Añadir 🍕</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
