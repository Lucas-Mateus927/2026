import { NavLink } from "react-router-dom";
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/faltas" className={({ isActive }) => (isActive ? 'active' : '')}>
              Faltas
            </NavLink>
          </li>
          <li>
            <NavLink to="/notas" className={({ isActive }) => (isActive ? 'active' : '')}>
              Notas
            </NavLink>
          </li>
          <li>
            <NavLink to="/boletos" className={({ isActive }) => (isActive ? 'active' : '')}>
              Boletos
            </NavLink>
          </li>
          <li>
            <NavLink to="/requerimentos" className={({ isActive }) => (isActive ? 'active' : '')}>
              Requerimentos
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;