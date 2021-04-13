document.addEventListener("DOMContentLoaded", function() {
  test = new Testing;
  let notebook = new Notebook();
  let errors = [];
// Add tests here
//test.saveTest("Describe your test", test.?????(,))
  try {
    test.saveTest("Notebook creates a new note", test.isInstance(notebook.create("Rio will be a star and Layla will follow"), Note));
    test.saveTest("New notes are saved into the notebook", test.isEqual(notebook.notes[0].text,"Rio will be a star and Layla will follow"));
    test.saveTest("Note text is abbreviated", test.isEqual(notebook.abbrev(notebook.notes[0].text),"Rio will be a sta..." ));
  } catch (err) {
    console.log(err);
    errors.push(err);
  }




// Prints Tests
  let result = test.printTests();
  document.getElementById("id").innerHTML = result;
  document.getElementById("error").innerHTML = errors.toString().replaceAll(',','');
});
