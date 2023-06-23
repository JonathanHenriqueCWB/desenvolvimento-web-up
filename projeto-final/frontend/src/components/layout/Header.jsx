import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState, useEffect} from 'react'

function Header() {

    let nomePessoa = localStorage.getItem('pessoa');
    let objetoPessoa = JSON.parse(nomePessoa) || 'Logue para continuar'

    const notUser = {'nome' : 'Faça login'}
    const [usuario, setUsuario] = useState(objetoPessoa.nome);

    useEffect(() => {
		//setUsuario(objetoPessoa.nome)
	}, [nomePessoa])

    return (
    <Navbar bg="success" variant='light' expand="lg" style={{minHeight: '80px', marginBottom: "50px"}}>
        <Container>
            <Navbar.Brand href="/">PetShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/usuario">Usuario</Nav.Link>
                    <Nav.Link href="/carrinho">Cart</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Navbar.Text>
                        <a href="/login">{usuario}</a>
                    </Navbar.Text>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Header;