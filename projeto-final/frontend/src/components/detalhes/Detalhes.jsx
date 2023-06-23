import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../Card'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Detalhes = props => {
    const { codigo } = useParams()
    const [produto, setProduto] = useState([])
    const [quantidade, setQuantidade] = useState(0)

    const somar = props => setQuantidade(quantidade + 1)
    
    const estilo = {
        "minWidth": '300px',
        "maxWidth": "300px",
        "border": '1px solid green',
        "textAlign": 'center',
        "color": "green"
    }

    useEffect(() => {
        fetch("http://localhost:3001/api/produto/" + codigo)
        .then(response => response.json())
        .then(data => setProduto(data))
        .catch(err => console.error(err))
    }, [])

    return(
        <>
        <Row>
            <Col>
                <Card produtos={produto} estilo={estilo} rota={'carrinho'}/>
            </Col>
            <Col>  
                <h2>Descrição do produto</h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, 
                sed! Debitis accusamus earum placeat ad repudiandae doloribus quo nesciunt, 
                recusandae dolore incidunt nulla delectus asperiores ab, nostrum qui quasi inventore?
                <h3>Selecione a quantidade</h3>
                <form>
                    <label htmlFor="qtd">Quantidade</label><br /><p>{quantidade}</p>
                    <button onClick={somar}> + </button>
                    <button> - </button>
                    
                </form>
            </Col>
        </Row>
            
        </>
    )
}

export default Detalhes