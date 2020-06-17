const assert = require("assert");
const MarioChar = require("../models/mariokart.js");

//Describe test
describe("Updating Records", () => {
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

  //Update records
  it("Updates one record in the database", (done) => {
    MarioChar.findOneAndUpdate({ name: "Mario" }, { name: "Luigi" }).then(
      () => {
        MarioChar.findOne({ _id: char._id }).then((result) => {
          assert(result.name === "Luigi");
          done();
        });
      }
    );
  });

  //Update the props of schema with basic arithmetic and logic
  it("Increments the weight by 1", (done) => {
    MarioChar.update({}, { $inc: { weight: 1 } }).then(() => {
      MarioChar.findOne({ name: "Mario" }).then((result) => {
        assert(result.weight === 61);
        done();
      });
    });
  });
});
