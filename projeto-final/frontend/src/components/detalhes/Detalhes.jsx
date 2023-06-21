import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../Card'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Detalhes = props => {
    const { codigo } = useParams()
    const [produto, setProduto] = useState([])
    const estilo = {
        "minWidth": '300px',
        "maxWidth": "300px",
        "border": '3px solid green',
        "textAlign": 'center',
        "color": "green"
    }

    useEffect(() => {
        fetch("http://localhost:3001/api/produto/" + codigo)
        .then(response => response.json())
        .then(data => setProduto(data))
        .catch(err => console.error(err))
    }, [])

    console.log(codigo)
    console.log(produto)

    return(
        <>
        <Row>
            <Col><Card produtos={produto} estilo={estilo}/></Col>
            <Col>  
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, 
                sed! Debitis accusamus earum placeat ad repudiandae doloribus quo nesciunt, 
                recusandae dolore incidunt nulla delectus asperiores ab, nostrum qui quasi inventore?
            </Col>
        </Row>
            
        </>
    )
}

export default Detalhes