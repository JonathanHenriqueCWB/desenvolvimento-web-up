import React from 'react'
import { useState, useEffect } from 'react'

const Card = props => {

    const [filme, setFilme] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/api/movies/${props.id}`)
        .then(response => response.json())
        .then(data => setFilme(data))
        .catch(err => console.error(err))
    })

    console.log("Resultado da sapi: " + filme)

    return (
        <div className='card-group' style={props.estilo}>
            <img src={filme.img} alt={filme.titulo} className="card-img-top" style={{width: "29rem"}} />
            <div className="card">                            
                <div className="card-body">
                    <p>TITULO: {filme.titulo}</p>
                    <p>ANO: {filme.ano}</p>
                    <p>NOTA: {filme.nota}</p>
                    <p>SINOPSE: {filme.sinopse}</p>
                    <p>ASSISTIDO: {filme.assistido}</p>
                </div>
            </div>
        </div>        
    )
}

/**
    <div className='card-group' style={props.estilo}>
        <img src={'/assets/images/' + filme[0].banner} alt={filme[0].nome} className="card-img-top" />
        <div className="card">                            
            <div className="card-body">
                <p>Nome: {filme[0].nome}</p>
                <p>Genero: {filme[0].genero} Ano: {filme[0].ano} Duração: {filme[0].duracao} Nota: {filme[0].nota}</p>
                <p>{filme[0].descsricao}</p>
                <p>{filme[0].descsricao}</p>
            </div>
        </div> 
    </div> 
*/

export default Card