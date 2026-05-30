import Header from '../Header';
import Sidebar from '../Sidebar';
import './Layout.css';

function Layout({ pageTitle, children }) {
  const navItems = [
    { label: 'Dashboard', description: 'Visão geral do portal', variant: 'primary' },
    { label: 'Faltas', description: 'Acompanhe suas faltas' },
    { label: 'Notas', description: 'Veja suas médias' },
    { label: 'Boletos', description: 'Status de pagamentos' },
    { label: 'Requerimentos', description: 'Acompanhe pedidos' },
  ];

  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-body">
        <Sidebar items={navItems} />
        <main className="page-content">
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
