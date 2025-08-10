import React from "react";
import Sortable from "sortablejs";

import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
// import "./js/jquery.ui.touch-punch.min";
import { Navbar, Button, Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Accordions } from "../accordions/accordions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
// import './js/jquery.ui.touch-punch.min.js';
import { Footer } from "../footer/footer.jsx";
import { Navigation } from "../navigation/navigation.jsx";
import useSound from 'use-sound';
// import Sweep from './src/sweep.wav';
import { useSoundSettings } from './../soundContext/soundContext';
import noLists from './img/no-lists.svg';


export const ToDoView = () => {

  window.addEventListener("resize", () => {
    const isLandscape = window.innerWidth > window.innerHeight;
    const footer = document.querySelector("footer.footer");

    if (isLandscape && window.innerHeight < 500) {
      footer.style.display = "none"; // Hide if screen height shrinks
    } else {
      footer.style.display = "block"; // Show otherwise
    }


  });

  
function updateListPlaceholder() {
  const hasLists = $(".list-row .new-list").length > 0;
  $(".no-lists-placeholder").toggle(!hasLists);
}


  $(document).ready(function () {
  updateListPlaceholder();
});




  $(document).ready(function () {
    function updateToggleVisibility() {
        if (window.innerWidth <= 768) {
            $("#toggleViewBtn").show().text("Lists Expanded"); // Show with text
        } else {
            $("#toggleViewBtn").html('<p title="Expand lists"><svg width="24" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><g fill="#231f20"><path d="m20 5a1 1 0 0 0 -1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.29-3.29v2.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/><path d="m10.71 13.29a1 1 0 0 0 -1.42 0l-3.29 3.28v-2.57a1 1 0 0 0 -1-1 1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2h-2.58l3.29-3.29a1 1 0 0 0 0-1.42z"/></g></svg></p>'); // Show SVG icon on larger screens
        }
    }

    // Run on page load
    updateToggleVisibility();

    // Run on window resize
    $(window).on("resize", updateToggleVisibility);

    $("#toggleViewBtn").on("click", function () {
        if (window.innerWidth > 768) { // Toggle only if screen width > 768px
            let listContainer = $(".list-row");

            if (listContainer.hasClass("expanded-list-row")) {
                listContainer.removeClass("expanded-list-row");
                $(this).html('<p title="Expand lists"><svg viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><g fill="#231f20"><path d="m20 5a1 1 0 0 0 -1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.29-3.29v2.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/><path d="m10.71 13.29a1 1 0 0 0 -1.42 0l-3.29 3.28v-2.57a1 1 0 0 0 -1-1 1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2h-2.58l3.29-3.29a1 1 0 0 0 0-1.42z"/></g></svg></p>'); // Collapsed list icon
            } else {
                listContainer.addClass("expanded-list-row");
                $(this).html('<p title="Collapse lists"><svg viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/><g fill="#231f20"><path d="m19 9h-2.58l3.29-3.29a1 1 0 1 0 -1.42-1.42l-3.29 3.28v-2.57a1 1 0 0 0 -1-1 1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z"/><path d="m10 13h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.29-3.29v2.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0 -1-1z"/></g></svg></p>'); // Expanded grid icon
            }
        }
    });
});




$(document).ready(function () {
  $(".sortable").sortable({
    start: function () {
      clearTimeout(pressTimer); // Stop long press when dragging starts
    },
    stop: function () {
      saveLists(); // Save new order after dragging stops
    }
    

  });
  document.querySelectorAll(".sortable").forEach((list) => {
    new Sortable(list, {
        animation: 150, // Smooth dragging
        ghostClass: "sortable-placeholder", // Highlights the dragged item
        handle: ".drag-handle", // Only drag using handle
        onEnd: function () {
            saveLists(); // Save order changes
        }
    });
});


document.querySelectorAll(".list-row").forEach((list) => {
  new Sortable(list, {
      animation: 150, // Smooth dragging effect
      ghostClass: "sortable-placeholder-list", // Visual placeholder
      handle: ".drag-handle", // Restrict dragging to handle
      group: "lists", // Allows cross-list dragging
      onEnd: function () {
          saveLists(); // Save changes when dragging stops
      }
  });
});


});



$(document).ready(function () {
  $(".sortable").sortable({
    update: function () {
      saveLists();
    }
  });
  $(function () {





    document.querySelectorAll(".list-row").forEach((list) => {
      new Sortable(list, {
          animation: 150, // Smooth dragging effect
          ghostClass: "sortable-placeholder-list", // Visual placeholder
          handle: ".drag-handle", // Restrict dragging to handle
          group: "lists", // Allows cross-list dragging
          onEnd: function () {
              saveLists(); // Save changes when dragging stops
          }
      });
  });
  
  }
  );
})

$(document).ready(function () {



  $('#offcanvasNavbar-expand-md').on('hidden.bs.offcanvas', function () {
    let storedText = localStorage.getItem("searchTemp") || "";
    $("#searchField").val(storedText).trigger("input"); // Restore search after closing
  });

  // Prevent form submission reload
  $("#searchField").on("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents page reload
    }
  });

  $("#searchField").on("input", function () {
    let searchText = $(this).val().toLowerCase().trim();

    $(".new-list").each(function () {
      let listTitle = $(this).find(".list-title").text().toLowerCase();
      let matchFound = listTitle.includes(searchText);

      $(this).find("ol li").each(function () {
        let todoText = $(this).text().toLowerCase();
        if (todoText.includes(searchText)) {
          matchFound = true;
        }
      });

      // Show lists that match the search, hide others
      $(this).toggle(matchFound);
    });
  });
});


