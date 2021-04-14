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
  updateNotes(); //this will be moved and called when the show full note function is called
  hideForm();
  //listNote(textInput);
}

function updateNotes () {
    //var abText = notebook.abbrev(textInput);
    // clear div html???
    document.getElementById("newNote").innerHTML = "";
    notebook.notes.forEach(function(element) {
      document.getElementById("newNote").innerHTML += notebook.notes[notebook.notes.length-1].title + '<br>';
      document.getElementById("newNote").innerHTML += notebook.abbrev(notebook.notes[notebook.notes.length-1].text) + '<br>';
    });
    //document.getElementById("newNote").innerHTML += notebook.notes[notebook.notes.length-1].title + '<br>';
    //document.getElementById("newNote").innerHTML += abText + '<br>';
    //document.getElementById("newNote").innerHTML += notebook.notes[notebook.notes.length-1].text + '<br>';
}

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
