import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Movies from './Movies';
import { useGlobalContext } from './context';
// import { Outlet, Router } from "react-router-dom";
import { Link } from 'react-router-dom'
// import { LinkContainer } from 'react-router-bootstrap';

function MyNavBar() {

  const [text,setText]= useState("");


//  const handleKeyPress = (event) => {
//     if(event.key === 'Enter'){
//       clicked();
//     }
//   }

  const runbothfunc=(e)=>{
   setText(e.target.value);
  //  console.log(e.target.value);
    // clicked(); 
  }

  const searchfull="https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=";
  const searchgenre="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&with_genres=";
    const {movie, setMovie} = useGlobalContext();
    // const {fullapi}=searchfull+text;

  const clicked =async()=>{
    console.log(text);
    // alert("asdadsa");
          try{
          const res=await fetch(searchfull+text);
          const data=await res.json();
          console.log(data);
          setMovie([...data.results])
      }
      catch(e)
      {
        console.log(e);
      }
      // console.log(text);
  }


  async function getByGenre(e)
  {
    try{
      const res=await fetch(searchgenre+e);
      const data=await res.json();
      console.log(data);
      setMovie([...data.results])
  }
  catch(e)
  {
    console.log(e);
  }
    
  }


  return (
    <>
    {/* <Router> */}
    <Navbar className="navbar navbar-dark bg-dark" expand="lg">
      <Container fluid>
      {/* <LinkContainer to="/"> */}
        <Navbar.Brand  href="/" > Movies Hub </Navbar.Brand>
        {/* <Link className='navbar-brand' to='/'>Movies Hub</Link> */}
        {/* </LinkContainer> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="bg-dark" id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <LinkContainer to="/"> */}
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            {/* <Link className='nav-link' to="/">Home</Link> */}
            {/* </LinkContainer> */}
            {/* <LinkContainer to="/aboutus"> */}
            
            {/* <Link className='nav-link' to="/aboutus">About Us</Link> */}
            {/* </LinkContainer> */}
            <NavDropdown title="Genre" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => getByGenre(28)}>Action</NavDropdown.Item>
              <NavDropdown.Item onClick={() => getByGenre(16)}>Animation</NavDropdown.Item>
              <NavDropdown.Item onClick={() => getByGenre(35)}>Comedy</NavDropdown.Item>
              <NavDropdown.Item onClick={() => getByGenre(14)}>Fantasy</NavDropdown.Item>
              <NavDropdown.Item onClick={() => getByGenre(27)}>Horror</NavDropdown.Item>
              <NavDropdown.Item onClick={() => getByGenre(9648)}>Mystery</NavDropdown.Item>
              <NavDropdown.Item onClick={() => getByGenre(878)}>Sci-Fi</NavDropdown.Item>
              <NavDropdown.Item onClick={() => getByGenre(53)}>Thriller</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item> */}
            </NavDropdown>

            <Nav.Link as={Link} to="/aboutus" >About Us</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={text}
              onChange={runbothfunc}
              // onChange={clicked}
              // onKeyDown={}
            />
            <Button variant="outline-success" onClick={clicked} id="searchbtn">Search</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* </Router> */}
    </>
    
  );
}

export default MyNavBar;


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function MyNavBar() {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Movies Hub</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Trending</Nav.Link>
//             <Nav.Link href="#pricing">About Us</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default MyNavBar;