$(document).ready(() => {
  loadLists();
});




function saveLists() {
  let lists = [];
  $(".new-list").each(function () { // Preserve sorting order
    let title = $(this).find(".list-title").text().trim();
    let todos = [];

    $(this).find("ol li").each(function () {
      let cleanText = $(this).clone().children().remove().end().text().trim();
      todos.push({ text: cleanText, completed: $(this).hasClass("strike") });
    });

    lists.push({ title, todos });
  });

  localStorage.setItem("savedLists", JSON.stringify(lists)); // Save new order

}

function loadLists() {
  $('.row').empty(); // Clear existing lists before loading

  let savedLists = JSON.parse(localStorage.getItem('savedLists')) || [];

  savedLists.forEach(data => {
    createListElement(data.title, data.todos);
  });
}

function createListElement(title, todos) {
  let row = $('.row');
  let div = $("<div class='new-list col-lg-4 col-sm-12 col-md-6 mt-5 text-center'></div>");
  row.append(div);

  let dragHandle = $("<span class='drag-handle' title='Drag list'>☰</span>");
  let listTitle = $("<h4 class='list-title' contenteditable='true' title='Edit list name'>Untitled List</h4>").text(title);
  div.append(dragHandle);

  div.append(listTitle);




  let updateEdits = $('<p class="update">All your edits are automatically saved</p>').show();
  div.append(updateEdits);

  let form = $('<br><form></form>');
  div.append(form);

  let input = $('<input type="text" class="input-text" tabindex="1" placeholder="Feed Jelly Bean"/>');
  let typingTimeout;

  input.on("input", function () {
    let updateEdits = div.find(".update"); // Ensures the correct update element is targeted
    updateEdits.text("Waiting for edits..").show();

    clearTimeout(typingTimeout); // Prevent multiple timeouts stacking

    typingTimeout = setTimeout(() => {
      updateEdits.text("All your edits are automatically saved").show();
    }, 5000); // Waits 5 seconds before resetting
  });






  form.append(input);

  let btnClearInput = $('<div class="clear-input button" title="Clear input" data-bs-toggle="tooltip" data-bs-title="Click to clear the input field"><svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m20 18h6v2h-6z" transform="matrix(-1 0 0 -1 46 38)"/><path d="m24 26h6v2h-6z" transform="matrix(-1 0 0 -1 54 54)"/><path d="m22 22h6v2h-6z" transform="matrix(-1 0 0 -1 50 46)"/><path d="m17.0029 20a4.8952 4.8952 0 0 0 -2.4044-4.1729l7.4015-12.8271-1.7309-1-7.5758 13.126a5.6988 5.6988 0 0 0 -5.2433 1.5029c-3.7436 3.6111-3.4537 12.0532-3.44 12.4111a1 1 0 0 0 1 .96h14.9912a1 1 0 0 0 .6-1.8c-3.5397-2.6561-3.5983-8.1463-3.5983-8.2zm-5.0729-3.0029a3.11 3.11 0 0 1 3.0741 3.0029c0 .0381.0019.208.0168.4688l-5.8994-2.6236a3.8 3.8 0 0 1 2.8085-.8481zm3.5194 11.0029a5.2 5.2 0 0 1 -1.4494-3h-2a6.4993 6.4993 0 0 0 .9684 3h-2.2233a16.6166 16.6166 0 0 1 -.7451-4h-2a17.3424 17.3424 0 0 0 .6652 4h-2.6652c.031-1.8364.29-5.8921 1.8027-8.5527l7.533 3.35a13.0253 13.0253 0 0 0 2.2611 5.2027z"/><path d="m0 0h32v32h-32z" fill="none"/></svg></div>');
  div.append(btnClearInput);

  btnClearInput.on('click', function () {
    input.val('');
    saveLists();
    const audio = new Audio("/sweep.ogg");
    audio.preload = "auto"; // Adjust path if needed
    audio.play();

    $(this).find("svg").addClass("sweeping");

    // Remove animation after it finishes, so it can be triggered again
    setTimeout(() => {
      $(this).find("svg").removeClass("sweeping");
    }, 600);
  });

  let ol = $('<ol class="sortable sortable-placeholder"></ol>');
  div.append(ol);

  // Ensure this new list is sortable
  new Sortable(ol[0], { // Use [0] to pass the native DOM element
    animation: 150, // Smooth dragging
    ghostClass: "sortable-placeholder", // Visual placeholder when dragging
    handle: ".drag-handle", // Users can only drag via the handle
    group: "todos", // Allows moving to-dos between lists
    onEnd: function () {
        saveLists(); // Save order after dragging stops
    }
});



  let btnNewToDo = $('<div class="button button-add" data-bs-toggle="tooltip" data-bs-title="Click to add the new list item">Add a To-do</div>');
  div.append(btnNewToDo);

  // Update status when adding a to-do
  btnNewToDo.on('click', function () {
    let inputValue = input.val().trim();
    if (inputValue === '') {
      $('#exampleModal').show(600);
      return;
    }

    let li = createToDoElement(inputValue, false);
    ol.append(li);

    saveLists();
    let updateEdits = div.find(".update"); // Ensures the correct update element is targeted
    updateEdits.text("To-do was added!").show();

    // Automatically revert after 3 seconds
    setTimeout(() => {
      updateEdits.text("All your edits are automatically saved").show();
    }, 3000);

    input.val('');
  });



  let btnClearLi = $('<div class="clear-ul button" data-bs-toggle="tooltip" title="Delete all to-dos" data-bs-title="Click to delete all to-dos"><?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="20px" height="20px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12 10V17M8 10V17M19 9H22M19 14H22M19 19H21M16 6V16.2C16 17.8802 16 18.7202 15.673 19.362C15.3854 19.9265 14.9265 20.3854 14.362 20.673C13.7202 21 12.8802 21 11.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V6M2 6H18M14 6L13.7294 5.18807C13.4671 4.40125 13.3359 4.00784 13.0927 3.71698C12.8779 3.46013 12.6021 3.26132 12.2905 3.13878C11.9376 3 11.523 3 10.6936 3H9.30643C8.47705 3 8.06236 3 7.70951 3.13878C7.39792 3.26132 7.12208 3.46013 6.90729 3.71698C6.66405 4.00784 6.53292 4.40125 6.27064 5.18807L6 6" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg></div>');
  div.append(btnClearLi);

  // let saveEdits = $('<input type="button" class="save-edits" value="Save My Edits" data-bs-toggle="tooltip" data-bs-title="Click to save your edits"/>');
  // div.append(saveEdits);

  let deleteListButton = $('<div title="Delete this list" class="delete-list button">X</div>');
  div.append(deleteListButton);

  // Load saved to-dos for this list
  todos.forEach(todo => {

    if (!$("ol li").filter(function () { return $(this).text().trim() === todo.text.trim(); }).length) {
      let li = createToDoElement(todo.text, todo.completed);
      ol.append(li);

    }
  });

  listTitle.on("mousedown", function (event) {
    event.stopPropagation(); // Prevent the click from triggering a drag event
  });


  listTitle.on("input", function () {
    let updateEdits = div.find(".update");
    updateEdits.text("Editing..").show();

    clearTimeout(window.editTimeout);
    window.editTimeout = setTimeout(() => {
      updateEdits.text("Edits saved!").show();
    }, 3000);
  });


  listTitle.on("mousedown", function (event) {
    event.stopPropagation(); // Prevent the click from triggering a drag event
  });


  listTitle.on("focus", function () {
    $(this).data("previousValue", $(this).text().trim()); // Save previous title
  });

  listTitle.on("blur", function () {
    let previousValue = $(this).data("previousValue");
    let newValue = $(this).text().trim();

    if (newValue === "") {
      $(this).text(previousValue); // Restore previous title if empty
    }

    saveLists();
  });




  // Reset back to "All your edits are automatically saved" when the user clicks to edit again
  listTitle.on('click', function () {
    updateEdits.text("All your edits are automatically saved").show();
  });




  input.on("keydown", function (event) {
    if (event.key === "Enter") { // More modern way to check for Enter key
      event.preventDefault(); // Prevents form submission if inside a form
      btnNewToDo.click(); // Directly triggers click event
    }
  });

  btnClearLi.on('click', function () {
    let todoCount = ol.children("li").length;
    let updateEdits = div.find(".update"); // Ensure correct update text element

    if (todoCount === 0) {
      // Show "No to-dos found" modal
      $("#exampleModal3").show(600);
    } else {
      $('#exampleModal2').show(600);
      $("#confirmDeleteBtn").off("click").on("click", function () {
        ol.empty(); // Clear all to-do items
        saveLists(); // Save changes to localStorage

        // **Update text to "Edits saved!"**
        updateEdits.text("The list was cleared!").show();

        // **Automatically revert after 2 seconds**
        setTimeout(() => {
          updateEdits.text("All your edits are automatically saved").show();
        }, 2000);

        const audio = new Audio("/trash.mp3");
        audio.preload = "auto"; // Adjust path if needed
        audio.play();
        $("#exampleModal2").hide(600); // Hide modal after deletion
      });
    }
  });


  // saveEdits.on('click', function() {
  //   updateEdits.text("Edits saved").show();
  // });

  deleteListButton.on('click', function () {




    let listElement = $(this).closest(".new-list"); // Get the list to delete
    $("#exampleModal4").show(600); // Show the confirmation modal

    $("#confirmDeleteListBtn").off("click").on("click", function () {
      // Remove the list after confirming
      let savedLists = JSON.parse(localStorage.getItem("savedLists")) || [];
      let listTitle = listElement.find(".list-title").text().trim();

      savedLists = savedLists.filter(list => list.title !== listTitle);
      localStorage.setItem("savedLists", JSON.stringify(savedLists));

      listElement.remove(); // Remove from UI
                updateListPlaceholder()

      const audio = new Audio("/trash.mp3");
      audio.preload = "auto"; // Adjust path if needed
      audio.play();
      $("#deleteListModal").hide(600); // Hide the modal
      saveLists(); // Save updates

    });
  });

  $('.modal').on('click', function () {
    $('.modal').hide(700);
  });



  saveLists();
}

