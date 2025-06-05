import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.tsx';
import Cadastro from './pages/cadastro/Cadastro.tsx';
import { AuthProvider } from './contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Perfil from './pages/perfil/Perfil.tsx';

function App() {
  return (
    <AuthProvider>
   <ToastContainer />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />   
        <Route path="/cadastro" element={<Cadastro />} />  
        <Route path="/login" element={<Login />} /> 
        <Route path="/perfil" element={<Perfil />} /> 
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
