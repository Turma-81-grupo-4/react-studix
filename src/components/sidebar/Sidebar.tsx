import { useLocation, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { setUsuario } = useContext(AuthContext);

  const isHome = location.pathname === '/';
  const isLogin = location.pathname === '/login';
  const isCadastro = location.pathname === '/cadastro';

  const podeExibirSidebar = () => {
    return !isLogin && !isCadastro && !isHome;
  };

  const logout = () => {
    setUsuario({ token: "", nome: "", id: 0, usuario: "", senha: "", funcao: "", data: "" });
    navigate("/login");
  };

  return (
    <>
      {podeExibirSidebar() && (
        <div className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white">
          <div className="px-4 py-6">
            <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              Logo
            </span>

            <ul className="mt-6 space-y-1">
              <li>
                <Link
                  to="/home"
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Home
                </Link>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium"> Teams </span>
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg className="size-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Banned Users
                      </a>
                    </li>
                    <li>
                      <a className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Calendar
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link
                  to="/cursos"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Cursos
                </Link>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium"> Account </span>
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg className="size-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <Link
                        to="/perfil"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Perfil
                      </Link>
                    </li>

                    <li>
                      <a className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        Security
                      </a>
                    </li>

                    <li>
                      <button
                        onClick={logout}
                        className="w-full text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=1770&q=80"
                className="size-10 rounded-full object-cover"
              />
              <div>
                <p className="text-xs">
                  <strong className="block font-medium">Eric Frusciante</strong>
                  <span> eric@frusciante.com </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
