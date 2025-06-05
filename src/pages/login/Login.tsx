import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { type ChangeEvent, useContext, useEffect, useState } from 'react';
import type { UsuarioLogin } from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import type { FormEvent } from 'react'


function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario && usuario.token && usuario.token !== '') {
      navigate('/cursos');
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a40] to-[#1A5566] p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden">

        <div className="md:w-1/2 w-full h-auto">
          <img
            src="src/assets/login.png"
            alt="Ilustração de boas-vindas"
            className="w-full h-full  object-center"
          />
        </div>


        <div className="md:w-1/2 p-10 bg-[#1e293b] text-[#f8fafc] flex flex-col justify-center">
          <form
            onSubmit={login}
            className="bg-[#1e293b] text-[#f8fafc] p-8 rounded-xl shadow-lg w-full max-w-md font-semibold space-y-6"
          >
            <h2 className="text-4xl font-extrabold tracking-widest text-center mb-6 drop-shadow-md">
              Entrar
            </h2>

            <div className="flex flex-col">
              <label htmlFor="usuario" className="mb-1 text-[#E5ECE3]">Usuário (email)</label>
              <input
                type="email"
                id="usuario"
                name="usuario"
                placeholder="Seu email"
                value={usuarioLogin.usuario || ''}
                onChange={atualizarEstado}
                required
                className="rounded-md bg-[#677B88] border border-[#E5ECE3] px-4 py-2 text-[#f8fafc] placeholder-[#E5ECE3] focus:outline-none focus:border-[#60B657] focus:ring-1 focus:ring-[#60B657] transition"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="senha" className="mb-1 text-[#E5ECE3]">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha (mínimo 8 caracteres)"
                value={usuarioLogin.senha || ''}
                onChange={atualizarEstado}
                required
                minLength={8}
                className="rounded-md bg-[#677B88] border border-[#E5ECE3] px-4 py-2 text-[#f8fafc] placeholder-[#E5ECE3] focus:outline-none focus:border-[#60B657] focus:ring-1 focus:ring-[#60B657] transition"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#60B657] hover:bg-[#068DBD] text-[#1A5566] font-bold py-3 rounded-md shadow-md transition duration-300 flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="#1A5566"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                'Entrar'
              )}
            </button>

            <p className="text-center text-[#E5ECE3]">
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className="text-[#068DBD] hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
