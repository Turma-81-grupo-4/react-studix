import { Link, useNavigate } from 'react-router-dom';
import { type ChangeEvent, useState } from 'react';
import type { UsuarioLogin } from '../../models/UsuarioLogin';
import { cadastrarUsuario } from '../../services/Service';

function Cadastro() {
  const navigate = useNavigate();

  const [usuarioCadastro, setUsuarioCadastro] = useState<UsuarioLogin>({
    id: 0,
    token: '',
    data: '',
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    funcao: ''
  });

  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioCadastro({
      ...usuarioCadastro,
      [e.target.name]: e.target.value
    });
  }

  function confirmarSenhaHandler(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (usuarioCadastro.senha.length < 8) {
      alert('A senha deve conter no mínimo 8 caracteres.');
      return;
    }

    if (confirmarSenha !== usuarioCadastro.senha) {
      alert('As senhas não coincidem.');
      setUsuarioCadastro({ ...usuarioCadastro, senha: '' });
      setConfirmarSenha('');
      return;
    }

    setIsLoading(true);

    const { nome, usuario, senha, foto, funcao } = usuarioCadastro;

    console.log("Dados enviados:", { nome, usuario, senha, foto, funcao });

    try {
      await cadastrarUsuario(
        '/usuarios/cadastrar',
        { nome, usuario, senha, foto, funcao },
        setUsuarioCadastro
      );
      alert('Usuário cadastrado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar o usuário!');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a40] to-[#1A5566] p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-3xl bg-white shadow-2xl overflow-hidden">

        <div className="md:w-1/2 p-10 bg-gradient-to-br flex flex-col justify-center items-center space-y-4">
          <img
            src="src/assets/Studix-2.png"
            alt="Ilustração de login"
          />
        </div>

        <div className="md:w-1/2 p-10 bg-[#1e293b] text-[#f8fafc] flex flex-col justify-center">
          <form
            onSubmit={cadastrarNovoUsuario}
            className="font-semibold space-y-5"
          >
            <h2 className="text-3xl font-extrabold tracking-wider text-center mb-4 drop-shadow-md">
              Cadastre-se
            </h2>

            <div className="flex flex-col">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome completo"
                value={usuarioCadastro.nome}
                onChange={atualizarEstado}
                required
                className="rounded-md bg-[#677B88] px-4 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="usuario">Usuário (email)</label>
              <input
                type="email"
                id="usuario"
                name="usuario"
                placeholder="Seu email"
                value={usuarioCadastro.usuario}
                onChange={atualizarEstado}
                required
                className="rounded-md bg-[#677B88] px-4 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Mínimo 8 caracteres"
                value={usuarioCadastro.senha}
                onChange={atualizarEstado}
                minLength={8}
                required
                className="rounded-md bg-[#677B88] px-4 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={confirmarSenhaHandler}
                required
                className="rounded-md bg-[#677B88] px-4 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="foto">Foto (opcional)</label>
              <input
                type="url"
                id="foto"
                name="foto"
                placeholder="URL da sua foto"
                value={usuarioCadastro.foto}
                onChange={atualizarEstado}
                className="rounded-md bg-[#677B88] px-4 py-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="funcao">Função</label>
              <input
                type="text"
                id="funcao"
                name="funcao"
                placeholder="Ex: aluno, professor"
                value={usuarioCadastro.funcao}
                onChange={atualizarEstado}
                required
                className="rounded-md bg-[#677B88] px-4 py-2"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-[#60B657] hover:bg-[#068DBD]'} text-[#1A5566] font-bold py-3 rounded-md shadow-md transition duration-300`}
            >
              {isLoading ? 'Cadastrando...' : 'Cadastrar'}
            </button>

            <p className="text-center text-[#E5ECE3]">
              Já tem uma conta?{' '}
              <Link to="/login" className="text-[#68cbe7] hover:underline">
                Entrar
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
