import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from "react";
import './../../../src/bootstrap.min.css';
import $ from 'jquery';



export const Navigation = () => {

  

  $(document).ready(function () {

    
    let storedUsername = localStorage.getItem("username");

    if (!storedUsername) {
      $("#exampleModal5").show(600); // Show modal with animation
      $(".modal-backdrop").show(600); // Show backdrop manually
    } else {
      $("#signedInText").html(`Signed in as: <a href="/">${storedUsername}</a>`);
    }

    // Handle username submission
    $("#saveUsername").click(function () {
      let username = $("#usernameInput").val().trim();
      const usernameRegex = /^[a-zA-Z0-9]{1,10}$/;

      if (usernameRegex.test(username)) {
        localStorage.setItem("username", username);
        $("#signedInText").html(`Signed in as: <a href="/">${username}</a>`);
        $("#exampleModal5").hide(600); // Hide modal smoothly
        $(".modal-backdrop").hide(600); // Ensure backdrop is removed
      } else {
        $("#exampleModal6").show(600); // Show modal with animation

      }
    });

    // Handle Cancel button click: Set username to "Guest"
    $(".btn-success[data-bs-dismiss='modal']").click(function () {
      localStorage.setItem("username", "Guest"); // Set username as "Guest"
      $("#signedInText").html(`Signed in as: <a href="/">Guest</a>`);
      $("#exampleModal5").hide(600);
      $(".modal-backdrop").hide(600);
    });

    // Handle "X" button close without changing username
    $(".btn-close").click(function () {
      $("#exampleModal6").hide(600);
      $("#exampleModal5").hide(600);
      $(".modal-backdrop").hide(600);
    });
});

function loadArchivedLists() {
  $('.row').empty(); // Clear existing lists before loading

  let archivedLists = JSON.parse(localStorage.getItem('archivedLists')) || [];

  archivedLists.forEach(data => {
      createListElement(data.title, data.todos);
  });
} 



  return (

    <>
      <>

      
        <Navbar expand="md" className="navbar sticky-top mb-3">
      <Container className="nav-container" fluid>
        <Navbar.Brand href="/">
          <h3 className="ps-3 pt-2">
            To Do <small className="text-muted">List App</small>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
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
          <Navbar.Text id="signedInText" className="pl-4 pr-4">
                  Signed in as: <Nav.Link href="/"></Nav.Link>
                </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </>

      <div class="modal" id="exampleModal5" tabindex="-1" aria-labelledby="usernameModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="usernameModalLabel">Enter Your Username</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" id="usernameInput" maxlength="10" placeholder="Max 10 characters" class="form-control" />
            </div>
            <div class="modal-footer">
              <button id="saveUsername" class="btn btn-primary">Save</button>
              <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title fs-5" id="exampleModalLabel">Notice</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="dialog-paragraph">Invalid username! Use only letters & numbers <strong>(max 10 characters)</strong>.
              </p>
            </div>
            <div class="modal-footer">
              {/* <button type="button" class="button" data-bs-dismiss="modal">Close</button> */}
            </div>
          </div>
        </div>
      </div>


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