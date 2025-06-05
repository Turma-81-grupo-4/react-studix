import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categorias from "../../../models/Categorias";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categorias>({} as Categorias);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const funcao = usuario.funcao;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Voce precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (funcao !== "professor") {
      alert("Voce não tem permissão para navegar nesta area");
      navigate("/home");
    }
  }, [funcao]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categoria/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Categoria apagado com sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o tema.");
      }
    }
    setIsLoading(false);
    retornar();
  }
  function retornar() {
    navigate("/categoria");
  }

  return (
    <div>
      <header>Deletar Categoria</header>
      <p>Tem certeza que deseja apagar a categoria </p>
      <div>
        <header>Categoria</header>
        <p>{categoria.categoria}</p>
        <div>
          <button>Não</button>
          <button
            className="w-full flex items-center justify-center"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <RotatingLines strokeColor="white" strokeWidth="5" />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarCategoria;