// Helper function to create a to-do item with an X-mark for deletion & long press cross-out
function createToDoElement(text, completed) {

  let li = $('<li></li>').text(text.trim());

  let editButton = $('<span title="Edit to-do" class="edit-todo"> <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none"><path d="M4 20h16v2H4zM4.293 16.293l11.293-11.293 3.414 3.414-11.293 11.293H4v-3.414zM19.707 6.293l-3.414-3.414 1.414-1.414 3.414 3.414z" fill="currentColor"/></svg></span>');

  let deleteButton = $('<span class="delete-todo" title="Delete this to-do">X</span>');
  deleteButton.on('click', function () {
    li.remove();
    saveLists();
  });

  let copyButton = $('<span title="Make a copy" class="copy-todo"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg></span>');

  copyButton.on('click', function () {
    // Grab the latest edited text from the DOM
    let updatedText = li.contents().not(copyButton).not(editButton).not(deleteButton).text().trim();
    
    let duplicatedLi = createToDoElement(updatedText, li.hasClass("strike")); // Copy latest text
    li.after(duplicatedLi); // Insert the cloned to-do after the original one
    saveLists();

    // Update status message
    let updateEdits = li.closest(".new-list").find(".update");
    updateEdits.text("To-do cloned!").show();

    // Revert back to "All your edits are automatically saved" after 2.8 sec
    setTimeout(() => {
      updateEdits.text("All your edits are automatically saved").show();
    }, 2800);
});



  li.append(copyButton);

  if (completed) {
    li.addClass("strike");
  }



  let updateEdits = $(".update"); // Select the update status element

  // Restore long press to strike through
  let pressTimer;
  li.on('mousedown touchstart', function (event) {
    pressTimer = setTimeout(function () {
      if (!$(event.target).hasClass("ui-sortable-helper")) { // Prevent strike if dragging
        li.toggleClass("strike");
        saveLists();
      }
    }, 500);
  }).on('mouseup touchend', function () {
    clearTimeout(pressTimer);
  }).on('mousemove touchmove', function () {
    clearTimeout(pressTimer); // Cancels long press if moving the item
  });


  li.on("focus", function () {
    $(this).data("previousValue", $(this).text().trim()); // Save previous to-do
  });

  editButton.on("click", function () {
    let existingInput = li.find(".edit-input");

    if (existingInput.length) {
      let newText = existingInput.val().trim();
      if (newText === "") {
        newText = li.data("previousValue"); // Restore previous value if empty
      }

      existingInput.remove();
      li.contents().filter(function () { return this.nodeType === 3; }).remove();
      li.prepend(newText);

      $(".update").text("Edits saved!").show();
      setTimeout(() => {
        $(".update").text("All your edits are automatically saved").show();
      }, 3000);

      saveLists();
      return;
    }

    let currentText = li.contents().not(editButton).not(deleteButton).text().trim();
    let input = $('<input type="text" class="edit-input" />').val(currentText);

    $(".update").text("Editing..").show();

    input.on("blur", function () {
      let newText = input.val().trim();
      if (newText === "") {
        newText = li.data("previousValue"); // Restore previous value if empty
      }

      input.remove();
      li.contents().filter(function () { return this.nodeType === 3; }).remove();
      li.prepend(newText);

      $(".update").text("Edits saved!").show();
      setTimeout(() => {
        $(".update").text("All your edits are automatically saved").show();
      }, 3000);

      saveLists();
    });

    input.on("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevents saving an empty to-do
        let newText = input.val().trim();
        if (newText === "") {
          newText = li.data("previousValue"); // Restore previous value if empty
        }

        input.remove();
        li.contents().filter(function () { return this.nodeType === 3; }).remove();
        li.prepend(newText);

        $(".update").text("Edits saved!").show();
        setTimeout(() => {
          $(".update").text("All your edits are automatically saved").show();
        }, 3000);

        saveLists();
      }
    });

    li.prepend(input);
    input.focus();
  });


  li.append(editButton).append(deleteButton);

  return li;
}

