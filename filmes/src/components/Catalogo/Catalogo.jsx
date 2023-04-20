import React from 'react'
import {useState, useEffect} from 'react'
import './Catalogo.css'
// import filmes from '../../data/filmes'

const Assistido = props => props.javisto? <p className='text-success'>Filme já visto</p> : <p className='text-danger'>Ainda não visto</p>

const Card = props => {

    const cardStyle = { "minWidth" : "19rem", "maxWidth" : "19rem", "marginBottom" : "10px" }
    const [listaFilmes, setListaFilmes] = useState()

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
        .then(response => response.json())
        .then(data => setListaFilmes(data))
        .catch(err => console.error(err))
    }, [])

    console.log(listaFilmes)

    if(!listaFilmes){
        return <p>Carregando...</p>
    }


    return (        
        <div className="container text-center">
            <div className="row">
                {listaFilmes.map(f =>                    
                    <div className="col">
                        <div className="card" style={ cardStyle }>                            
                            {/*<img src={'/assets/images/' + f.foto} alt={f.titulo} className="card-img-top" style={{height: '380px'}} />*/}
                            <img src={f.poster} alt={f.titulo} className="card-img-top" style={{height: '380px'}} />
                            <div className="card-body">
                                <p className="card-text">Nome: {f.titulo}</p>
                                <p className="card-text">Ano: {f.ano}</p>
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