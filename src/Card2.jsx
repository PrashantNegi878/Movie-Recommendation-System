// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyCard2(props) {
  var imgsrc=props.imgsrc;
  return (
    <Card className="myCards myCards2"   style={{ width: '18rem',backgroundColor: "#373b69" }}>
      <Card.Img variant="top" src={imgsrc}/>
      {/* <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text >
          Rating : {props.vote_average}
        </Card.Text>
      </Card.Body> */}
    </Card>
  );
}

export default MyCard2;