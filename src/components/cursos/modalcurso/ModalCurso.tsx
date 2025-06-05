import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalCurso.css'
import FormCurso from '../formcurso/FormCurso';
import { useAtualizaCursos } from '../../../contexts/AtualizaCursosContext'; // importe o hook

interface ModalCursoProps {
    onCursoCadastrado?: () => void;
}

function ModalCurso({ onCursoCadastrado }: ModalCursoProps) {
    const { notificar } = useAtualizaCursos(); // use o contexto aqui

    return (
        <Popup
            trigger={
                <button
                    className="cursor-pointer block rounded-lg px-4 py-2 text-sm font-bold text-cyan-600 hover:bg-gray-100 hover:text-cyan-900"
                >
                    Cadastrar Curso
                </button>
            }
            modal
        >
            {/* @ts-ignore */}
            {close => (
                <FormCurso
                    onSuccess={() => {
                        close();
                        notificar(); // <-- ATUALIZA A LISTA GLOBALMENTE
                        if (onCursoCadastrado) onCursoCadastrado();
                    }}
                />
            )}
        </Popup>
    );
}

export default ModalCurso;