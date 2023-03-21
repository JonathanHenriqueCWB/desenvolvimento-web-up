import React from 'react'
import { useParams } from 'react-router-dom'
import filmes from '../data/filmes'

const Detalhes = props => {
    
    const { id } = useParams()

    return (
        <div className="container text-center" style={{width: "65rem"}}>
            <div className="row">                  
                    <div className="col">
                        <div class="card">                            
                            <div class="card-body">
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