const assert = require("assert");
const MarioChar = require("../models/mariokart.js");

//Describe test
describe("Saving records", () => {
  //Create tests
  it("Saves the record to database", (done) => {
    var char = new MarioChar({
      name: "Mario",
      weight: 20,
      gender: "Male",
    });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });

    // assert(2 + 3 === 5); // logical check on test, assert depends on the parameter, if its true the test is passed
  });
  //next test
});
