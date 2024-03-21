import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../assets/images/hp.jpg';
import { FaEye } from "react-icons/fa";

function Basiccard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>PC hp</Card.Title>
        <Card.Text>
          hp i5 512ssd 8Go
        </Card.Text>
        <div>
        
        <Button variant="primary">Ajouter au panier</Button>
        <FaEye />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Basiccard;
