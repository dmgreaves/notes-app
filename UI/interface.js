document.addEventListener("DOMContentLoaded", function() {
  let notebook = new Notebook();
  var noteList = document.getElementById("abbreviated-list");
  updateNotes();

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
    var textInput = document.getElementById("textInput").value;
    let index = window.localStorage.length;
    window.localStorage.setItem(index, JSON.stringify(textInput));
    updateNotes();
    hideForm();
  }

  function parseNotes() {
      notebook.notes = [];
      for (var i = 0; i < window.localStorage.length; i++) {
        let noteText = JSON.parse(window.localStorage.getItem(i));
        notebook.emojify(noteText);
      }
      setTimeout(function(){
        printNotesInDivs();
      }, 500);
  }

  function updateNotes() {
      parseNotes();
  }

  function printNotesInDivs() {
    noteList.innerHTML = "";
    notebook.notes.forEach(function(note){
      var list = document.createElement('LI');
      list.setAttribute("id", notebook.notes.indexOf(note));
      list.textContent += notebook.abbrev(note.text);
      noteList.appendChild(list);
    });
  }

  noteList.addEventListener('click', function(event){
     if (event.target !== this) {
       let num = event.target.id;
       document.getElementById("abbreviated-list").style.display = "none";
       document.getElementById("full-text").textContent = notebook.notes[num].text;
       document.getElementById("full-text").style.display = "block" ;
       }
     });

  document.getElementById("allNote-button").addEventListener('click', function(event){
      updateNotes();
      hideFullNote();
      showNotes();
   });

  function hideNotes() {
    document.getElementById("abbreviated-list").style.display = "none";
  }

  function showNotes() {
    document.getElementById("abbreviated-list").style.display = "block";
  }
  
  function hideFullNote() {
    document.getElementById("full-text").style.display = "none";
  }
});
