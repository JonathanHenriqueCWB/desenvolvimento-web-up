import React from 'react'
import {useState, useEffect} from 'react'

const CarregarPost = props => {

    const [listaPosts, setListaPosts] = useState()
    // const option = { method: 'GET' }

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
        .then(response => response.json())
        .then(data => setListaPosts(data))
        .catch(err => console.error(err))
    }, [])

    console.log(listaPosts)

    if(!listaPosts){
        return <p>Carregando...</p>
    }

    return(
        <div>
            <h2>Carregamento de Post</h2>
            <div>Dados: {listaPosts.map((post, index) => <div key={index}>{post.titulo}</div>)}</div>
        </div>
    )
}

export default CarregarPost