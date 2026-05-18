import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import './App.css';

function Login() {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome) return;
    login({ nome });
    navigate('/');
  }

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
