import styles from './LoginPage.module.css';
import { useState } from 'react';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      setMessage('Todos los campos son obligatorios');
    } else if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres');
    } else {
      setMessage('¡Inicio de sesión exitoso!');
    }
  };

  return (
    <div className={`d-flex flex-column`}>
      <form className={`m-auto w-25`}  onSubmit={handleSubmit}>
       <h2 className={`my-3 text-secondary`}>Login</h2>
        <div className={`d-flex flex-column mb-3`}>
          <label htmlFor="email" className={`form-label`}>Email</label>
          <input className={`form-control`} name="email" type="email" placeholder="Email" onChange={handleChange} />
        </div>
        <div className={`d-flex flex-column mb-3`}>
          <label htmlFor="password" className={`form-label`}>Password</label>
          <input className={`form-control`} name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
        </div>
        <button className={`btn btn-primary`} type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;