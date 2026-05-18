import './MainHeader.css';
import { useAuth } from '../contexts/AuthContext';

function MainHeader() {
  const { usuario } = useAuth();
  return (
    <header>
      <h1>Olá, {usuario ? usuario.nome : 'Aluno'}!</h1>
      <img src="/avatar.svg" alt="Icon User" />
    </header>
  );
}

export default MainHeader;