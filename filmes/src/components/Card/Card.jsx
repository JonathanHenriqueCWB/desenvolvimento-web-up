import React from 'react'

const Card = props => {

    const filme = props.filme

    return(
        <div className='card-group' style={props.estilo}>
            <img src={'/assets/images/' + filme[0].banner} alt={filme[0].nome} className="card-img-top" />
            <div className="card">                            
                <div className="card-body">
                    <p>Nome: {filme[0].nome}</p>
                    <p>Genero: {filme[0].genero} Ano: {filme[0].ano} Duração: {filme[0].duracao} Nota: {filme[0].nota}</p>
                    <p>{filme[0].descsricao}</p>
                </div>
             </div> 
        </div>
    )
}

export default Card