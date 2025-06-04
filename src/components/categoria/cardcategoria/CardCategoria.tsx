import { Link } from "lucide-react";
import type Categorias from "../../../models/Categorias";

interface CardCategoriasProps{
    categoria: Categorias;
}

function CardCategorias({categoria}: CardCategoriasProps){
    return(
        <div className=" bg-gray-100 rounded-2xl text-center ">
            <header> Categoria</header>
            <p> {categoria.descricao}</p>
            <div>
                <Link to={`editarcategoria/${categoria.id}`}>
                    <button>Editar</button>
                </Link>

                <Link to={`deletarcategoria/${categoria.id}`}>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}
export default CardCategorias;