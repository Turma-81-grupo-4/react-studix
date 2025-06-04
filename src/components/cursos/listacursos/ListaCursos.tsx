import React, { useEffect, useState } from 'react';
import { buscar } from '../../../services/Service';
import type Curso from '../../../models/Curso';
import CardCursos from '../cardcursos/CardCursos';

function ListaCursos() {
    const [cursos, setCursos] = useState<Curso[]>([]);

    async function buscarCursos() {
        try {
            await buscar('/cursos', setCursos, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290QHJvb3QuY29tIiwiaWF0IjoxNzQ5MDUwODU4LCJleHAiOjE3NDkwNzI0NTh9.Aj6k-ZH-F81-iVPj1g2M1pwfhUhQXG0JANWKBLuCx5s", // Substitua null pelo token de autenticação se necessário
                },
            });
        } catch (error) {
            console.error("Erro ao buscar cursos:", error);
        }
    }

    useEffect(() => {
        buscarCursos();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-center px-2">Lista de Cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Adicionado um grid para melhor layout */}
                {cursos.length > 0 ? (
                    cursos.map((curso) => (
                        <CardCursos key={curso.id} curso={curso} />
                    ))
                ) : (
                    <p className="text-center col-span-full">Nenhum curso encontrado.</p>
                )}
            </div>
        </div>
    );
}

export default ListaCursos;