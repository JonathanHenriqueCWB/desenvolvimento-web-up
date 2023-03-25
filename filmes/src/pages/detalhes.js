import React from 'react'
import { useParams } from 'react-router-dom'
import filmes from '../data/filmes'

import Title from '../components/Title/Title'

const Detalhes = props => {
    
    const { id } = useParams()

    return (
        <div className="container text-center" style={{width: "65rem"}}>
            <Title title="Página de detalhes" text="Confira agora mesmo"/>
            <div className="row">                  
                <div className="col">
                    <div className="card">                            
                        <div className="card-body">
                            <p>Nome: {filmes[id].nome}</p>
                            <p>Genero: {filmes[id].genero} Ano: {filmes[id].ano} Duração: {filmes[id].duracao} Nota: {filmes[id].nota}</p>
                            <p>{filmes[id].descricao}</p>
                        </div>
                        <img src={'/assets/images/' + filmes[id].banner} alt={filmes[id].nome} className="card-img-top" />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Detalhes