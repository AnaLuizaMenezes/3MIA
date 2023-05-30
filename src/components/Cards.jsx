import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="massa.jpg" />
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="pao.jpg" />
      </Card>

      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="sla.jpg" />
      </Card>
    </div>
  );
}

export default CardExample;