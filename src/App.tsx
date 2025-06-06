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
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import { ToastContainer } from "react-toastify";
import Perfil from "./pages/perfil/Perfil.tsx";
import Sobre from "./pages/sobre/Sobre.tsx";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategotria.tsx";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria.tsx";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria.tsx";
import { AtualizaCursosProvider } from "./contexts/AtualizaCursosContext.tsx";

function App() {
  return (
    <>
      <AtualizaCursosProvider>
        <AuthProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex flex-grow">
                <Sidebar />
                <div className="flex-grow bg-white">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/cursos" element={<ListaCursos />} />
                    <Route
                      path="/deletarcurso/:id"
                      element={<DeletarCurso />}
                    />
                    <Route path="/cadastrarcurso" element={<FormCurso />} />
                    <Route path="/editarcurso/:id" element={<FormCurso />} />
                    <Route path="/categoria" element={<ListaCategoria />} />
                    <Route
                      path="/deletarcategoria/:id"
                      element={<DeletarCategoria />}
                    />
                    <Route
                      path="/editarcategoria/:id"
                      element={<FormCategoria />}
                    />
                  </Routes>
                </div>

              </div>
              <Footer />
            </div>

          </BrowserRouter>
        </AuthProvider>
      </AtualizaCursosProvider>

    </>
  );
}
export default App;
