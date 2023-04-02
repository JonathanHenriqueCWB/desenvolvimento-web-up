import React from 'react'

const Toobar = () => {
    return (
        <div>
            <p>Utilizando </p>
            <Button message='Play movie...'>Play Movie</Button>
            <Button message='Please wait...'>Upload Image</Button>
        </div>
    )
}

const Button = props => {
    return(
        <button onClick={() => alert(props.message)}>{props.children}</button>
    )
}

export default Toobar