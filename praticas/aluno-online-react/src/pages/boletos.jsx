import MainLayout from '../components/MainLayout';
import './Boletos.css';

function Boletos() {
  return (
    <MainLayout>
      <section>
        <h2>Listagem de Boletos</h2>
        <ul>
          <li>
            <div>Boleto 1 - R$ 500,00 - Vencimento: 15/04/2026</div>
            <button>Pagar</button>
          </li>
          <li>
            <div>Boleto 2 - R$ 300,00 - Vencimento: 15/05/2026</div>
            <button>Pagar</button>
          </li>
          <li>
            <div>Boleto 3 - R$ 200,00 - Vencimento: 15/06/2026</div>
            <button>Pagar</button>
          </li>
        </ul>
      </section>
    </MainLayout>
  );
}

export default Boletos;