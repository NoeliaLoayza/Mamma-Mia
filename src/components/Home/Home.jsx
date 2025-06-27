import styles from './Home.module.css';
import Header from '../Header/Header';
import CardPizza from '../CardPizza/CardPizza';
import { pizzas } from '../../utils/pizzas'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
        { pizzas.map( pizza => (
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
