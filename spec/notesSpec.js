document.addEventListener("DOMContentLoaded", function() {
  test = new Testing;
  let note = new Note();
  let errors = [];
// Add tests here
//test.saveTest("Describe your test", test.?????(,))
  try {
    let note1 = new Note("Parrot 1", "Rio will be a star")
    let note2 = new Note("Parrot 1", "Rio will be a star", "Wed Apr 14 2021 14:59:02 GMT+0100 (British Summer Time)")
    // let test_date = new Date()
    test.saveTest("Creating a new note saves text", test.isEqual(note1.text, "Rio will be a star"))
    test.saveTest("Creating a new note saves title", test.isEqual(note1.title, "Parrot 1"))
    test.saveTest("Saves the date in the note", test.isInstance(note1.date, Date))
    test.saveTest("Formats the date correctly", test.isEqual(note2.formatDate(), "Wed-Apr-14-2021"))
    console.log(note2.formatDate())

  } catch (err) {
    console.log(err);
    errors.push(err);
  }




// Prints Tests
  let result = test.printTests();
  document.getElementById("id").innerHTML = result;
  document.getElementById("error").innerHTML = errors.toString().replaceAll(',','');
});
