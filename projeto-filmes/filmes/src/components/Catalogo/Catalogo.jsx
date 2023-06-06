import React from 'react'

const Assistido = props => props.javisto? <p className='text-success'>Filme já visto</p> : <p className='text-danger'>Ainda não visto</p>

const Card = props => {

    const cardStyle = { "minWidth" : "19rem", "maxWidth" : "19rem", "marginBottom" : "10px" }    
    return (        
        <>
            <div className="container text-center">
                <div className="row">
                    {props.lista.map(f =>                    
                        <div className="col">
                            <div className="card" style={ cardStyle }>                            
                                <img src={f.img} alt={f.titulo} className="card-img-top" style={{height: '380px'}} />
                                <div className="card-body">
                                    <p className="card-text">Nome: {f.titulo}</p>
                                    <p className="card-text">Ano: {f.ano}</p>
                                    <p className="card-text">Nota: {f.nota}</p>
                                    <p className="card-text">ID: {f._id}</p>
                                    <Assistido javisto={f.assistido} />
                                    <a href={`/detalhes/${f._id}`} className="btn btn-dark">Ver mais...</a>
                                </div>
                            </div> 
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Card