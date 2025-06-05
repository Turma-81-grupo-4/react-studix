import { useLocation } from "react-router-dom"
import ModalCurso from "../cursos/modalcurso/ModalCurso";
>>>>>>> 1bc0f41271780e5791d1215890d74557dcf95793


function Sidebar() {

  const location = useLocation();
  const isHome = location.pathname === '/home';
  const isLogin = location.pathname === '/login';
  const isCadastro = location.pathname === '/cadastro';

  const podeExibirSidebar = () => {
    return !isLogin && !isCadastro && !isHome;
};

  // const funcao = usuario.funcao;

  return (

    <>
      {podeExibirSidebar() && (
        <div className=" flex h-screen flex-col justify-between border-x-4 border-[#60B657] bg-[#1A5566] ">
      <div className="px-4 py-6">
        <span className="grid h-15 w-32 place-content-center">
          <img src={logo} alt="Logo Studix" />
        </span>
    
        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-white hover:text-[#60B657] font-semibold cursor-pointer"
            >
              Meus cursos
            </a>
          </li>
    
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex items-center justify-between rounded-lg px-4 py-2 text-white hover:text-[#60B657] font-semibold cursor-pointer"
              >
                <span className="text-sm"> Categorias </span>
    
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
    
              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:text-[#60B657] cursor-pointer"
                  >
                    Banned Users
                  </a>
                </li>
    
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:text-[#60B657] cursor-pointer"
                  >
                    Calendar
                  </a>
                </li>
              </ul>
            </details>
          </li>
    
<<<<<<< HEAD
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-white hover:text-[#60B657] font-semibold cursor-pointer"
            >
              Cursos
            </a>
=======
          <li> 
              <ModalCurso />  
>>>>>>> 1bc0f41271780e5791d1215890d74557dcf95793
          </li>
    
          <li>
            <a
              href="/home"
              className="block rounded-lg px-4 py-2 text-sm text-white hover:text-[#60B657] font-semibold cursor-pointer"
            >
              Sair
            </a>
          </li>
    
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:text-[#60B657] font-semibold cursor-pointer"
              >
                <span className="text-sm"> Account </span>
    
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
    
              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:text-[#60B657] cursor-pointer"
                  >
                    Details
                  </a>
                </li>
    
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-white hover:text-[#60B657] font-medium cursor-pointer"
                  >
                    Security
                  </a>
                </li>
    
                <li>
                  <a
                    href="/login"
                    className="w-full rounded-lg px-4 py-2 [text-align:_inherit] text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    
      <div className="sticky inset-x-0 bottom-0">
        <a href="#" className="flex items-center gap-2 bg-[#1A5566] p-4 hover:bg-[#068DBD]">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="size-10 rounded-full object-cover"
          />
    
          <div>
            <p className="text-xs">
              <strong className="block font-medium">Usuario nome</strong>
    
              <span> usuario emaill </span>
            </p>
          </div>
        </a>
      </div>
      </div>
      )}
    </>
  );
}

export default Sidebar