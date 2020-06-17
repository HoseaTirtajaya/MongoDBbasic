const assert = require("assert");
const MarioChar = require("../models/mariokart.js");

//Describe test
describe("Saving records", () => {
  var char;

  beforeEach((done) => {
    char = new MarioChar({
      name: "Mario",
      weight: 60,
      gender: "Male",
    });

    char.save().then(() => {
      done();
    });
  });

  //Finding records
  it("Finds one record from database", (done) => {
    // MarioChar.find({}); // leaving the parameter empty will take all records from collection.
    MarioChar.findOne({ name: "Mario" }).then((result) => {
      //   console.log(result);
      assert(result.name === "Mario");
      done();
    });
  });

  it("Finds one record by id from database", (done) => {
    MarioChar.findOne({ _id: char._id }).then((result) => {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
