import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import CardPizza from "../../components/CardPizza/CardPizza";
// import { pizzas } from '../../utils/pizzas'
import { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div>
      <Header />
      <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
        {pizzas?.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
