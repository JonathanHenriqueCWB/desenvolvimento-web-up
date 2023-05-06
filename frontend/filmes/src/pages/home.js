import React from 'react'
import Search from '../components/Search/Search'

import Title from '../components/Title/Title'

const Home = props => {
    return (
        <>
            <Title title="Catalogo" text="Confira agora mesmo nosso catalogo de filmes"/>
            <Search />
        </>
    )
}

export default Home