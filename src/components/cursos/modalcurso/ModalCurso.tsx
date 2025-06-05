import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'
import FormCurso from '../formcurso/FormCurso';

function ModalCurso() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Cadastrar Curso
                    </button>
                }
                modal
            >
                <FormCurso />
            </Popup>
        </>
    );
}

export default ModalCurso;