import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Categorias from "../../../models/Categorias";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardCategorias from "../cardcategoria/CardCategoria";

function ListaCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categorias[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token; // Pega o token do contexto

  async function buscarCategorias() {
    // Só tenta buscar categorias se houver um token
    if (token === "") {
      // Se não há token, simplesmente não faz a requisição.
      // Você pode opcionalmente definir categorias para um array vazio
      // ou deixar uma mensagem para o usuário.
      setCategoria([]); // Garante que a lista esteja vazia se não houver token
      return; // Sai da função
    }

    try {
      await buscar("/categoria", setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      // Se o token for inválido (401) ou não autorizado (403), faz o logout
      if (error.toString().includes("401") || error.toString().includes("403")) {
        alert("Sua sessão expirou ou o token é inválido. Faça login novamente.");
        handleLogout(); // Isso limpará o token e redirecionará se configurado no AuthContext
      } else {
        console.error("Erro ao buscar categorias:", error);
        // Opcional: mostrar uma mensagem de erro genérica na UI
      }
    }
  }

  useEffect(() => {

    // Este useEffect agora apenas DISPARA a busca quando o token muda.
    // Ele não mais força o redirecionamento se o token estiver vazio.

    if (token === "") {
      alert("Voce precisa estar logado");
      navigate("/home");
    }
  }, [token]);

  useEffect(() => {

    buscarCategorias();
  }, [token]); // Agora, `buscarCategorias` é chamada quando o token muda

  // O DNA spinner será exibido apenas se o token existir (indicando que deveria haver categorias)
  // E a lista de categorias ainda estiver vazia.
  return (
    <>
      {token !== "" && categoria.length === 0 ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Renderiza os CardCategorias apenas se houver categorias */}
              {categoria.map((categoria) => (
                <CardCategorias key={categoria.id} categoria={categoria} />
              ))}
              {/* Opcional: Mensagem se não houver categorias e o usuário não estiver logado */}
              {token === "" && categoria.length === 0 && (
                <h3 className="text-center text-black col-span-full text-4xl font-bold">
                  Faça login para ver as novidades!
                </h3>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ListaCategoria;