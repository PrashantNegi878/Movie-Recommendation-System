// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

function MyCard3(props) {
  var imgsrc=props.imgsrc;
  var s="";
  var l=props.homepage.length;
  {props.genre.map((obj)=>(s+=obj.name+", "))}
  // var gnr=props.genres;
  // console.log(gnr);
  // var genres=props.genre.
  return (
    <Card className="myCards myCards3"   style={{ width: '40rem',backgroundColor: "#373b69" }}>
      {/* <Card.Img variant="top" src={imgsrc}/> */}
      <Card.Body >
        <Card.Title style={{color:'yellow'}}>{props.title}</Card.Title>
        
        <Card.Text style={{color:'#e8c66f'}} >
        "{props.tagline}"
        </Card.Text>
        <hr/>
        <Card.Text >
        <span className="colorleft">Rating </span>: <Badge bg="success">{props.vote_average.toFixed(1)} / 10 </Badge> based on  <Badge bg="dark">{props.vote_count}</Badge>  Votes.
        </Card.Text>
        <Card.Text >
        <span className="colorleft">Genre </span>: <span>{s.substring(0,s.length-2)}</span>
        </Card.Text>
        <Card.Text >
        <span className="colorleft">Release Date </span>: {props.release_date}
        </Card.Text>
        <Card.Text >
        <span className="colorleft">Runtime </span>: {props.runtime} Minutes
        </Card.Text>
        {/* <Card.Text > */}
        <Alert key="warning" variant="warning" style={{backgroundColor:"#373b69",color:"white"}}><span className="colorleft">Overview </span>: 
        {/* </Card.Text> */}
        <hr/>
        <Card.Text >
        {props.overview}
        </Card.Text>
        </Alert>
        <a  target="_blank" href={props.homepage} rel="noreferrer"><Badge bg="primary" >Know More</Badge></a>
      </Card.Body>
    </Card>
  );
}

export default MyCard3;