// **Update status when typing in the input field to add a to-do**
// **Update status when typing in the input field to add a to-do**
$(".input-text").on("input", function () {
  let updateEdits = $(this).closest(".new-list").find(".update");

  if ($(this).val().trim() === "") {
    updateEdits.text("All your edits are automatically saved").show();
  } else {
    updateEdits.text("Waiting for edits..").show();
  }
});

// **Ensure reset also happens when the sweep button is clicked**
$(".clear-input").on("click", function () {
  let parentList = $(this).closest(".new-list");
  parentList.find(".input-text").val(""); // Clear input field
  parentList.find(".update").text("All your edits are automatically saved").show(); // Reset status
});


// Ensure reset also happens when the sweep button is clicked



// **Enable Sorting for To-Dos**
$(function () {
  $(".sortable").sortable({
    connectWith: ".sortable", // Allows dragging between lists
    placeholder: "sortable-placeholder", // Makes empty lists recognizable as drop areas
    receive: function (event, ui) {
      saveLists(); // Save after an item is dropped into a new list
    }
  }).disableSelection();



});



function add() {

  let savedLists = JSON.parse(localStorage.getItem('savedLists')) || [];
  let newList = { title: "Untitled List", todos: [] };

  savedLists.push(newList);
  localStorage.setItem('savedLists', JSON.stringify(savedLists));

  createListElement(newList.title, newList.todos);
  updateListPlaceholder()

  $(".sortable").sortable({  // Reinitialize sortable after adding a list
    connectWith: ".sortable",
    placeholder: "sortable-placeholder",
    receive: function (event, ui) {
      saveLists();  // Save after an item moves into a new list
    }
  }).disableSelection();
}

