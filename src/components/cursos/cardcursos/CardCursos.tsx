import { BookOpen, Calendar, FileEditIcon, TrashIcon, User, UserMinus, UserPlus, Users } from 'lucide-react';
import type Curso from '../../../models/Curso';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { Usuario } from '../../../models/Usuario';

const usuarioTeste = {
    id: 1,
    nome: "Usuário Teste",
    usuario: "usuario.teste",
    senha: "12345678",
    foto: "https://via.placeholder.com/150",
    funcao: "professor", // Pode ser 'aluno' ou 'professor'
}
interface CardCursosProps {
    curso: Curso;
    usuarioAtual?: Usuario; // Usuário atual, pode ser aluno ou professor
    onParticipacaoChange?: (cursoId: number, novasVagas: number, participantes: Usuario[]) => void; // Callback para atualizar no componente pai
}

function CardCursos({ curso, usuarioAtual = usuarioTeste, onParticipacaoChange }: CardCursosProps) {
    // Estado para controlar vagas e participantes localmente
    const [vagasAtual, setVagasAtual] = useState(curso.vagas);
    const [participantes, setParticipantes] = useState<Usuario[]>(curso.participantes || []);

    const formatDate = (dateString: Date | string) => {
        try {
            return new Date(dateString).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        } catch (error) {
            return "Data inválida";
        }
    };
    const disponivel = curso.disponibilidade && vagasAtual > 0;
    const podeGerenciar = usuarioAtual?.funcao === 'professor';
    const jaParticipa = usuarioAtual ? participantes.some(p => p.id === usuarioAtual.id) : false;
    const podeParticipar = !podeGerenciar && usuarioAtual && (disponivel || jaParticipa);

    const handleParticipacao = () => {
        if (!usuarioAtual) return;

        if (jaParticipa) {
            // Sair do curso
            const novosParticipantes = participantes.filter(p => p.id !== usuarioAtual.id);
            const novasVagas = vagasAtual + 1;

            setParticipantes(novosParticipantes);
            setVagasAtual(novasVagas);

            // Notificar componente pai se callback existir
            onParticipacaoChange?.(curso.id, novasVagas, novosParticipantes);
        } else {
            // Participar do curso
            if (vagasAtual > 0) {
                const novosParticipantes = [...participantes, usuarioAtual];
                const novasVagas = vagasAtual - 1;

                setParticipantes(novosParticipantes);
                setVagasAtual(novasVagas);

                // Notificar componente pai se callback existir
                onParticipacaoChange?.(curso.id, novasVagas, novosParticipantes);
            }
        }
    };
    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-lg p-6 flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:scale-105 w-full max-w-sm min-h-[420px] border border-gray-100 dark:border-gray-700">
            {/* Header do Card */}
            <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                        <BookOpen className="text-emerald-600 dark:text-emerald-400" size={20} />
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            ID: {curso.id}
                        </span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${disponivel
                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                            : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                        }`}>
                        {disponivel ? 'Disponível' : 'Indisponível'}
                    </div>
                </div>

                {/* Título do Curso */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight">
                    {curso.titulo}
                </h3>

                {/* Descrição */}
                <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed h-16 overflow-y-auto">
                        {curso.descricao || "Nenhuma descrição fornecida."}
                    </p>
                </div>

                {/* Informações do Curso */}
                <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="mr-3 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-medium">Data: {formatDate(curso.data)}</span>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Users size={16} className="mr-3 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm font-medium">
                            Vagas: {vagasAtual}
                            {participantes.length > 0 && (
                                <span className="ml-2 text-xs text-gray-500">
                                    ({participantes.length} {participantes.length === 1 ? 'inscrito' : 'inscritos'})
                                </span>
                            )}
                        </span>
                    </div>

                    {curso.categoria && (
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <div className="w-4 h-4 mr-3 bg-emerald-600 dark:bg-emerald-400 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium">Categoria: {curso.categoria.categoria}</span>
                        </div>
                    )}

                    {curso.usuario && (
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <User size={16} className="mr-3 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-sm font-medium">Professor: {curso.usuario.nome}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Botões de Ação */}
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                {/* Botão Participar/Sair - Visível para alunos */}
                {!podeGerenciar && usuarioAtual && (
                    <div className="mb-3">
                        {podeParticipar ? (
                            <button
                                onClick={handleParticipacao}
                                className={`w-full flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md active:transform active:scale-95 ${jaParticipa
                                        ? 'bg-red-600 hover:bg-red-700 text-white'
                                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                    }`}
                            >
                                {jaParticipa ? (
                                    <>
                                        <UserMinus size={16} className="mr-2" />
                                        Sair do Curso
                                    </>
                                ) : (
                                    <>
                                        <UserPlus size={16} className="mr-2" />
                                        Participar
                                    </>
                                )}
                            </button>
                        ) : (
                            <button
                                disabled
                                className="w-full flex items-center justify-center px-4 py-2 bg-gray-400 text-white text-sm font-medium rounded-lg cursor-not-allowed opacity-60"
                            >
                                {!curso.disponibilidade ? 'Curso Indisponível' : 'Sem Vagas'}
                            </button>
                        )}
                    </div>
                )}

                {/* Botões de Gerenciamento - Visíveis apenas para professores */}
                {podeGerenciar && (
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Link
                            to={`/editarcurso/${curso.id}`}
                            className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md active:transform active:scale-95"
                        >
                            <FileEditIcon size={16} className="mr-2" />
                            Editar
                        </Link>

                        <Link
                            to={`/deletarcurso/${curso.id}`}
                            className="flex-1 flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md active:transform active:scale-95"
                        >
                            <TrashIcon size={16} className="mr-2" />
                            Excluir
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardCursos;