import React from 'react'
import {useState, useCallback} from 'react'
import './Catalogo.css'
import filmes from '../../data/filmes'

const Assistido = props => props.javisto? <p className='text-success'>Filme já visto</p> : <p className='text-danger'>Ainda não visto</p>

const Card = props => {

    const cardStyle = { "minWidth" : "19rem", "maxWidth" : "19rem", "marginBottom" : "10px" }
    const [listaPosts, setListaPost] = useState()


    return (        
        <div className="container text-center">
            <div className="row">
                {filmes.map(f =>                    
                    <div className="col">
                        <div className="card" style={ cardStyle }>                            
                            <img src={'/assets/images/' + f.foto} alt={f.nome} className="card-img-top" style={{height: '380px'}} />
                            <div className="card-body">
                                <p className="card-text">Tempo estimado: {f.duracao}</p>
                                <p className="card-text">Genero: {f.genero}</p>
                                <p className="card-text">Nota: {f.nota}</p>
                                <Assistido javisto={f.assistido} />
                                <a href={`/detalhes/${f.id}`} className="btn btn-dark">Ver mais...</a>
                            </div>
                        </div> 
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card