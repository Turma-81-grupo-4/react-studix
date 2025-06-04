import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Categorias from "../../../models/Categorias";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardCategorias from "../cardcategoria/CardCategoria";

function ListaCategoria(){
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categorias[]>([]);

    const {usuario, handleLogout} = useContext(AuthContext);
    const token = usuario.token;

    async function buscarCategorias(){
        try{
            await buscar('/categoria', setCategoria,  {
                headers: { Authorization: token }
            })
        }catch(error:any){
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(()=> {
        if(token === ''){
            alert('Voce precisa estar logado')
            navigate('/')
        }
    },[token])

    useEffect(()=>{
        buscarCategorias();
    },[categoria.length])

    return(
        <>
            {categoria.length === 0 && (
                <DNA
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperClass="dna-wrapper mx-auto"
                wrapperStyle={{}} />
            )}
            <div>
                <div>
                    <div>
                        {categoria.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategoria;