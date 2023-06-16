import {useState, useEffect} from 'react'
import Card from '../components/Card'

const Produtos = props => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/produto')
        .then(response => response.json())
        .then(data => setProdutos(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <Card produtos={produtos}/>
        </div>
    )
}

export default Produtos