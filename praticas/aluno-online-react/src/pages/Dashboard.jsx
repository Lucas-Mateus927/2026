import Layout from '../components/Layout/Layout';
import SectionCard from '../components/SectionCard';
import './Dashboard.css';

function Dashboard() {
  return (
    <Layout pageTitle="Dashboard">
      <div className="dashboard-grid">
        <SectionCard title="Mural de Avisos">
          <p>Inscrição para o projeto de extensão</p>
          <p>Eleição para representante da turma</p>
        </SectionCard>
        <SectionCard title="Calendário Acadêmico">
          <p>23/03 - Início do período letivo 2026-1</p>
          <p>25/04 - Prazo final para aplicação da P1</p>
          <p>23/06 - Prazo final para aplicação da P2</p>
          <p>23/07 - Fim do período letivo 2026-1</p>
        </SectionCard>
        <SectionCard title="Minhas Disciplinas">
          <p>BI e Data Warehousing</p>
          <p>Construção de Frontend</p>
          <p>Governança de TI</p>
        </SectionCard>
      </div>
    </Layout>
  );
}

export default Dashboard;
