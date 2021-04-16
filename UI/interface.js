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
  updateNotes(); //this will be moved and called when the show full note function is called
  hideForm();

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
    var list = document.createElement('LI');
    list.setAttribute("id", notebook.notes.indexOf(note))
    list.textContent += notebook.abbrev(note.text);
    noteList.appendChild(list);
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
