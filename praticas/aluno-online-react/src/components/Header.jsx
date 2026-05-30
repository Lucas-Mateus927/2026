import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Aluno Online</h1>
      </div>
      <div className="user-info">
        <span>Olá, Aluno</span>
      </div>
    </header>
  );
}

export default Header;