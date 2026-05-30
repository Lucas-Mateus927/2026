import Layout from '../components/Layout/Layout';
import InfoList from '../components/InfoList';
import './Boletos.css';

function Boletos() {
  const items = [
    { title: 'Boleto 1', subtitle: 'R$ 500,00 - Vencimento: 15/04/2026', action: 'Pagar' },
    { title: 'Boleto 2', subtitle: 'R$ 300,00 - Vencimento: 15/05/2026', action: 'Pagar' },
    { title: 'Boleto 3', subtitle: 'R$ 200,00 - Vencimento: 15/06/2026', action: 'Pagar' },
  ];

  return (
    <Layout pageTitle="Boletos">
      <InfoList title="Meus boletos" items={items} />
    </Layout>
  );
}

export default Boletos;
