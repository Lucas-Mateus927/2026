import './Sidebar.css';

function Sidebar() {
  return (
    <aside>
      <header>
        <h2>Aluno Online</h2>
        <img src="/learn.svg" alt="Icon Hat" />
      </header>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Notas</a></li>
        <li><a href="#">Faltas</a></li>
        <li><a href="#">Boletos</a></li>
        <li><a href="#">Requerimentos</a></li>
        <li><a href="#">Sair</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;