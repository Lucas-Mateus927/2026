import './Notas.css';

function Notas() {
  return (
    <main className="main">
      <h2>Notas</h2>
          <table className="notas-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Média</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matemática</td>
                <td>8.0</td>
                <td>9.0</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td>Português</td>
                <td>7.5</td>
                <td>8.5</td>
                <td>8.0</td>
              </tr>
              <tr>
                <td>História</td>
                <td>9.0</td>
                <td>8.0</td>
                <td>8.5</td>
              </tr>
            </tbody>
          </table>
        </main>
  );
}

export default Notas;