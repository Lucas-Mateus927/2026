import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './pages/Dashboard';
import Faltas from './pages/Faltas';
import Notas from './pages/Notas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import MainLayout from './components/MainLayout';
import { useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { autenticado } = useAuth();
  if (!autenticado) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/faltas"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Faltas />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/notas"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Notas />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/boletos"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Boletos />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/requerimentos"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Requerimentos />
              </MainLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
