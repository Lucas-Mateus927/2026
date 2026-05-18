import Sidebar from './Sidebar';
import MainHeader from './MainHeader';
import './MainLayout.css';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <MainHeader />
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;