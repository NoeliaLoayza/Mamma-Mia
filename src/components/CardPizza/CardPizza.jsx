import styles from "./CardPizza.module.css";
import { formatMoney } from "../../utils/format";

const CardPizza = ({ key, name, price, ingredients, img, desc = "" }) => {
  return (
    <div className="card" key={key} style={{ width: "27rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className={styles.layoutText}>
          <p>
            <strong>Ingredientes:</strong>
          </p>
          <ul className="d-flex gap-2">
            🍕
            {ingredients?.map((item, index) => (
              <li className="list-group-item" key={index}>
                {" "}
                {item}
              </li>
            ))}
          </ul>
          <br />
          {desc && (
            <div>
              <p className="text-start lh-1 fw-bold">{desc}</p>
            </div>
          )}
          <p>
            <strong>Precio:</strong> {formatMoney(price)}
          </p>
        </div>
        <div className="d-flex justify-content-between">
          {!desc && (
            <button className="btn btn-outline-secondary">Ver más 👀</button>
          )}
          <button className="btn btn-dark">Añadir 🍕</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
