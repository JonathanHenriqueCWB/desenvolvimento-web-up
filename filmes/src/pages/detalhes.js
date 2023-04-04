import React from 'react'
import { useParams } from 'react-router-dom'

import filmes from '../data/filmes'
import todosComentarios from '../data/comments'

import Title from '../components/Title/Title'
import Card from '../components/Card/Card'
import Comments from '../components/Comments/Comments'

const Detalhes = props => {
    
    const { id } = useParams()
    const estilo = {"width" : "80.5rem"}
    
    const filme = filmes.filter(f => f.id === parseInt(id))
    const comentario = todosComentarios.filter(c => c.filme === filme[0].nome)

    return (
        <div className='container'>
            <Title title="Confira agora" text="Detalhes do filme abaixo"></Title>
            <Card filme={filme} estilo={estilo}></Card>
            <Comments comentarios={comentario} />
        </div>
    )
}

export default Detalhes
