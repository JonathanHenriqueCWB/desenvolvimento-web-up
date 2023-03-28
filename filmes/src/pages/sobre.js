import React from 'react'

import Title from '../components/Title/Title'
import SobreContent from '../components/Sobre/Sobre'

const Sobre = props => {
    return (
        <>  
            <Title title="Sobre nós" text="Conheça um pouco mais sobre a gente" />
            <SobreContent />
        </>
    )
}

export default Sobre