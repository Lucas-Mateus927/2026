import MainLayout from '../components/MainLayout';
import './Notas.css';

function Notas() {
  return (
    <MainLayout>
      <section>
        <h2>Listagem de Notas</h2>
        <table>
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>P1</th>
              <th>P2</th>
              <th>Média</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BI e Data Warehousing</td>
              <td>8.5</td>
              <td>9.0</td>
              <td>8.75</td>
            </tr>
            <tr>
              <td>Construção de Frontend</td>
              <td>7.0</td>
              <td>8.5</td>
              <td>7.75</td>
            </tr>
            <tr>
              <td>Governança de TI</td>
              <td>9.5</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>
    </MainLayout>
  );
}

export default Notas;