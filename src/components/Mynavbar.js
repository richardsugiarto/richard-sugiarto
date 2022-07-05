import React from "react";
import {Navbar,Nav,NavDropdown,Container} from "react-bootstrap";
import Scrollspy from 'react-scrollspy';
import "./Mynavbar.css"

function Mynavbar()
{
    return (<>
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
    <Container>
        <Navbar.Brand href="#home">RICHARD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
        
        <Scrollspy 
            className="scrollspy" items={ ['Home', 'About', 'Education', 'Resume','Skills','Publication', 'Contact'] } 
            currentClassName="active">   
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Education">Education</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Publication">Publication</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            
        </Scrollspy></Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    
    </>);
}

export default Mynavbar;