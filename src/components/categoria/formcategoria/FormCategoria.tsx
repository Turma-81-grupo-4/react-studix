import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categorias from "../../../models/Categorias";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {
  const navigate = useNavigate();

  const [lista, setLista] = useState<Categorias[]>([]);
  const [categoria, setCategoria] = useState<Categorias>({} as Categorias);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const tipo = usuario.funcao;

  const { id } = useParams<{ id: string }>();

  async function buscarCategorias() {
    try {
      await buscar("/categoria", setLista, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }
  useEffect(() => {
    buscarCategorias();
  }, [lista.length]);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (tipo !== "professor") {
      alert("Voce não tem permissão para navegar nesta area");
      navigate("/home");
    }
  }, [tipo]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categoria");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        alert("A Categoria foi atualizada!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          alert("Erro ao atualizar a categoria.");
        }
      }
    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        alert("A Categoria foi cadastrada com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          alert("Erro ao cadastrar a categoria.");
        }
      }
    }
    setIsLoading(false);
    retornar();
  }
  return (
    <div className="flex flex-col gap-8 bg-gray-200 text-center ">
      <div className="w-full h-[300] bg-blue-800">
        <h1>{id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}</h1>

        <form onSubmit={gerarNovaCategoria}>
          <div className="flex flex-col gap-2 text-black text-center">
            <label htmlFor="descricao" className="text-bold ">
              Descricao da Categoria
            </label>
            <input
              type="text"
              placeholder="Escreva aqui seua categoria"
              name="descricao"
              value={categoria.categoria}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <button
            type="submit"
            className=" bg-blue-300 border border-blue-500 hover:bg-blue-400 hover:border-blue-700 hover:text-white"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="2"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>
        </form>
      </div>
      {id === undefined ? (
        <div className="flex flex-col gap-2 text-start text-gray-500  hover:text-gray-700 ">
          {lista.map((lista) => (
            <label key={lista.id}>{lista.categoria};</label>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default FormCategoria;
