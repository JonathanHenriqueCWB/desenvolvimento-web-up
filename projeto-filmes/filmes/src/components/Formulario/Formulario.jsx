import React from 'react'
import {useState} from 'react'

const Formulario = props => {

    // Dados do Usuario
        const [nome, setNome] = useState()
        const [telefone, setTelefone] = useState()
        const [endereco, setEndereco] = useState()

        const auterarNome = e => setNome(e.target.value)
        const auterarTelefone = e => setTelefone(e.target.value)
        const auterarEndereco = e => setEndereco(e.target.value)
    
    // Dados do Cartão
        const [nomeCartao, setNomeCartao] = useState() 
        const [numeroCartao, setNumeroCartao] = useState()
        const [cvc, setCvc] = useState()

        const auterarNomeCartao = e => setNomeCartao(e.target.value)
        const auterarNumeroCartao = e => setNumeroCartao(e.target.value)
        const auterarCvc = e => setCvc(e.target.value)

    // BTN Cadastrar
        const cadastrar = () => {
            let usuario = {
                'nome' : nome,
                'telefone': telefone,
                'endereco' : endereco,
                'nomeCartao' : nomeCartao,
                'numeroCartao' : numeroCartao,
                'cvc' : cvc
            }
            window.alert('Bem vindo: ' + usuario.nome)
        }



    return (
        <form className='container text-center' style={{color: "#fff"}}>
            <div className='row'>
                <div className='col-6'>
                    <h4 className='m-5'>Dados do Usuário</h4>
                    <div className='mt-5'>
                        <div class="form-group row mb-5">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Nome</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="nome" placeholder='Nome de usuario' value={nome} onChange={auterarNome}  />
                            </div>
                        </div>
                        <div class="form-group row mb-5">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Telefone</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="telefone" placeholder='Telefone' value={telefone} onChange={auterarTelefone} />
                            </div>
                        </div>
                        <div class="form-group row mb-5">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Endereço</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="endereco" placeholder='Endereço' value={endereco} onChange={auterarEndereco}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-6'>
                    <h4 className='m-5'>Dados do Cartão</h4>
                    <idv className='mt-5'>
                        <div class="form-group row mb-5">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Nome</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="nome-cartao" placeholder="Nome Cartão" value={nomeCartao} onChange={auterarNomeCartao} />
                            </div>
                        </div>
                        <div class="form-group row mb-5">
                            <label for="inputPassword" class="col-sm-2 col-form-label">N Cartão</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" id="numero-cartao" placeholder="Numero Cartão" value={numeroCartao} onChange={auterarNumeroCartao} />
                            </div>
                        </div>
                        <div class="form-group row mb-5">
                            <label for="inputPassword" class="col-sm-2 col-form-label">CVC</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="cvc" placeholder="CVC" value={cvc} onChange={auterarCvc} />
                            </div>
                        </div>
                    </idv>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <button type="button" class="btn btn-outline-success" onClick={cadastrar}>Cadastrar agora</button>
                </div>
            </div>
        </form>
    )
}

export default Formulario