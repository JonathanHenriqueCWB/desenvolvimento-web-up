import React from 'react'
import './Card.css'
import filmes from '../../data/filmes'


const Card = props => {
    
    const cardStyle = {
        "minWidth" : "19rem",
        "maxWidth" : "19rem",
        "marginBottom" : "10px"
    }

    return (        
        <div className="container text-center">
            <div className="row">
                {filmes.map(f =>                    
                    <div className="col">
                        <div class="card" style={ cardStyle }>                            
                            <img src={'/assets/images/' + f.foto} alt={f.nome} className="card-img-top" style={{height: '380px'}} />
                            <div class="card-body">
                                <p class="card-text">Tempo estimado: {f.duracao}</p>
                                <p class="card-text">Genero: {f.genero}</p>
                                <p className="card-text">Nota: {f.nota}</p>
                                <a href={`/detalhes/${f.nome}`} class="btn btn-dark">Ver mais...</a>
                            </div>
                        </div> 
                    </div>
                )}

            </div>
        </div>
    )
}

export default Card