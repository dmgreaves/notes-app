document.addEventListener("DOMContentLoaded", function() {
  test = new Testing;
// Add tests here
//test.saveTest("Describe your test", test.?????(,))
  test.saveTest("Checking that 3 is 3", test.isEqual(3,3));
  test.saveTest("Checking that 2 is 2", test.isEqual(2,2));
  test.saveTest("Checking that 5 is not 4", test.isNotEqual(5,4));
  test.saveTest("Testing if 1 is 1", test.isEqual(1,1));




// Prints Tests
  let result = test.printTests();
  document.getElementById("id").innerHTML = result;
});
