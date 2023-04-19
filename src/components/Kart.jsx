import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import race from "../assets/race.webp"
function Kart({link,image,name,description,date,city}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {date}
        </Card.Text>
        <Card.Title>
         {city}
        </Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <a href={link} target='_blank'>

        <Button className='mt-3' variant='outline-primary'>Daha fazla öğren</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Kart;