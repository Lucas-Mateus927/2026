import Layout from '../components/Layout/Layout';
import DataTable from '../components/DataTable';
import './Notas.css';

function Notas() {
  const columns = ['Disciplina', 'Nota 1', 'Nota 2', 'Média'];
  const rows = [
    ['Matemática', '8.0', '9.0', '8.5'],
    ['Português', '7.5', '8.5', '8.0'],
    ['História', '9.0', '8.0', '8.5'],
  ];

  return (
    <Layout pageTitle="Notas">
      <DataTable title="Boletim" columns={columns} rows={rows} />
    </Layout>
  );
}

export default Notas;
