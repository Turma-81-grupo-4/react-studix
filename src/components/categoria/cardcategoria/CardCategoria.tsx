import { Link } from "react-router-dom";
import type Categorias from "../../../models/Categorias";

interface CardCategoriasProps {
  categoria: Categorias;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="bg-gray-200 rounded-2xl text-center border border-blue-400  flex flex-col items-center p-4">
      <h1 className="text-xl">Categoria</h1>
      <p className="text-lg"> {categoria.categoria}</p>
      <div className="flex gap-8 p-3 h-20">
        <Link
          to={`editarcategoria/${categoria.id}`}
          className="bg-[#068dbd] text-white rounded-2xl px-4 py-4 hover:bg-[#1a5566]"
        >
          Editar
        </Link>

        <Link
          to={`deletarcategoria/${categoria.id}`}
          className="bg-red-400 text-white rounded-2xl px-4 py-4 hover:bg-red-500"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}
export default CardCategorias;
