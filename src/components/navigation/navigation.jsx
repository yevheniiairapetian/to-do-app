import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from "react";
import './../../../src/bootstrap.min.css';

export const Navigation = () => {
    return (

        
            <>
              
                <Navbar expand="md" className="navbar sticky-top mb-3">
                  <Container className="nav-container" fluid>
                  <Navbar.Brand href="/">
                    <h3 className="ps-3 pt-2">To Do <small className="text-muted">List App</small></h3>

                </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-md`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md}`}>
                          Menu
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link href="/">Home</Nav.Link>
                          
                        </Nav>
                        <Form className="d-flex">
                          <Form.Control
                           type="search"
                           placeholder="Search for lists and to-dos"
                           className="me-2 search-input"
                           aria-label="Search"
                           id="searchField"
                          />
                          {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                        <Navbar.Text className="pl-4 pr-4">
                        Signed in as: <a href="#login">Guest</a>
                    </Navbar.Text>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
             
            </>
          );


        // <Navbar className="navbar sticky-top">
        //     <Container className="nav-container" fluid>
        //         <Navbar.Brand href="#home">
        //             <h3 className="ps-3 pt-2">To Do <small className="text-muted">List App</small></h3>

        //         </Navbar.Brand>
        //         <Navbar.Toggle />
        //         <Navbar.Collapse className="justify-content-end">
        //             <Navbar.Text className="pr-4">
        //                 Signed in as: <a href="#login">Guest</a>
        //             </Navbar.Text>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    
}