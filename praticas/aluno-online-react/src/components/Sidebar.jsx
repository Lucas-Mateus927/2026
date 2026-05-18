import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
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
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/notas">Notas</Link></li>
        <li><Link to="/faltas">Faltas</Link></li>
        <li><Link to="/boletos">Boletos</Link></li>
        <li><Link to="/requerimentos">Requerimentos</Link></li>
        <li><a href="#" onClick={handleLogout}>Sair</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;