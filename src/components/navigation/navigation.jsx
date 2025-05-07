import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import $ from 'jquery';

export const Navigation = () => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "guest");
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(username);
  const [showModal, setShowModal] = useState(!localStorage.getItem("username")); // Show modal only on first visit
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteImageModal, setShowDeleteImageModal] = useState(false);
  const [userImage, setUserImage] = useState(localStorage.getItem("userImage") || "https://th.bing.com/th/id/OIP.lvbbUeXuqJfLLn8UKNFoZgAAAA?w=138&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7");
  const [showResetModal, setShowResetModal] = useState(false);

const handleResetApp = () => {
    localStorage.clear(); // Clears all saved data
    window.location.reload(); // Refresh the page to apply reset
};

// Button to trigger the reset confirmation modal
const handleOpenResetModal = () => {
    setShowResetModal(true);
};

// Close modal without resetting
const handleCancelReset = () => {
    setShowResetModal(false);
};
  const handleImageClick = () => {
      setShowDeleteImageModal(true); // Show modal when clicking profile picture or pencil icon
  };
  
  const handleDeleteImage = () => {
      localStorage.removeItem("userImage"); // Remove image from storage
      setUserImage("https://th.bing.com/th/id/OIP.lvbbUeXuqJfLLn8UKNFoZgAAAA?w=138&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7"); // Set placeholder
      setShowDeleteImageModal(false); // Close modal
  };
  
  // Determines whether to show pencil icon
  const showPencilIcon = userImage !== "https://th.bing.com/th/id/OIP.lvbbUeXuqJfLLn8UKNFoZgAAAA?w=138&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7";
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
      // showWrongUsernameModal();
    }
  };

  const handleUserSetup = (event) => {
    event.preventDefault(); // ✅ Stop unintended form submission

    const usernameInput = document.getElementById("usernameInput").value.trim();
    const imageFile = document.getElementById("userImage").files[0];
    const usernameRegex = /^[a-zA-Z0-9]{1,10}$/;
    let validTypes = ["image/jpeg", "image/png"];
    let maxSize = 500 * 1024; // 500KB limit

    // Validate username
    if (!usernameRegex.test(usernameInput)) {
        setUsername("guest");
        return;
    }

    // Validate image file
    if (imageFile) {
        if (!validTypes.includes(imageFile.type)) {
            $("#imageErrorMessage").text("Invalid file type! Only JPG and PNG are allowed.").show();
            $("#userImage").val(""); // Clear input field
            return;
        }

        if (imageFile.size > maxSize) {
            $("#imageErrorMessage").text("Error: Image size exceeds 500KB. Please choose a smaller file.").show();
            $("#userImage").val(""); // Clear input field
            return;
        }
    }

    // ✅ If validation passes, proceed with saving
    if (imageFile) {
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

    window.location.reload();
};

// ✅ Ensure event binding doesn't happen multiple times
$("#submitProfileBtn").off("click").on("click", handleUserSetup);

  

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
    
        {showResetModal && (
            <div className="modal" id="resetAppModal" style={{ display: "block" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title">Reset App</h6>
                            <button type="button" className="btn-close" onClick={handleCancelReset}></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to reset the app? This will remove all saved data.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={handleResetApp}>Reset</button>
                            <button className="btn btn-secondary" onClick={handleCancelReset}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    {showDeleteImageModal && (
        <div className="modal" id="deleteImageModal" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title">Delete Image</h6>
                        <button type="button" className="btn-close" onClick={() => setShowDeleteImageModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <p>You are about to delete your profile image. Are you sure?</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-danger" onClick={handleDeleteImage}>Delete</button>
                        <button className="btn btn-secondary" onClick={() => setShowDeleteImageModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )}
      {showModal && (
        <>
          <div className="modal" id="exampleModal6" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h6 className="modal-title">Set Username & Profile Picture</h6>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <label className="mt-3 mb-1">Enter Username <em></em> <br />(Use 1-10 alphanumeric characters.):</label>

                  <input type="text" id="usernameInput" maxLength="10" placeholder="Enter username" className="form-control" />

                  <label className="mt-3 mb-1">
  Upload Profile Picture <em>(optional)</em> <br />
  (JPG/PNG, max 500KB):
</label>
<input type="file" id="userImage" accept=".jpg, .jpeg, .png" className="form-control" />
<p id="imageErrorMessage" class="text-danger" style={{ display: "none" }}></p>

                  <img id="imagePreview" src="https://th.bing.com/th/id/OIP.lvbbUeXuqJfLLn8UKNFoZgAAAA?w=138&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="rounded-circle mt-3" width="40" height="40" />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-primary" onClick={handleUserSetup}>Save</button>
                  <button className="btn btn-success" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </div>
            </div>
          </div>

         
        </>
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
           {/* Profile Picture (Now Clickable) */}
        <div style={{ position: "relative", display: "inline-block" }}>
            <img 
                id="navProfilePic" 
                src={userImage}
                alt="Profile" 
                className="pl-2 pr-2 rounded-circle" 
                width="40" 
                height="40"
            />

            {/* Pencil Icon (Only Show When Profile Picture Exists) */}
            {showPencilIcon && (
              <svg onClick={handleImageClick} 
              style={{ position: "absolute", right: "10px", bottom: "0", cursor: "pointer" }} width="16px" height="16px" viewBox="0 0 24 24" fill="none"><path d="M4 20h16v2H4zM4.293 16.293l11.293-11.293 3.414 3.414-11.293 11.293H4v-3.414zM19.707 6.293l-3.414-3.414 1.414-1.414 3.414 3.414z" fill="currentColor"/></svg>
                
            )}
        </div>

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
               {/* Reset App Button */}
        <button className="btn btn-warning" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }} onClick={handleOpenResetModal}>
            Reset App
        </button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

