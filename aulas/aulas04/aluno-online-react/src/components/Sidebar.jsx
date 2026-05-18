import './Sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate('/login');
  }

  return (
    <aside>
      <header>
        <h2>Aluno Online</h2>
        <img src="/learn.svg" alt="Icon Hat" />
      </header>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)} end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/notas" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Notas
          </NavLink>
        </li>
        <li>
          <NavLink to="/faltas" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Faltas
          </NavLink>
        </li>
        <li>
          <NavLink to="/boletos" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Boletos
          </NavLink>
        </li>
        <li>
          <NavLink to="/requerimentos" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Requerimentos
          </NavLink>
        </li>
        <li><a href="#" onClick={handleLogout}>Sair</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;