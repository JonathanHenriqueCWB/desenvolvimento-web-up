import React from 'react'
import Catalogo from '../components/Catalogo/Catalogo'

import Title from '../components/Title/Title'

const Home = props => {
    return (
        <>
            <Title title="Catalogo" text="Confira agora mesmo nosso catalogo de filmes"/>
            <Catalogo></Catalogo>
        </>
    )
}

export default Home