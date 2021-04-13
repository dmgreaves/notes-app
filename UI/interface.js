
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
  hideForm();
}
