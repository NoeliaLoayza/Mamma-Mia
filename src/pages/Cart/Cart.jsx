import styles from './Cart.module.css';
import { formatMoney, capitalize } from '../../utils/format';
import { pizzaCart } from '../../utils/pizzas';

import { useState } from 'react';

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const aumentar = (pizza) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === pizza.id) {
                const nuevoCount = item.count + 1;
                const precioUnitario = item.price / item.count;
                return {
                    ...item,
                    count: nuevoCount,
                    price: precioUnitario * nuevoCount,
                };
                }
                return item;
            })
        );
    };

  const disminuir = (pizza) => {
    setCart((prevCart) =>
        prevCart
        .map((item) => {
            if (item.id === pizza.id) {
            const nuevoCount = item.count - 1;
            const precioUnitario = item.price / item.count;

            if (nuevoCount === 0) return null;

            return {
                ...item,
                count: nuevoCount,
                price: precioUnitario * nuevoCount,
            };
            }
            return item;
        })
        .filter(Boolean)
        );
    };

    const result = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="d-flex justify-content-center">
        <div>
          <h2 className="mt-5">Detalles del pedido:</h2>
          <div className="d-flex flex-column gap-3">
            {cart.map((pizza) => (
              <div key={pizza.id} className="d-flex align-items-center justify-content-between gap-5">
                <div className="d-flex align-items-center gap-2">
                    <img className={`img-fluid rounded ${styles.imgSize}`} src={pizza.img} alt={pizza.name} />
                    <span>
                        <strong>{capitalize(pizza.name)}</strong>
                    </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                    <span>
                        <strong>{formatMoney(pizza.price)}</strong>
                    </span>

                    <button
                    className="btn btn-outline-danger"
                      onClick={() => disminuir(pizza)}
                    >
                    -
                    </button>
                    <span className=""><strong>{pizza.count}</strong></span>
                    <button
                    className="btn btn-outline-primary"
                      onClick={() => aumentar(pizza)}
                    >
                    +
                    </button>
                </div>
              </div>
            ))}
          </div>
          <h3 className="my-4">
             Total: {formatMoney(result)}
          </h3>
          <button className="btn btn-dark">Pagar</button>
        </div>
    </div>
  );
};

export default Cart;
