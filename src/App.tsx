import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardCursos from "./components/cursos/cardcursos/CardCursos";
import ListaCursos from "./components/cursos/listacursos/ListaCursos";
import "./index.css";
import type Curso from "./models/Curso";
import DeletarCurso from "./components/cursos/deletarcurso/DeletarCurso";
import FormCurso from "./components/cursos/formcurso/FormCurso";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.tsx";
import Cadastro from "./pages/cadastro/Cadastro.tsx";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="bg-[#1A5566] min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/cursos" element={<ListaCursos />} />
              <Route path="/deletarcurso/:id" element={<DeletarCurso />} />
              <Route path="/cadastrarcurso" element={<FormCurso />} />
              <Route path="/editarcurso/:id" element={<FormCurso />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
