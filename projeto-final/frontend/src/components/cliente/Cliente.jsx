import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Cliente = props => {
    return (
        <>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Seu nome" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSobrenome">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control type="text" placeholder="Sobrenome" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="CPF" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridCartao">
                    <Form.Label>Cartao</Form.Label>
                    <Form.Control type='text' placeholder="Cartao" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" placeholder="Cidade" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEstado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" placeholder="Estado" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type='text' placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3"> 
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>
                
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    )
}

export default Cliente