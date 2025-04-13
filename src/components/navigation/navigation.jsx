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

  window.onload = function () {
    let storedImage = localStorage.getItem("userImage") || "https://th.bing.com/th/id/OIP.lvbbUeXuqJfLLn8UKNFoZgAAAA?w=138&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7";     if (storedImage) {
        $("#navProfilePic").attr("src", "").attr("src", storedImage);
    }
};



  $(document).ready(function () {

    

let storedUsername = localStorage.getItem("username");
    

    if (!storedUsername) {
      $("#exampleModal6").show(600); // Show modal with animation
      $(".modal-backdrop").show(600); // Show backdrop manually
    } else {
      $("#signedInText").html(`Signed in as: <a href="/">${storedUsername}</a>`);
    }

    $("#saveUserData").click(function () {
      let username = $("#usernameInput").val().trim();
      let imageFile = $("#userImage")[0].files[0]; // Get uploaded file
      const usernameRegex = /^[a-zA-Z0-9]{1,10}$/;
      let validTypes = ["image/jpeg", "image/png"];
      let maxSize = 500 * 1024; // 500KB
    
      if (usernameRegex.test(username)) {
        if (imageFile && validTypes.includes(imageFile.type) && imageFile.size <= maxSize) {
          let reader = new FileReader(); // ✅ Declare reader before using it
          reader.onload = function (e) {
            let imageData = e.target.result;
            console.log("Image Data:", imageData); // Debugging step
            localStorage.setItem("userImage", imageData);
        
            $("#imagePreview").attr("src", imageData);
            $("#navProfilePic").attr("src", "").attr("src", imageData); // Force refresh
        };
          reader.readAsDataURL(imageFile);
        }
    
        localStorage.setItem("username", username);
        $("#signedInText").html(`Signed in as: <a href="/">${username}</a>`);
        $("#exampleModal6").hide(600);
        $(".modal-backdrop").hide(600);
      } else {
        $("#imageError").text("Invalid username. Use 1-10 alphanumeric characters.").show();
      }
    });

    // Handle username submission
    $("#saveUsername").click(function () {
      let username = $("#usernameInput").val().trim();
      const usernameRegex = /^[a-zA-Z0-9]{1,10}$/;

      if (usernameRegex.test(username)) {
        localStorage.setItem("username", username);
        $("#signedInText").html(`Signed in as: <a href="/">${username}</a>`);
        $("#exampleModal6").hide(600); // Hide modal smoothly
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
                <img 
        id="navProfilePic"
        src="https://th.bing.com/th/id/OIP.lvbbUeXuqJfLLn8UKNFoZgAAAA?w=138&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt="Profile"
        className="pl-2 rounded-circle"
        width="40"
        height="40"
      />
          <Navbar.Text id="signedInText" className="pl-2 pr-4">
                  Signed in as: <Nav.Link href="/"></Nav.Link>
                </Navbar.Text>
                {/* Profile Image */}
     
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </>

      

      <div class="modal" id="exampleModal6" tabindex="-1" aria-labelledby="usernameModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="usernameModalLabel">Enter Your Username & Upload Profile Picture (Optional)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" id="usernameInput" maxlength="10" placeholder="Max 10 characters" class="form-control" />

        <label for="userImage" class="mt-3">Upload Profile Picture (JPG/PNG, max 500KB):</label>
        <input type="file" id="userImage" accept=".jpg, .jpeg, .png" class="form-control" />
        <img id="imagePreview" src="https://th.bing.com/th/id/OIP.lvbbUeXuqJfLLn8UKNFoZgAAAA?w=138&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="rounded-circle mt-3" width="40" height="40" />
        <p id="imageError" class="text-danger mt-2" style={{display: "none"}}>Invalid file. Please upload a JPG/PNG under 500KB.</p>
      </div>
      <div class="modal-footer">
        <button id="saveUserData" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cancel</button>
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