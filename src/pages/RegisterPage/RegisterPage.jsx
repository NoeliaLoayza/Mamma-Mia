import styles from './RegisterPage.module.css';
import { useState } from 'react';

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = form;

    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios');
    } else if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres');
    } else if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
    } else {
      setMessage('¡Registro exitoso!');
    }
  };

  return (
    <div className={`d-flex flex-column`}>
      <form className={`m-auto w-25`} onSubmit={handleSubmit}>
        <h2 className={`my-3 text-secondary`}>Register</h2>
        <div className={`d-flex flex-column mb-3`}>
          <label className={`form-label`} htmlFor="email">Email</label>
          <input className={`form-control`} name="email" type="email" placeholder="Email" onChange={handleChange} />
        </div>
        <div className={`d-flex flex-column mb-3`}>
          <label className={`form-label`} htmlFor="password">Password</label>
          <input className={`form-control`} name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
        </div>
        <div className={`d-flex flex-column mb-3`}>
          <label className={`form-label`} htmlFor="confirmPassword">Confirm Password</label>
          <input className={`form-control`} name="confirmPassword" type="password" placeholder="Confirmar contraseña" onChange={handleChange} />
        </div>
        <button className={`btn btn-primary`} type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;