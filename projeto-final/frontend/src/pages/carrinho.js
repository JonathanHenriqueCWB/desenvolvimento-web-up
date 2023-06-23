import CarrinhoCheckout from '../components/Carrinho/Carrinho' 

const Carrinho = props => {
    return (
        <>
            <h2>Carrinho Page</h2>
            <p>Quando for chamar o Carrinho Componente (Checkout) verificar autorização</p>
            <CarrinhoCheckout />
        </>
    )
}

export default Carrinho