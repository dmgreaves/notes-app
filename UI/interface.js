document.addEventListener("DOMContentLoaded", function() {
  let notebook = new Notebook;

document.getElementById('create-note').addEventListener('click', function (event) {
  showForm();
});
document.getElementById('submit-note').addEventListener('click', function (event) {
  saveNote();
});

function hideForm() {
  document.getElementById("save-note").style.display = "none";
}

function showForm() {
  document.getElementById("save-note").style.display = "block";
}


function saveNote() {
  var titleInput = document.getElementById("titleInput").value;
  var textInput = document.getElementById("textInput").value;
  console.log(titleInput, textInput);
  notebook.create(titleInput, textInput);
  newupdateNotes(); //this will be moved and called when the show full note function is called
  hideForm();
  //listNote(textInput);
}

// function updateNotes () {
//     document.getElementById("newNote").innerHTML = "";
//     notebook.notes.forEach(function(element) {
//       div = document.createElement('div');
//       document.getElementById(`${num}`).innerHTML += element.title + '<br>';
//       document.getElementById(`${num}`).innerHTML += notebook.abbrev(element.text) + '<br>';
//     });
// }
var noteList = document.getElementById("newNote");
// helped by this: https://stackoverflow.com/questions/37796075/make-a-clickable-array-inside-javascript
function newupdateNotes() {
  document.getElementById("newNote").innerHTML = "";
  notebook.notes.forEach(function(note){
    var div = document.createElement('div');
    div.textContent = note.title;
    div.textContent += ": ";
    div.textContent += note.text;
    noteList.appendChild(div);
  });
}

noteList.addEventListener('click', function(event){
  if (event.target !== this) {
    console.log(event.target.textContent);
  }
});

function abbreviate(textInput){
  //abbreviates textInput to 20 characters
}

function listNote(textInput){
  //textInput >> call abbreviate(textInput) >> save to list id="abbreviated-list"
}
});


//
// div = document.createElement('div');
//   div.id = 'container';
//   div.innerHTML = 'Hi there!';
//   div.className = 'border pad';
//
//   document.body.appendChild(div);
// }, false);
