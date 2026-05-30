import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div>
        <span className="brand">Aluno Online</span>
        <p className="subtitle">Portal do estudante</p>
      </div>
      <div className="user">Olá, Aluno</div>
    </header>
  );
}

export default Header;
