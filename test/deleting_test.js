const assert = require("assert");
const MarioChar = require("../models/mariokart.js");

//Describe test
describe("Deleting Records", () => {
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

  //Deleting records
  it("Delete one record from database", (done) => {
    MarioChar.findOneAndRemove({ name: "Mario" }).then(() => {
      MarioChar.findOne({ name: "Mario" }).then((result) => {
        assert(result === null); // UnhandledPromiseRejectionWarning: AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value
        done(); //Itu diatas artinya kondisi assert yang dimasukin ga sesuai makanya dia error wkwk
      });
    });
  });
});
