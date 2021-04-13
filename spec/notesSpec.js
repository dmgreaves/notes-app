test = new Testing
test.isEqual('Test', 'test');
let test1 = test.runTest("Checking that 3 is 3", test.isEqual(3,3));
let test2 = test.runTest("Checking that 2 is 2", test.isEqual(2,2));
test.tests.push(test1);
test.tests.push(test2);
test.printTests();
