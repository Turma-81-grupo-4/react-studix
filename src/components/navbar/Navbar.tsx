import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo/logo studix SF.png";
import SearchInput from "../searchinput/SearchInput";

function Navbar() {
  // const token = usuario.token;

  return (
    // useEffect(() => {
    //     if (token !== '') {
    <header className="bg-[#1A5566] shadow-md h-24 border-b-4 border-[#60B657] ">
      <nav className="grid grid-cols-[auto_1fr_auto] gap-x-6 max-w-7xl mx-auto px-6 items-center">
        <Link
          to="/"
          className="flex-1 flex justify-start items-center cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo Studix"
            className="h-20 w-20 object-cover"
          />
        </Link>

        <div className="flex gap-8 flex-1 justify-center items-center">
          <SearchInput />
        </div>

        <div className="flex gap-4 items-center">
          <Link
            to="/login"
            className="text-white hover:text-[#60B657] font-semibold cursor-pointer"
          >
            Login
          </Link>
          <Link
            to="/cadastro"
            className="text-white hover:text-[#60B657] font-semibold cursor-pointer"
          >
            Cadastre-se
          </Link>
          <Link
            to="/categoria"
            className="text-white hover:text-[#60B657] font-semibold cursor-pointer"
          >
            Categorias
          </Link>
        </div>
      </nav>
    </header>
    // }, [token]);
  );
}

export default Navbar;
