import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="text-center" bg="success">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Cop</Card.Footer>
    </Card>
  );
}

export default Footer;