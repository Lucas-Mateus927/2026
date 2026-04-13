import MainLayout from '../components/MainLayout';
import './Requerimentos.css';

function Requerimentos() {
  return (
    <MainLayout>
      <section>
        <h2>Listagem de Requerimentos</h2>
        <ul>
          <li>
            <div>Requerimento 1 - Solicitação de segunda chamada - Status: Em análise</div>
          </li>
          <li>
            <div>Requerimento 2 - Ajuste de nota - Status: Aprovado</div>
          </li>
          <li>
            <div>Requerimento 3 - Trancamento de disciplina - Status: Pendente</div>
          </li>
        </ul>
      </section>
    </MainLayout>
  );
}

export default Requerimentos;