import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import imagemPadrao from "../../assets/Studix-2.png";
import { AuthContext } from "../../contexts/AuthContext";

function Perfil() {
    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(AuthContext);

    const [editando, setEditando] = useState(false);
    const [foto, setFoto] = useState(usuario.foto || "");
    const [nome, setNome] = useState(usuario.nome || "");

    const funcao = usuario.funcao?.toLowerCase();

    useEffect(() => {
        setFoto(usuario.foto || "");
        setNome(usuario.nome || "");
    }, [usuario]);

    useEffect(() => {
        if (!usuario.token || usuario.token === "") {
            alert("Você precisa estar logado");
            navigate("/home");
        }
    }, [usuario.token, navigate]);

    function salvarAlteracoes() {
        setEditando(false);
        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            nome,
            foto,
            funcao: prevUsuario.funcao,
        }));
    }

    return (
        <div className="bg-[#E5ECE3] min-h-screen flex flex-col items-center">
            <div className="w-full h-64 bg-gradient-to-r from-[#1a1a40] to-[#1A5566] flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                Meu Painel
            </div>

            <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg mt-[-4rem] px-8 py-6 flex flex-col md:flex-row items-center md:items-start">
                <div className="relative">
                    <img
                        className="w-36 h-36 rounded-full object-cover border-4 border-[#1A5566]"
                        src={foto || imagemPadrao}
                        alt={`Foto de perfil de ${nome}`}
                    />
                    <span className="absolute bottom-0 right-0 bg-[#1A5566] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg capitalize">
                        {funcao || "usuário"}
                    </span>
                </div>

                <div className="text-center md:text-left space-y-4 w-full mt-6 md:mt-0 md:ml-8">
                    {editando ? (
                        <>
                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Foto (URL):</label>
                                <input
                                    type="text"
                                    value={foto}
                                    onChange={(e) => setFoto(e.target.value)}
                                    className="w-full rounded border border-gray-300 p-2"
                                    placeholder="Cole o link da imagem"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-1">Nome:</label>
                                <input
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    className="w-full rounded border border-gray-300 p-2"
                                />
                            </div>

                            <div className="flex space-x-4 mt-4">
                                <button
                                    onClick={salvarAlteracoes}
                                    className="bg-[#60B657] text-white px-6 py-2 rounded hover:bg-[#4fa94c] transition"
                                >
                                    Salvar
                                </button>
                                <button
                                    onClick={() => setEditando(false)}
                                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold text-[#1A5566]">{nome}</h2>
                            <p className="text-gray-600">Email: {usuario.usuario}</p>
                            <p className="text-gray-600 capitalize">Perfil: {funcao || "Não definido"}</p>
                            <p className="text-gray-600">Nível: Iniciante</p>

                            <button
                                className="mt-3 bg-[#60B657] text-white px-4 py-2 rounded hover:bg-[#50616f] transition"
                                onClick={() => setEditando(true)}
                            >
                                Editar Perfil
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className="w-full max-w-5xl mt-10 px-4">
                {funcao === "aluno" && (
                    <>
                        <h3 className="text-2xl text-[#1A5566] font-semibold mb-6">Meus Cursos</h3>
                    </>
                )}

                {funcao === "professor" && (
                    <>
                        <h3 className="text-2xl text-[#1A5566] font-semibold mb-6">Cursos que você ministra</h3>
                    </>
                )}
            </div>
        </div>
    );
}

export default Perfil;
