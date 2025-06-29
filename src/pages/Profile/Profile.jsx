import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={`d-flex justify-content-center align-items-center`}>
      <div className="text-center">
        <h2 className="mb-4">Perfil de Usuario</h2>
        <p className="mb-2">Nombre: Juan Perez</p>
        <p className="mb-2">Email: juan@gmail.com </p>
        <button className="btn btn-primary mt-3">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Profile;
