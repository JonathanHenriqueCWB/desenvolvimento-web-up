import React from 'react'
import './Card.css'

/**Array de Objetos */
const filmes = [
    {
        "nome" : "vingadores",
        "duracao" : "2:30H",
        "foto" : "vingadores.png",
        "ano" : "2000",
        "genero" : "acao",
        "descricao" : "filme da marvel",
        "nota" : "10"
    },
    {
        "nome" : "vingadores",
        "duracao" : "2:30H",
        "foto" : "vingadores.png",
        "ano" : "2000",
        "genero" : "acao",
        "descricao" : "filme da marvel",
        "nota" : "10"
    },
    {
        "nome" : "vingadores",
        "duracao" : "2:30H",
        "foto" : "vingadores.png",
        "ano" : "2000",
        "genero" : "acao",
        "descricao" : "filme da marvel",
        "nota" : "10"
    }
]

const Card = props => {
    return (

        <div className="container text-center">
            <div className="row">

                {filmes.map(f =>                    
                    <div className="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{f.nome}</h5>
                                <p class="card-text">{f.duracao}</p>
                                <p class="card-text">{f.ano}</p>
                                <p class="card-text">{f.genero}</p>
                                <p class="card-text">{f.descricao}</p>
                                <p className="card-text">{f.nota}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div> 
                    </div>
                )}

            </div>
        </div>
    )
}

export default Card