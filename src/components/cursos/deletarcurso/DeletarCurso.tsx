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
    const token = usuario.token

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

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])

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
        <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4'>
            <div className='container max-w-2xl mx-auto'>
                {/* Cabeçalho */}
                <div className='text-center mb-8'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4'>
                        <svg className='w-8 h-8 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'></path>
                        </svg>
                    </div>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Deletar Curso</h1>
                    <p className='text-gray-600 text-lg'>
                        Esta ação não pode ser desfeita. Tem certeza de que deseja continuar?
                    </p>
                </div>

                {/* Card do Curso */}
                <div className='bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8'>
                    {/* Header do Card */}
                    <div className='bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4'>
                        <div className='flex items-center space-x-3'>
                            <div className='w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center'>
                                <svg className='w-6 h-6 text-red' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'></path>
                                </svg>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold text-white'>O Curso será deletado!</h2>
                                <p className='text-emerald-100 text-sm'>Esta informação será perdida permanentemente</p>
                            </div>
                        </div>
                    </div>

                    {/* Conteúdo do Card */}
                    <div className='p-8'>
                        <div className='bg-[#677B88] rounded-lg p-6 border-l-4 border-red-400'>
                            <h3 className='text-lg font-medium text-white mb-2'>Título do Curso</h3>
                            <p className='text-2xl font-bold text-white break-words'>
                                {curso.titulo || 'Carregando...'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Botões de Ação */}
                <div className='flex flex-col sm:flex-row gap-4'>
                    <button
                        className='flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-2'
                        onClick={deletarCurso}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <svg className='animate-spin w-5 h-5 text-white' fill='none' viewBox='0 0 24 24'>
                                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                                </svg>
                                <span>Deletando...</span>
                            </>
                        ) : (
                            <>
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'></path>
                                </svg>
                                <span>Sim, deletar curso</span>
                            </>
                        )}
                    </button>

                    <button
                        className='flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-2'
                        onClick={retornar}
                        disabled={isLoading}
                    >
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 19l-7-7m0 0l7-7m-7 7h18'></path>
                        </svg>
                        <span>Cancelar</span>
                    </button>
                </div>

                {/* Aviso adicional */}
                <div className='mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg'>
                    <div className='flex items-start space-x-3'>
                        <svg className='w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z'></path>
                        </svg>
                        <div>
                            <h4 className='text-sm font-medium text-yellow-800'>Atenção</h4>
                            <p className='text-sm text-yellow-700 mt-1'>
                                Ao deletar este curso, todos os dados relacionados serão permanentemente removidos do sistema.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarCurso