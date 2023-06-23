import {useState, useEffect} from 'react'
import Card from '../Card'

const Produtos = props => {

    const [produtos, setProdutos] = useState([])
    const estilo = {
        "minWidth": '300px',
        "maxWidth": "300px",
        "margin": '10px',
        "border": '3px solid green',
        "textAlign": 'center',
        "color": "green" 
    }

    useEffect(() => {
        fetch('http://localhost:3001/api/produto')
        .then(response => response.json())
        .then(data => setProdutos(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <Card produtos={produtos} estilo={estilo} rota={'detalhes'}/>
        </div>
    )
}

export default Produtos