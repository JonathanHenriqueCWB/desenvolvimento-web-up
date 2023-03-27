import React from 'react'
import { useParams } from 'react-router-dom'
import filmes from '../data/filmes'

import Title from '../components/Title/Title'
import Card from '../components/Card/Card'

const Detalhes = props => {
    
    const { id } = useParams()
    const filme = filmes.filter(f => f.id === parseInt(id))
    const estilo = {"width" : "80rem"}

    return (
        <div className='container'>
            <Title title="Confira agora" text="Detalhes do filme abaixo"></Title>
            <Card filme={filme} estilo={estilo}></Card>
        </div>
    )
}

export default Detalhes
