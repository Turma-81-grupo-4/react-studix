import { FileEditIcon, TrashIcon } from 'lucide-react';
import type Curso from '../../../models/Curso';
import { Link } from 'react-router-dom';

interface CardCursosProps {
    curso: Curso;
}


function CardCursos({ curso }: CardCursosProps) {
    const usuarioSimulado = curso.usuario ?? { funcao: 'professor' };
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


    const podeGerenciar = usuarioSimulado.funcao === 'professor';

    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-lg m-4 p-6 flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:scale-105 w-full max-w-sm min-h-[320px]">
            <div>
                <h3 className="text-2xl font-semibold text-emerald-700 dark:text-emerald-500 mb-2">{curso.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">ID: {curso.id}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 h-20 overflow-y-auto">
                    {/* Adiciona scroll se a descrição for muito longa */}
                    {curso.descricao || "Nenhuma descrição fornecida."}
                </p>

                <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                        {/* <FiCalendar className="mr-2 text-emerald-600" /> */}
                        <span>Data: {formatDate(curso.data)}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                        {/* <FiUsers className="mr-2 text-emerald-600" /> */}
                        <span>Vagas: {curso.vagas}</span>
                    </div>
                    <div className="flex items-center">
                        {curso.disponibilidade ? (
                            <>
                                {/* <FiCheckCircle className="mr-2 text-green-500" /> */}
                                <span className="text-green-600 dark:text-green-400 font-medium">Disponível</span>
                            </>
                        ) : (
                            <>
                                {/* <FiXCircle className="mr-2 text-red-500" /> */}
                                <span className="text-red-600 dark:text-red-400 font-medium">Indisponível</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Informações de Categoria e Usuário (Professor) */}
                {/*
        {curso.categoria && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Categoria: {curso.categoria.nome}
          </p>
        )}
        {curso.usuario && ( // Lembre-se que curso.usuario é o criador/professor do curso
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Professor: {curso.usuario.nome}
          </p>
        )}
        */}
            </div>

            {/* Botões de Ação - Visíveis apenas para professores */}

            {podeGerenciar && (
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                    <Link
                        to={`/editarcurso/${curso.id}`}
                        className="
              w-full sm:w-auto
              text-center
              bg-blue-500 hover:bg-blue-600
              text-white
              px-4 py-2 rounded-md
              transition-colors duration-300
              cursor-pointer
              text-sm font-medium
              flex items-center justify-center
            "
                    >
                        {<FileEditIcon className="mr-2" />}
                        Editar
                    </Link>
                    <Link
                        to={`/deletarcurso/${curso.id}`}
                        className="
              w-full sm:w-auto
              text-center
              bg-red-500 hover:bg-red-600
              text-white
              px-4 py-2 rounded-md
              transition-colors duration-300
              cursor-pointer
              text-sm font-medium
              flex items-center justify-center
            "
                    >
                        {<TrashIcon className="mr-2" />}
                        Excluir
                    </Link>
                </div>
            )}
        </div>
    );
}

export default CardCursos;
