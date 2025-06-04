import React, { useEffect, useState, type ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import type Curso from '../../../models/Curso';
import { buscar, atualizar, cadastrar } from '../../../services/Service';

function FormCurso() {

    const navigate = useNavigate();

    const [curso, setCurso] = useState<Curso>({} as Curso)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/cursos/${id}`, setCurso, {
            headers: {
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzQ5MDUwODU4LCJleHAiOjE3NDkwNzI0NTh9.Aj6k-ZH-F81-iVPj1g2M1pwfhUhQXG0JANWKBLuCx5s"
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
        setCurso({
            ...curso,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/cursos")
    }

    async function gerarNovoCurso(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/cursos`, curso, setCurso, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzQ5MDUwODU4LCJleHAiOjE3NDkwNzI0NTh9.Aj6k-ZH-F81-iVPj1g2M1pwfhUhQXG0JANWKBLuCx5s",
                    },
                });
                alert('O Curso foi atualizado com sucesso!')
            } catch (error: any) {
                alert('Erro ao atualizar o Curso!')
            }
        } else {
            await cadastrar(`/cursos`, curso, setCurso, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzQ5MDUwODU4LCJleHAiOjE3NDkwNzI0NTh9.Aj6k-ZH-F81-iVPj1g2M1pwfhUhQXG0JANWKBLuCx5s",
                },
            })
            alert('O Curso foi cadastrado com sucesso!')
        }
        retornar()
    }

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
                {/* <div className="flex flex-col gap-2">
                    <p>Tema do Curso</p>
                    <select name="tema" id="tema" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione uma Categoria</option>

                        {Categoria.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.descricao}</option>
                            </>
                        ))}

                    </select> 
                </div> */}
                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                >
                    {
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCurso
