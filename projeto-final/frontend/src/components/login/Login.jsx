import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from '../../services/api';

const Login = props => {

    // Estado para os campos do formulario
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Navegação
    const navigate = useNavigate();
    
    // Função que nem deus sabe o que faz
    function handleSubmit(event) {
        event.preventDefault();

        const bodyParam = { email: email, senha: senha }

        api.post('/api/login', bodyParam).then((response) => {
            console.log(response.data)
            alert(" Token gerado para o usuario " + response.data.nome)
            localStorage.setItem("token", response.data.token);
            localStorage.setItem('nome', response.data.nome)
            navigate("/");
        }).catch((err) => {
            console.error(err.response.data) // Objeto de erro vindo do axios
            alert(" Ocorreu um erro! " + err.response.data.error)
        }).finally(() => {
            setEmail("")
            setSenha("")
        })
    }

    return (
        <div className="container text-center">
        <div className="row">
            <div className="form-custom">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            Email:
                            <input type="text" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </label>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>
                            Senha:
                            <input type="password" className="form-control" value={senha} onChange={(e) => { setSenha(e.target.value) }} />
                        </label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login