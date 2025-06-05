import React, { useContext, useEffect, useState, type ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Curso from '../../../models/Curso';
import { buscar, atualizar, cadastrar } from '../../../services/Service';
import type Categorias from '../../../models/Categorias';
import { AuthContext } from '../../../contexts/AuthContext';
import { ToastAlerta } from '../../../utils/ToastAlert';
import { RotatingLines } from 'react-loader-spinner';
import type { Usuario } from '../../../models/Usuario';

interface FormCursoProps {
    onSuccess?: () => void;
}

function FormCurso({ onSuccess }: FormCursoProps) {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categorias[]>([]);

    const [categoria, setCategoria] = useState<Categorias>({ id: 0, categoria: '' });
    const [curso, setCurso] = useState<Curso>({} as Curso);

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);

    const token = usuario.token;

    async function buscarCursoPorId(id: string) {
        try {
            await buscar(`/cursos/${id}`, setCurso, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou, faça login novamente.', 'info');
                handleLogout();
            } else {
                ToastAlerta('Erro ao buscar o curso.', 'erro');
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou, faça login novamente.', 'info');
                handleLogout();
            } else {
                ToastAlerta('Erro ao buscar a categoria.', 'erro');
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categoria', setCategorias, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                ToastAlerta('O token expirou, faça login novamente.', 'info');
                handleLogout();
            } else {
                ToastAlerta('Erro ao buscar as categorias.', 'erro');
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarCursoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setCurso(prevCurso => ({
            ...prevCurso,
            categoria: categoria,
        }));
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCurso({
            ...curso,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate('/cursos');
    }

    async function gerarNovoCurso(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const cursoParaEnviar = {
            ...curso,
            categoria: categoria.id !== 0 ? { id: categoria.id } : null,
            usuario: usuario.id !== 0 ? { id: usuario.id } : null,
        };

        if (cursoParaEnviar.categoria === null || cursoParaEnviar.usuario === null) {
            ToastAlerta('A categoria e o usuário do curso são obrigatórios.', 'erro');
            setIsLoading(false);
            return;
        }

        if (id !== undefined) {
            try {
                await atualizar(`/cursos`, cursoParaEnviar, setCurso, {
                    headers: {
                        Authorization: token,
                    },
                });
                ToastAlerta('Curso atualizado com sucesso', 'sucesso');
                if (onSuccess) onSuccess(); // Chama o onSuccess após sucesso
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    ToastAlerta('O token expirou, faça login novamente.', 'info');
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar o Curso', 'erro');
                }
            }
        } else {
            try {
                await cadastrar(`/cursos`, cursoParaEnviar, setCurso, {
                    headers: {
                        Authorization: token,
                    },
                });
                ToastAlerta('Curso cadastrado com sucesso', 'sucesso');
                if (onSuccess) onSuccess(); // Chama o onSuccess após sucesso
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    ToastAlerta('O token expirou, faça login novamente.', 'info');
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar o Curso', 'erro');
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    const carregandoCategoria = categoria.categoria === '';

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Curso' : 'Cadastrar Curso'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoCurso}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Título do Curso</label>
                    <input
                        type="text"
                        placeholder="Titulo"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={curso.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do Curso</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name="descricao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={curso.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="data">Data de Início do Curso</label>
                    <input
                        type="date"
                        placeholder="Data de Início"
                        name="data"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={curso.data instanceof Date
                            ? curso.data.toISOString().split('T')[0]
                            : (typeof curso.data === 'string'
                                ? curso.data.split('T')[0]
                                : '')
                        }
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="vagas">Quantidade de vagas para o Curso</label>
                    <input
                        type="number"
                        placeholder="Vagas"
                        name="vagas"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={curso.vagas}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Tema do Curso</p>
                    <select
                        name="categoria"
                        id="categoria"
                        className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                        value={categoria.id === 0 ? "" : categoria.id}
                    >
                        <option value="" disabled>Selecione uma Categoria</option>
                        {categorias.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.categoria}</option>
                        ))}
                    </select>
                </div>
                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                    disabled={carregandoCategoria || isLoading}
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCurso;