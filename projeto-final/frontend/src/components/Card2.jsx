import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Card2 = props =>  {

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

    <>

{props.produtos.map(f =>                    
            <Card style={{ width: '18rem' }}>
                <div className="card">
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${_arrayBufferToBase64(f.foto.data.data)}`} />
                    <Card.Body>
                        <Card.Title>{f.nome}</Card.Title>
                        <Card.Text>{f.codigo}</Card.Text>
                        <Card.Text>{f.descricao}</Card.Text>
                        <Card.Text>{f.preco}</Card.Text>
                        <Card.Text>{f.animal}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </div> 
            </Card>
        )}

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    </>


    



  )
}

export default Card2;