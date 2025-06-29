import style from "./NotFound.module.css";
import notFount from "../../assets/images/NotFound.png";

const NotFound = () => {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center`}
    >
      <h1 className="my-4">404 - Página no encontrada</h1>
      <h5 className="mb-1">Lo sentimos, la página que buscas no existe.</h5>
      <img src={notFount} alt="Not Found" />
    </div>
  );
};

export default NotFound;
