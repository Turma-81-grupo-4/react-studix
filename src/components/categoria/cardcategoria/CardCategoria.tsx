import { Link } from "lucide-react";
import type Categorias from "../../../models/Categorias";

interface CardCategoriasProps {
  categoria: Categorias;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className=" bg-gray-100 rounded-2xl text-center border border-blue-400  flex flex-col items-center ">
      <h1> Categoria</h1>
      <p> {categoria.categoria}</p>
      <div className="flex gap-8 p-3">
        <Link to={`editarcategoria/${categoria.id}`}>
          <button className="bg-blue-300 text-black rounded-2xl px-4 py-2 hover:bg-blue-400">Editar</button>
        </Link>

        <Link to={`deletarcategoria/${categoria.id}`}>
          <button className=" bg-red-300 text-white rounded-2xl px-4 py-2  hover:bg-red-400">Deletar</button>
        </Link>
      </div>
    </div>
  );
}
export default CardCategorias;
