document.addEventListener("DOMContentLoaded", function() {
  test = new Testing;
  let notebook = new Notebook();
  let note = new Note();
  let errors = [];
// Add tests here
//test.saveTest("Describe your test", test.?????(,))
  try {
    test.saveTest("Checking that 3 is 3", test.isEqual(3,3));
    test.saveTest("Checking that 2 is 2", test.isEqual(2,2));
    test.saveTest("Checking that 5 is not 4", test.isNotEqual(5,4));
    test.saveTest("Testing if 1 is 1", test.isEqual(1,1));
    test.saveTest("notebook creates a new note", test.isInstance(notebook.create(), Note));
  } catch (err) {
    console.log(err);
    errors.push(err);
  }




// Prints Tests
  let result = test.printTests();
  document.getElementById("id").innerHTML = result;
  document.getElementById("error").innerHTML = errors.toString().replaceAll(',','');
});
