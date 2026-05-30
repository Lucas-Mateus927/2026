import './Requerimentos.css';

function Requerimentos() {
  return (
    <main className="main">
      <h2>Requerimentos</h2>
          <table className="requerimentos-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Data</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Segunda Chamada</td>
                <td>05/01/2024</td>
                <td>Aprovado</td>
              </tr>
              <tr>
                <td>Trancamento</td>
                <td>20/02/2024</td>
                <td>Em Análise</td>
              </tr>
              <tr>
                <td>Declaração</td>
                <td>10/03/2024</td>
                <td>Concluído</td>
              </tr>
            </tbody>
          </table>
        </main>
  );
}

export default Requerimentos;