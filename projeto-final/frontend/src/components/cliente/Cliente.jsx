import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import {useState} from 'react'
import api from '../../services/api'
import { useNavigate } from "react-router-dom";

const Cliente = props => {

    const navigate = useNavigate();

    // Controlando os estados do formulario
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [foto, setFoto] = useState('')

    const [cartao, setCartao] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')    

    // Teste file upload
    function handleImage(e){
        console.log(e.target.files[0])
        setFoto(e.target.files[0])
    }

    // Objeto que sera mandado na reques
    const bodyParam = {
        nome: nome, sobrenome: sobrenome, cpf: cpf, foto: foto, cartao: cartao,
        cartao: cartao, cidade: cidade, estado: estado, endereco: endereco,
        email: email, senha: senha
    }

    
    // REQUEST AO SERVIDOR COM AXIOS
    function handleSubmit(event) {

        event.preventDefault();

        console.log('Fronte ende. Formulario disparado com sucesso')
        console.log(bodyParam)

        api.post('/api/cliente/create', bodyParam).then((response) => {
            console.log(response.data)
            alert(" Token gerado para o usuario " + response.data.nome)
            localStorage.setItem("token", response.data.token);
            localStorage.setItem('pessoa', JSON.stringify(response.data));
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
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" value={nome} onChange={(e) => { setNome(e.target.value) }}  placeholder="Seu nome" />
                        <span>testNome: {nome}</span>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSobrenome">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="Sobrenome" />
                        <span>testSobrenome: {sobrenome}</span>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="CPF" />
                        <span>testCpf: {cpf}</span>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formFile">
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="file" onChange={e => setFoto(e.target.files[0])}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCartao">
                    <Form.Label>Cartao</Form.Label>
                    <Form.Control type='text' value={cartao} onChange={e => setCartao(e.target.value)} placeholder="Cartao" />
                    <span>testCartao: {cartao}</span>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" value={cidade} onChange={e => setCidade(e.target.value)} placeholder="Cidade" />
                        <span>testCidade: {cidade}</span>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEstado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" value={estado} onChange={e => setEstado(e.target.value)} placeholder="Estado" />
                        <span>testEstado: {estado}</span>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type='text' value={endereco} onChange={e => setEndereco(e.target.value)} placeholder="1234 Main St" />
                    <span>testEndereco: {endereco}</span>
                </Form.Group>

                <Row className="mb-3"> 
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                        <span>testEmail: {email}</span>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Password" />
                        <span>testSenha: {senha}</span>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">CADASTRAR</Button>
            </Form>
        </>
    )
}

export default Cliente