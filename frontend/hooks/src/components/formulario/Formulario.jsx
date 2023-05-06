import React, {useState} from 'react'

const Formulario = props => {

    // State
    const [nome, setNome] = useState ('')
    const [telefone, setTelefone] = useState ('')

    // Funções
    const handleNomeChange = event => setNome(event.target.value)
    const handleTelefoneChange = event => setTelefone(event.target.value)
    const handleSubmit = event => {
        event.preventDefault()
        // enviar dados do formulario para o servidor aqui...
        console.log(`nome ${nome} telefone ${telefone}`)
    }

    return (
        <div className='form-custom'>
            <h2>Formulario de cadastro</h2>
            <div>
                <form onSubmit={ handleSubmit }>
                    <div>
                        <label htmlFor="nome">Nome</label><br />
                        <input type="text" value={nome} onChange={handleNomeChange} />
                    </div>
                    <div>
                        <label htmlFor="telefone">Telefone</label><br />
                        <input type="phone" value={telefone} onChange={handleTelefoneChange} />
                    </div>
                    <div>
                        <br /><button type='subimit'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario