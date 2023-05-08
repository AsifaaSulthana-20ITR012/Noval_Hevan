import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
function Navigation2() {

  return (
    <div style={{ position: "fixed", zIndex: 2, width: "100%", height: "1px" }}>
      <Navbar expand='lg' variant='dark' id='nav-background' >
        <Navbar.Brand id='nav-name' href="/">Novel Haven</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='nav-content' href="/">Home</Nav.Link>
            <Nav.Link id='nav-content' href="/explore">Explore</Nav.Link> 
            <Nav.Link id='nav-content' href="/search">Digital Library</Nav.Link>   
             
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation2