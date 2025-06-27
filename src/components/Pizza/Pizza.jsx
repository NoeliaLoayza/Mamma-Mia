import styles from "./Pizza.module.css";
import { useEffect, useState } from "react";
import CardPizza from "../CardPizza/CardPizza";

const Pizza = () => {
  const [pizza, setPizza] = useState({});

  const getPizza = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      console.log(data);

      setPizza(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <div className="mt-5 d-flex justify-content-center">
      <CardPizza
        key={pizza.id}
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
        desc={pizza.desc}
      />
    </div>
  );
};

export default Pizza;
