import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    function vereficaAuth(){
        if(localStorage.getItem('nome')){
            return 'Bem vindo ' +  localStorage.getItem('nome')
        }else {
            return 'Usuario não logado'
        }
    }

    return (
    <Navbar bg="success" variant='light' expand="lg" style={{height: '80px', marginBottom: "50px"}}>
        <Container>
            <Navbar.Brand href="/">PetShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{vereficaAuth()}</a>
                    </Navbar.Text>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Header;