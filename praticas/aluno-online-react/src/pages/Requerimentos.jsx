import Layout from '../components/Layout/Layout';
import DataTable from '../components/DataTable';
import './Requerimentos.css';

function Requerimentos() {
  const columns = ['Tipo', 'Data', 'Status'];
  const rows = [
    ['Segunda Chamada', '05/01/2024', 'Aprovado'],
    ['Trancamento', '20/02/2024', 'Em Análise'],
    ['Declaração', '10/03/2024', 'Concluído'],
  ];

  return (
    <Layout pageTitle="Requerimentos">
      <DataTable title="Situação dos requerimentos" columns={columns} rows={rows} />
    </Layout>
  );
}

export default Requerimentos;
