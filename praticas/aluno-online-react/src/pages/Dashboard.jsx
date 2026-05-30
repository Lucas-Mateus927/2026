import './Dashboard.css';

function Dashboard() {
  return (
    <section>
      <h2>Bem-vindo ao portal do aluno</h2>
        <article>
          <h3>Mural de Avisos</h3>
          <p>Inscrição para o projeto de extensão</p>
          <p>Eleição para representante da turma</p>
        </article>
        <article>
          <h3>Calendário Acadêmico</h3>
          <p>23/03 - Início do período letivo 2026-1</p>
          <p>25/04 - Prazo final para aplicação da P1</p>
          <p>23/06 - Prazo final para aplicação da P2</p>
          <p>23/07 - Fim do período letivo 2026-1</p>
        </article>
        <article>
          <h3>Minhas Disciplinas</h3>
          <p>BI e Data Warehousing</p>
          <p>Construção de Frontend</p>
          <p>Governança de TI</p>
        </article>
      </section>
  );
}

export default Dashboard;