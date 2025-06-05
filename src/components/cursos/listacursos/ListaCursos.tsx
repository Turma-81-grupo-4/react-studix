import React, { useContext, useEffect, useState } from 'react';
import { buscar } from '../../../services/Service';
import type Curso from '../../../models/Curso';
import CardCursos from '../cardcursos/CardCursos';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { ToastAlerta } from '../../../utils/ToastAlert';

function ListaCursos() {
    const navigate = useNavigate();

    const [cursos, setCursos] = useState<Curso[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzQ5MDc2ODg2LCJleHAiOjE3NDkwOTg0ODZ9.K4qiKMh_Di2yoTXIuoOPEIuXHdAyEI1uOs6UCXJcsM0";

    async function buscarCursos() {
        try {
            setLoading(true);
            setError(null);
            await buscar('/cursos', setCursos, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                setError('Erro ao carregar cursos. Tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    }

    /*     useEffect(() => {
            if (token === '') {
                ToastAlerta('Você precisa estar logado', 'info')
                navigate('/');
            }
        }, [token]) */

    useEffect(() => {
        buscarCursos();
    }, []);

    // Loading skeleton component
    const LoadingSkeleton = () => (
        <div className="animate-pulse">
            <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-48 rounded-2xl mb-4"></div>
            <div className="space-y-3">
                <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-4 rounded-lg w-3/4"></div>
                <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-4 rounded-lg w-1/2"></div>
            </div>
        </div>
    );

    // Empty state component
    const EmptyState = () => (
        <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
            <div className="w-32 h-32 mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <svg
                    className="w-16 h-16 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Nenhum curso encontrado
            </h3>
            <p className="text-gray-500 text-center max-w-md">
                Parece que ainda não há cursos disponíveis. Volte em breve para ver as novidades!
            </p>
        </div>
    );

    // Error state component
    const ErrorState = () => (
        <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
            <div className="w-32 h-32 mb-6 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center">
                <svg
                    className="w-16 h-16 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Ops! Algo deu errado
            </h3>
            <p className="text-gray-500 text-center max-w-md mb-6">
                {error}
            </p>
            <button
                onClick={buscarCursos}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
                Tentar novamente
            </button>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Nossos Cursos
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Descubra nossa seleção de cursos cuidadosamente preparados para impulsionar sua carreira
                    </p>

                    {/* Stats bar */}
                    {!loading && !error && (
                        <div className="inline-flex items-center space-x-2 mt-6 px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full shadow-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700">
                                {cursos.filter(curso => curso.disponibilidade).length} {cursos.filter(curso => curso.disponibilidade).length === 1 ? 'curso disponível' : 'cursos disponíveis'}
                                {cursos.length > cursos.filter(curso => curso.disponibilidade).length && (
                                    <span className="text-gray-500 ml-1">
                                        • {cursos.length - cursos.filter(curso => curso.disponibilidade).length} indisponível{cursos.length - cursos.filter(curso => curso.disponibilidade).length > 1 ? 'eis' : ''}
                                    </span>
                                )}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {loading ? (
                        // Loading state
                        Array.from({ length: 6 }).map((_, index) => (
                            <LoadingSkeleton key={index} />
                        ))
                    ) : error ? (
                        // Error state
                        <ErrorState />
                    ) : cursos.length > 0 ? (
                        // Success state with courses
                        cursos.map((curso, index) => (
                            <div
                                key={curso.id}
                                className="transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animation: 'slideUp 0.6s ease-out forwards'
                                }}
                            >
                                <CardCursos curso={curso} />
                            </div>
                        ))
                    ) : (
                        // Empty state
                        <EmptyState />
                    )}
                </div>

                {/* Refresh button when there are courses */}
                {!loading && !error && cursos.length > 0 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={buscarCursos}
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/80 transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            <svg
                                className="w-4 h-4 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                            </svg>
                            <span className="text-sm font-medium text-gray-700 cursor-pointer">Atualizar</span>
                        </button>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default ListaCursos;