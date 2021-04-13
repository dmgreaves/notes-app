document.addEventListener("DOMContentLoaded", function() {
  test = new Testing;
  let note = new Note();
  let errors = [];
// Add tests here
//test.saveTest("Describe your test", test.?????(,))
  try {
    let note1 = new Note("Rio will be a star")
    test.saveTest("Creating a new note saves text", test.isEqual(note1.text, "Rio will be a star"))

  } catch (err) {
    console.log(err);
    errors.push(err);
  }




// Prints Tests
  let result = test.printTests();
  document.getElementById("id").innerHTML = result;
  document.getElementById("error").innerHTML = errors.toString().replaceAll(',','');
});
