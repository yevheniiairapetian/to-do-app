import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import $ from 'jquery';

export const Navigation = () => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(username);
  const [showModal, setShowModal] = useState(!localStorage.getItem("username")); // Show modal only on first visit
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.getElementById("navProfilePic").src =
      localStorage.getItem("userImage") ||
      "https://th.bing.com/th/id/OIP.lvbbUeXuqJfLLn8UKNFoZgAAAA?w=138&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7";

    let storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setInputValue(storedUsername);
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };


  
  const handleSaveUsername = () => {
    const usernameRegex = /^[a-zA-Z0-9]{1,10}$/;
    if (usernameRegex.test(inputValue.trim())) {
      localStorage.setItem("username", inputValue.trim());
      setUsername(inputValue.trim());
      setIsEditing(false); // Instantly update
    } else {
      alert("Invalid username. Use 1-10 alphanumeric characters.");
    }
  };

  // Handle first-time setup (username & profile picture)
  const handleUserSetup = () => {
    const usernameInput = document.getElementById("usernameInput").value.trim();
    const imageFile = document.getElementById("userImage").files[0];
    const usernameRegex = /^[a-zA-Z0-9]{1,10}$/;
    let validTypes = ["image/jpeg", "image/png"];
    let maxSize = 500 * 1024;

    if (!usernameRegex.test(usernameInput)) {
      alert("Invalid username. Use 1-10 alphanumeric characters.");
      return;
    }

    if (imageFile && validTypes.includes(imageFile.type) && imageFile.size <= maxSize) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let imageData = e.target.result;
        localStorage.setItem("userImage", imageData);
        document.getElementById("navProfilePic").src = imageData;
      };
      reader.readAsDataURL(imageFile);
    }

    localStorage.setItem("username", usernameInput);
    setUsername(usernameInput);
    setInputValue(usernameInput);
    setShowModal(false);
  };

  // Search filtering logic
  const handleSearchChange = (event) => {
    let query = event.target.value.toLowerCase();
    setSearchQuery(query);
  
    if (query === "") {
      loadArchivedLists(); // Restore all lists when search is cleared
    } else {
      filterLists(query);
    }
  };

  const loadArchivedLists = () => {
  $(".row").empty(); // Clear existing lists
  let archivedLists = JSON.parse(localStorage.getItem("archivedLists")) || [];

  archivedLists.forEach(data => {
    createListElement(data.title, data.todos);
  });
};

  const filterLists = (query) => {
    $(".row").empty(); // Clear the existing lists
    let archivedLists = JSON.parse(localStorage.getItem("archivedLists")) || [];

    archivedLists.forEach((data) => {
      if (data.title.toLowerCase().includes(query) || data.todos.some(todo => todo.toLowerCase().includes(query))) {
        createListElement(data.title, data.todos);
      }
    });
  };

  return (
    <>
      {showModal && (
        <div className="modal" id="exampleModal6" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Set Username & Profile Picture</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <input type="text" id="usernameInput" maxLength="10" placeholder="Enter username" className="form-control" />

                <label className="mt-3">Upload Profile Picture (JPG/PNG, max 500KB):</label>
                <input type="file" id="userImage" accept=".jpg, .jpeg, .png" className="form-control" />
                <img id="imagePreview" src="https://th.bing.com/th/id/OIP.lvbbUeXuqJfLLn8UKNFoZgAAAA?w=138&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="rounded-circle mt-3" width="40" height="40" />
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleUserSetup}>Save</button>
                <button className="btn btn-success" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

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

            {/* Profile Picture */}
            <img id="navProfilePic" alt="Profile" className="pl-2 pr-2 rounded-circle" width="40" height="40" />

            {/* Editable Username */}
            <Navbar.Text id="signedInText" className="pl-2 pr-4" style={{ cursor: "pointer" }}>
              Signed in as:
              <span id="usernameContainer" onClick={handleEditClick}>
                {isEditing ? (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="form-control d-inline w-auto mx-2"
                    autoFocus
                    onBlur={handleSaveUsername} // Save immediately when losing focus
                  />
                ) : (
                  <span className="mx-2">{username}</span>
                )}
              </span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

