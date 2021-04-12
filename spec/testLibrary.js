class Testing {
  constructor() {
  this.tests = [];
  }

  isEqual (a, b) {
    if (a === b) {
        return "Passed";
    } else {
        return "Failed";
    }
  };

  runTest (describe, test) {
    return [describe, test];
  }

  printTests() {
    let arr = this.tests;
    arr.map(function(element) {
      return console.log(element);
    });
  }

};