return (
  // <>
  <div className="container-fluid app-container">
    <Navigation />
    <Accordions />

    <div onClick={add} className="button add-list ms-3" tabIndex="4"
      data-bs-toggle="tooltip" data-bs-title="Click to add the new list">
      Add a New List
    </div>

    <div className="toggle-view button" id="toggleViewBtn">
      Toggle View
    </div>
    <div className="no-lists-placeholder text-center mt-4" style={{ display: "none" }}>
  <img src={noLists} alt="No lists yet" />
  {/* <p>No lists here yet. Click “Add a New List” to get started!</p> */}
</div>
    <div className="row list-row">


    </div>
    <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title fs-5" id="exampleModalLabel">Heads-up</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className="dialog-paragraph">Please type in the new to-do and click <strong>"Add a To-do"
              button</strong> or press <strong>"Enter"</strong> key.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="button" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>




    </div>

    <div className="modal" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title fs-5" id="exampleModalLabel">Heads-up</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className="dialog-paragraph">No to-dos where found in this list. Try adding one!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="button" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal" id="exampleModal2" tabIndex="-1" aria-labelledby="deleteConfirmLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteConfirmLabel">Confirm Deletion</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete all to-dos in this list?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger" id="confirmDeleteBtn">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal" id="exampleModal4" tabIndex="-1" aria-labelledby="deleteConfirmLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteConfirmLabel">Confirm Deletion</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this list?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger" id="confirmDeleteListBtn">Delete</button>
          </div>
        </div>
      </div>
    </div>


  </div>
  //  <Footer />
  // </>
)
}