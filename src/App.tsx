import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardCursos from "./components/cursos/cardcursos/CardCursos";
import ListaCursos from "./components/cursos/listacursos/ListaCursos";
import "./index.css";
import type Curso from "./models/Curso";
import DeletarCurso from "./components/cursos/deletarcurso/DeletarCurso";
import FormCurso from "./components/cursos/formcurso/FormCurso";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="bg-[#1A5566] min-h-screen">
          <Routes>
            <Route path="/cursos" element={<ListaCursos />} />
            <Route path="/deletarcurso/:id" element={<DeletarCurso />} />
            <Route path="/cadastrarcurso" element={<FormCurso />} />
            <Route path="/editarcurso/:id" element={<FormCurso />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
