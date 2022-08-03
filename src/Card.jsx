// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function MyCard(props) {
  var imgsrc=props.imgsrc;
  return (
    <Card className="myCards"   style={{ width: '18rem',backgroundColor: "#373b69" }}>
      <Card.Img variant="top" src={imgsrc}/>
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text >
        <Badge bg="success">
        Rating : {props.vote_average}
        </Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;