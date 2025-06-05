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

import Sidebar from "./components/sidebar/Sidebar.tsx";


import Sobre from "./pages/sobre/Sobre.tsx";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategotria.tsx";


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>

          {/* O container principal da aplicação, que será flex-col para empilhar os elementos */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            
            {/* Este div será o conteúdo principal, que crescerá para preencher o espaço disponível */}
            <div className="flex flex-grow"> {/* flex-grow aqui para que este container ocupe o máximo de altura */}
              <Sidebar />
              
              {/* O conteúdo das rotas, que também crescerá horizontalmente */}
              <div className="flex-grow bg-[#1A5566]">
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
            </div>
            <Footer /> {/* O Footer agora está fora do flex-grow do conteúdo principal */}

          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;