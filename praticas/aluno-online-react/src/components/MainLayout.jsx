import Sidebar from './Sidebar';
import MainHeader from './MainHeader';
import './MainLayout.css';

function MainLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main>
        <MainHeader />
        {children}
      </main>
    </>
  );
}

export default MainLayout;