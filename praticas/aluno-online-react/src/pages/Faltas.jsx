import Layout from '../components/Layout/Layout';
import DataTable from '../components/DataTable';
import './Faltas.css';

function Faltas() {
  const columns = ['Disciplina', 'Faltas', 'Limite'];
  const rows = [
    ['Matemática', '3', '10'],
    ['Português', '1', '10'],
    ['História', '2', '10'],
  ];

  return (
    <Layout pageTitle="Faltas">
      <DataTable title="Controle de Faltas" columns={columns} rows={rows} />
    </Layout>
  );
}

export default Faltas;
