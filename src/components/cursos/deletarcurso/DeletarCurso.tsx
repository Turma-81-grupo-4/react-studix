import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type Curso from '../../../models/Curso'
import { buscar, deletar } from '../../../services/Service'

function DeletarCurso() {
    const navigate = useNavigate()

    const [curso, setCurso] = useState<Curso>({} as Curso)
    const { id } = useParams<{ id: string }>()

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

    function retornar() {
        navigate('/cursos')
    }

    async function deletarCurso() {
        await deletar(`/cursos/${id}`, {
            headers: {
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzQ5MDUwODU4LCJleHAiOjE3NDkwNzI0NTh9.Aj6k-ZH-F81-iVPj1g2M1pwfhUhQXG0JANWKBLuCx5s"
            }
        })
        alert('O Curso foi deletado com sucesso!')
        navigate('/cursos')
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-emerald-900 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{curso.titulo}</p>
                <div className="flex">
                    <button
                        className='w-full text-slate-100 bg-red-400 hover:bg-red-600 flex items-center justify-center'
                        onClick={deletarCurso}>
                            <span>Sim</span>
                    </button>
                    <button
                        className='text-slate-100 bg-cyan-500 hover:bg-cyan-800 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCurso
