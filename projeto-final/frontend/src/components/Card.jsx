import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const Cards = props => {

    function _arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }

    return (
        <CardGroup>
            {props.produtos.map(f =>                    
                <Card style={{minWidth: '300px', maxWidth: "300px", margin: '10px', border: '3px solid green', textAlign: 'center', color: "green" }}>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${_arrayBufferToBase64(f.foto.data.data)}`} style={{ height: '300px' }} />
                    <Card.Body>
                        <Card.Title>{f.nome}</Card.Title>
                        <Card.Text>{f.codigo}</Card.Text>
                        <Card.Text>{f.descricao}</Card.Text>
                        <Card.Text>{f.preco}</Card.Text>
                        <Card.Text>{f.animal}</Card.Text>
                        <Button variant="success">Adicionar ao carrinho</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            )}
        </CardGroup>
    );
}

export default Cards;