document.addEventListener("DOMContentLoaded", function() {
//Might have issues here??
  let notebook = new Notebook;
  var noteList = document.getElementById("newNote");

  updateNotes();

document.getElementById('create-note').addEventListener('click', function (event) {
  showForm();
});
document.getElementById('submit-note').addEventListener('click', function (event) {
  saveNote();
});


// DISPLAY EMOJIS ON PAGE
//create new note
notebook.emojify('title',':fire:')
// display note on page once emoji has loaded
setTimeout(function(){
  document.getElementById("testing-emojis").innerHTML = notebook.notes[0].text;
},1000);
//////////////////////////

function hideForm() {
  document.getElementById("save-note").style.display = "none";
}

function showForm() {
  document.getElementById("save-note").style.display = "block";
}


function saveNote() {
  var titleInput = document.getElementById("titleInput").value;
  var textInput = document.getElementById("textInput").value;
  let index = window.localStorage.length;
  window.localStorage.setItem(index, JSON.stringify(textInput));
  notebook.create(titleInput, textInput);
  updateNotes(); //this will be moved and called when the show full note function is called
  hideForm();

}
function parseNotes() {
  notebook.notes = []
  for (var i = 0; i < window.localStorage.length; i++) {
    let noteText = JSON.parse(window.localStorage.getItem(i));
    // Call emojify?
    notebook.create("", noteText);
  }
}

function updateNotes() {
  parseNotes();
  noteList.innerHTML = "";
  notebook.notes.forEach(function(note){
    var div = document.createElement('div');
    div.setAttribute("id", notebook.notes.indexOf(note))
    console.log("Updating")
    // div.textContent += ": ";
    div.textContent += notebook.abbrev(note.text);
    noteList.appendChild(div);
  });
}

noteList.addEventListener('click', function(event){
   if (event.target !== this) {
     //console.log(event.target.textContent);
     console.log(event.target.id);
     console.log(notebook.notes[event.target.id])
     //HIDE
     let num = event.target.id;
     document.getElementById("abbreviated-list").style.display = "none";
     document.getElementById("full-text").textContent = notebook.notes[num].text;
     document.getElementById("full-text").style.display = "block" ;
     }
   });

document.getElementById("allNote-button").addEventListener('click', function(event){

    updateNotes();
    console.log(document.getElementById("full-text").innerHTML)
    // location.reload();
    //console.log(document.getElementById("full-text").style.display)
    hideFullNote();
    showNotes();
 });

function listNote(textInput){
  //textInput >> call abbreviate(textInput) >> save to list id="abbreviated-list"
}

function hideNotes() {
  document.getElementById("abbreviated-list").style.display = "none";
  // document.getElementById("allNote-button").style.display = "block";
};
function showNotes() {
  document.getElementById("abbreviated-list").style.display = "block";
  // document.getElementById("allNote-button").style.display = "block";
};
function hideFullNote() {
  document.getElementById("full-text").style.display = "none";
  // document.getElementById("allNote-button").style.display = "none";
};
});
