import LoginAuth from '../components/login/Login'

const Login = props => {
    return (
        <>
            <h1>Por favor efetue o login antes de continuar</h1>
            <LoginAuth />
        </>
    )
}

export default Login

// Autenticação dependencias axios, jwt-decode
    // Criar arquivo de configrção do axios: services/api.js
    // Page de login redirecionando para o componente de login
    // no componente de login montar o formulario e chamar o axios OBS dados no localstorage