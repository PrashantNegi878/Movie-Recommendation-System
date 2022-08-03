import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Movies from './Movies';
import { useGlobalContext } from './context';
import {Outlet, Link, Router } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

import { NavLink } from 'react-router-dom';

function MyNavBar2() {

  return (
    <>
    {/* <Router> */}
    <Navbar className="navbar navbar-dark bg-dark" bg="dark" expand="lg">
      <Container fluid>
      {/* <LinkContainer to="/"> */}
        <Navbar.Brand  href="/" >Movies Hub</Navbar.Brand>
        {/* </LinkContainer> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          {/* <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/aboutus">About Us</Link> */}
          {/* <LinkContainer to="/"> */}
            <Nav.Link as={Link} to="/"  >Home</Nav.Link>
            {/* </LinkContainer> */}
            {/* <LinkContainer to="/aboutus"> */}
            <Nav.Link as={Link} to="/aboutus" >About Us</Nav.Link>
            {/* <Link className='nav-link' to="aboutus">About Us</Link> */}
            {/* </LinkContainer> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* </Router> */}
    </>
    
  );
}

export default MyNavBar2;


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