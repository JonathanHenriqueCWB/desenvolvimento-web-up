import React from 'react'

const Button = props => {

    function handleClick(){
        alert('You clicked me')
    }

    return(
        <div>
            <h1>Componente Button</h1>
            <p>Evento disparado pelo evento onClick</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={function handleClick(){
                alert('You clicked me')
            }}>Click me</button>
            <button onClick={f => alert('You cliked me')}>Click me</button>
        </div>
    )
}

export default Button