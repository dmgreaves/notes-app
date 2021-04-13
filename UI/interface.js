
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
  printFullNote(titleInput, textInput); //this will be moved and called when the show full note function is called
  hideForm();
  //listNote(textInput);
}

function printFullNote(titleInput, textInput) {
  var fullNote = "Title:" + titleInput + ", Text: " + textInput;
  document.getElementById("newNote").innerHTML = fullNote;
}

function abbreviate(textInput){
  //abbreviates textInput to 20 characters
}

function listNote(textInput){
  //textInput >> call abbreviate(textInput) >> save to list id="abbreviated-list"
}