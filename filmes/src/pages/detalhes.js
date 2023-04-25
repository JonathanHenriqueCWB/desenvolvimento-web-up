import React from 'react'
import { useParams } from 'react-router-dom'

// Data
import todosComentarios from '../data/comments'

// Components
import Title from '../components/Title/Title'
import Card from '../components/Card/Card'
import Comments from '../components/Comments/Comments'

const Detalhes = props => {
    
    const { id } = useParams()

    /** ############ CONTINUAR AQI############## */
    // Como está agora seria necessario chamar a api novamente, 
    // Arrumar isso
    // A maneira mais facil seria chamar os dados do comentario no componete

    //const comentario = todosComentarios.filter(c => c.filme === filme[0].nome)
    //const filme = filmes.filter(f => f.id === parseInt(id))    

    return (
        <div className='container'>
            <Title title="Confira agora" text="Detalhes do filme abaixo"></Title>
            <Card id={id}></Card>
            {/**
            <Comments comentarios={comentario} />
            */}
        </div>
    )
}

export default Detalhes
