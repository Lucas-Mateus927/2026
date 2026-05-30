import './Faltas.css';

function Faltas() {
  return (
    <main className="main">
      <h2>Faltas</h2>
          <table className="faltas-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Faltas</th>
                <th>Limite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matemática</td>
                <td>3</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Português</td>
                <td>1</td>
                <td>10</td>
              </tr>
              <tr>
                <td>História</td>
                <td>2</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </main>
  );
}

export default Faltas;