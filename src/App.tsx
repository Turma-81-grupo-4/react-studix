import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.tsx';
import Cadastro from './pages/cadastro/Cadastro.tsx';
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />   
        <Route path="/cadastro" element={<Cadastro />} />  
        <Route path="/login" element={<Login />} />    
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
