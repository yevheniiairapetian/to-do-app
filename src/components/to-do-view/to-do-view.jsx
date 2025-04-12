import React from "react";
import $ from 'jquery';
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


export const ToDoView = () => {

  $(document).ready(function () {
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

    $('.new-list').each(function () {
      let title = $(this).find('.list-title').text().trim();
      let todos = [];

      $(this).find('ol li').each(function () {
        let cleanText = $(this).clone().children().remove().end().text().trim();
        todos.push({ text: cleanText, completed: $(this).hasClass("strike") });
      });

      lists.push({ title, todos });
    });

    localStorage.setItem('savedLists', JSON.stringify(lists));
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

    let listTitle = $("<h4 class='list-title' contenteditable='true'></h4>").text(title);
    div.append(listTitle);

    let updateEdits = $('<p class="update">All your edits are automatically saved</p>').show();
    div.append(updateEdits);

    let form = $('<br><form></form>');
    div.append(form);

    let input = $('<input type="text" class="input-text" tabindex="1" placeholder="Feed Jelly Bean"/>');
    form.append(input);

    let btnClearInput = $('<div class="clear-input button" data-bs-toggle="tooltip" data-bs-title="Click to clear the input field"><svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m20 18h6v2h-6z" transform="matrix(-1 0 0 -1 46 38)"/><path d="m24 26h6v2h-6z" transform="matrix(-1 0 0 -1 54 54)"/><path d="m22 22h6v2h-6z" transform="matrix(-1 0 0 -1 50 46)"/><path d="m17.0029 20a4.8952 4.8952 0 0 0 -2.4044-4.1729l7.4015-12.8271-1.7309-1-7.5758 13.126a5.6988 5.6988 0 0 0 -5.2433 1.5029c-3.7436 3.6111-3.4537 12.0532-3.44 12.4111a1 1 0 0 0 1 .96h14.9912a1 1 0 0 0 .6-1.8c-3.5397-2.6561-3.5983-8.1463-3.5983-8.2zm-5.0729-3.0029a3.11 3.11 0 0 1 3.0741 3.0029c0 .0381.0019.208.0168.4688l-5.8994-2.6236a3.8 3.8 0 0 1 2.8085-.8481zm3.5194 11.0029a5.2 5.2 0 0 1 -1.4494-3h-2a6.4993 6.4993 0 0 0 .9684 3h-2.2233a16.6166 16.6166 0 0 1 -.7451-4h-2a17.3424 17.3424 0 0 0 .6652 4h-2.6652c.031-1.8364.29-5.8921 1.8027-8.5527l7.533 3.35a13.0253 13.0253 0 0 0 2.2611 5.2027z"/><path d="m0 0h32v32h-32z" fill="none"/></svg></div>');
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

    let ol = $('<ol class="sortable"></ol>');
    div.append(ol);

    let btnNewToDo = $('<div class="button button-add" data-bs-toggle="tooltip" data-bs-title="Click to add the new list item">Add a To-do</div>');
    div.append(btnNewToDo);

    let btnClearLi = $('<div class="clear-ul button" data-bs-toggle="tooltip" data-bs-title="Click to delete all to-dos"><?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --><svg width="20px" height="20px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12 10V17M8 10V17M19 9H22M19 14H22M19 19H21M16 6V16.2C16 17.8802 16 18.7202 15.673 19.362C15.3854 19.9265 14.9265 20.3854 14.362 20.673C13.7202 21 12.8802 21 11.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V6M2 6H18M14 6L13.7294 5.18807C13.4671 4.40125 13.3359 4.00784 13.0927 3.71698C12.8779 3.46013 12.6021 3.26132 12.2905 3.13878C11.9376 3 11.523 3 10.6936 3H9.30643C8.47705 3 8.06236 3 7.70951 3.13878C7.39792 3.26132 7.12208 3.46013 6.90729 3.71698C6.66405 4.00784 6.53292 4.40125 6.27064 5.18807L6 6" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg></div>');
    div.append(btnClearLi);

    // let saveEdits = $('<input type="button" class="save-edits" value="Save My Edits" data-bs-toggle="tooltip" data-bs-title="Click to save your edits"/>');
    // div.append(saveEdits);

    let deleteListButton = $('<div class="delete-list button">X</div>');
    div.append(deleteListButton);

    // Load saved to-dos for this list
    todos.forEach(todo => {

      if (!$("ol li").filter(function () { return $(this).text().trim() === todo.text.trim(); }).length) {
        let li = createToDoElement(todo.text, todo.completed);
        ol.append(li);

      }
    });

    listTitle.on('input', function () {
      updateEdits.text("Updates saved!").show();
      saveLists();
    });

    btnNewToDo.on('click', function () {
      let inputValue = input.val().trim();
      if (inputValue === '') {
        $('#exampleModal').show(600);
        return;
      }

      let li = createToDoElement(inputValue, false);
      ol.append(li);

      saveLists();
      updateEdits.text("Updates saved!").show();
      input.val('');
    });

    input.on("keydown", function (event) {
      if (event.key === "Enter") { // More modern way to check for Enter key
        event.preventDefault(); // Prevents form submission if inside a form
        btnNewToDo.click(); // Directly triggers click event
      }
    });

    btnClearLi.on('click', function () {
      let todoCount = ol.children("li").length;
      if (todoCount === 0) {
        // Show "No to-dos found" modal
        $("#exampleModal3").show(600);
      } else {
        $('#exampleModal2').show(600);
        $("#confirmDeleteBtn").off("click").on("click", function () {
          ol.empty(); // Clear all to-do items
          saveLists(); // Save changes to localStorage
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
    let li = $('<li></li>').text(text.trim()); // Trim to avoid unwanted characters
    if (completed) {
      li.addClass("strike");
    }

    // Add delete button
    let deleteButton = $('<span class="delete-todo">X</span>');
    deleteButton.on('click', function () {
      li.remove();
      saveLists();
    });

    // Handle long press for crossing out
    let pressTimer;
    li.on('mousedown touchstart', function () {
      pressTimer = setTimeout(function () {
        li.toggleClass("strike");
        saveLists();
      }, 500);
    }).on('mouseup touchend', function () {
      clearTimeout(pressTimer);
    });

    li.append(deleteButton);
    return li;
  }

  function add() {
    let savedLists = JSON.parse(localStorage.getItem('savedLists')) || []; // Load existing lists

    let newList = { title: "Untitled List", todos: [] }; // Define the new list
    savedLists.push(newList); // Add it to saved lists

    localStorage.setItem('savedLists', JSON.stringify(savedLists)); // Save all lists right away
    createListElement(newList.title, newList.todos); // Display the new list
  }

  return (
    <div className="container-fluid app-container">
      <Navigation />
      <Accordions />

      <div onClick={add} className="button add-list ms-3" tabindex="4"
        data-bs-toggle="tooltip" data-bs-title="Click to add the new list">
        Add a New List
      </div>
      <div class="row list-row">

      </div>
      <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title fs-5" id="exampleModalLabel">Notice</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="dialog-paragraph">Please type in the new to-do and click <em>"Add New To-do"
                button or press "Enter" key</em>.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="button" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>

        


      </div>

      <div class="modal" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title fs-5" id="exampleModalLabel">Notice</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="dialog-paragraph">No to-dos where found in this list. Try adding one!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="button" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
        </div>

      <div class="modal" id="exampleModal2" tabindex="-1" aria-labelledby="deleteConfirmLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteConfirmLabel">Confirm Deletion</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete all to-dos in this list?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-danger" id="confirmDeleteBtn">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="exampleModal4" tabindex="-1" aria-labelledby="deleteConfirmLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteConfirmLabel">Confirm Deletion</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete this list?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-danger" id="confirmDeleteListBtn">Delete</button>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}