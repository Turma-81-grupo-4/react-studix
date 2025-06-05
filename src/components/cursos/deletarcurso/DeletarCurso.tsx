import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type Curso from '../../../models/Curso'
import { buscar, deletar } from '../../../services/Service'
import { AuthContext } from '../../../contexts/AuthContext'
import { ToastAlerta } from '../../../utils/ToastAlert'

function DeletarCurso() {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [curso, setCurso] = useState<Curso>({} as Curso)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzQ5MDc2ODg2LCJleHAiOjE3NDkwOTg0ODZ9.K4qiKMh_Di2yoTXIuoOPEIuXHdAyEI1uOs6UCXJcsM0"

    async function buscarPorId(id: string) {
        try {
            await buscar(`/cursos/${id}`, setCurso, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

/*     useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token]) */

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCurso() {
        setIsLoading(true)

        try {
            await deletar(`/cursos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta('Curso apagado com sucesso', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                ToastAlerta('Erro ao deletar o curso.', 'erro')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/cursos")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center'>Deletar curso</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o curso a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-emerald-900 text-white font-bold text-2xl'>
                    Curso
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
