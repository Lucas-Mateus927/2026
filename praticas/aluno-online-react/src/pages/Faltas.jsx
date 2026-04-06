import MainLayout from '../components/MainLayout';
import './Faltas.css';

function Faltas() {
  return (
    <MainLayout>
      <section>
        <h2>Listagem de Faltas</h2>
        <table>
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Faltas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BI e Data Warehousing</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Construção de Frontend</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Governança de TI</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </section>
    </MainLayout>
  );
}

export default Faltas;