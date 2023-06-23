import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import api from '../../services/api'

const Carrinho = props => {

    const navigate = useNavigate();
    const { codigo } = useParams();   
    
    let pessoaString = localStorage.getItem('pessoa');
    let pessoaObj = JSON.parse(pessoaString);
    const token = localStorage.getItem("token");
    
    const [cliente] = useState(pessoaObj.codigo)
    const [produto] = useState(codigo)
    const [status] = useState('Produto registrado FRONT')
    const [preco] = useState(0)
   
    const bodyParam = { 
        preco : preco, status : status, 
        clienteCodigo: cliente, produtoCodigo: produto, 
    }

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    function handleSubmit(event) {
        event.preventDefault();

        api.post('api/pedido/create', bodyParam, config).then((response) => {

            // parametro msg tem que ser o mesmo retornado do objeto do servidor
            alert(response.data.msg)
            navigate("/");

        }).catch((err) => {
            console.error(err.response.data)
            alert(" Ocorreu um erro! " + err)            
        })
    }

    return (
        <div className="container text-center">
            <form onSubmit={handleSubmit}>
                <button type="submit" className="btn btn-primary">Finalizar Pedido</button>
            </form>
        </div>
    )
}

export default Carrinho