document.addEventListener("DOMContentLoaded", function() {
//Might have issues here??
  let notebook = new Notebook;
  var noteList = document.getElementById("abbreviated-list");

  updateNotes();

document.getElementById('create-note').addEventListener('click', function (event) {
  showForm();
});
document.getElementById('submit-note').addEventListener('click', function (event) {
  saveNote();
});


// DISPLAY EMOJIS ON PAGE
//create new note

// display note on page once emoji has loaded
// setTimeout(function(){
//   document.getElementById("testing-emojis").innerHTML = notebook.notes[0].text;
// },1000);
//////////////////////////

function hideForm() {
  document.getElementById("save-note").style.display = "none";
}

function showForm() {
  document.getElementById("save-note").style.display = "block";
}


function saveNote() {
  // var titleInput = document.getElementById("titleInput").value;
  var textInput = document.getElementById("textInput").value;
  let index = window.localStorage.length;
  window.localStorage.setItem(index, JSON.stringify(textInput));
  //console.log(titleInput, textInput);
  //console.log(window.localStorage.getItem(index));
  // notebook.emojify(textInput);
  updateNotes(); //this will be moved and called when the show full note function is called
  hideForm();
  //listNote(textInput);
}
function parseNotes() {
    console.log(2);
    notebook.notes = []
    for (var i = 0; i < window.localStorage.length; i++) {
      let noteText = JSON.parse(window.localStorage.getItem(i));
      // Call emojify?
      notebook.emojify(noteText);
      console.log(3);
      console.log("-----");
      console.log(window.localStorage.length);
    }
    setTimeout(function(){
      printNotesInDivs();
    }, 500);
    console.log(4);
}

function updateNotes() {
  console.log(1);
    parseNotes();
    console.log(noteList.innerHTML);
}

function printNotesInDivs() {
  console.log(5);
  noteList.innerHTML = "";
  notebook.notes.forEach(function(note){
    console.log(6)
    var div = document.createElement('div');
    console.log(note.text);
    div.textContent += notebook.abbrev(note.text);
    div.title = note.text;
    noteList.appendChild(div);
  });
  console.log(7);
}

noteList.addEventListener('click', function(event){
   if (event.target !== this) {
     console.log(event.target.textContent);
     console.log(event.target.title);
     document.getElementById("full-text").innerHTML = event.target.title;
     }
   });

document.getElementById("return-button").addEventListener('click', function(event){
    location.reload();
     updateNotes();
 });
    //event.target.style.visibility = "hidden";

    // hide all the other div elements on the page (might need a container)
    // set a div container temporarily to the text of the event.target.title
    // show that div container

function listNote(textInput){
  //textInput >> call abbreviate(textInput) >> save to list id="abbreviated-list"
}
});
