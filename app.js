const mongoose = require("mongoose");

//ES6 Promises
mongoose.Promise = global.Promise;

// Connect to database before test run
before(async () => {
  // Before is used before the testing is ran. With the prerequisites are ready, test got run.
  //Connection
  mongoose.connect(
    "mongodb+srv://extillius:root123@cluster0-a7wze.mongodb.net/mario?retryWrites=true&w=majority"
  );

  mongoose.connection // Once the connection been made and it opened, notice the connection has been made
    .once("open", () => {
      console.log("Connection has been made.");
    })
    .on("error", () => {
      //If the connection has error, notice the connection is error.
      console.log("Connection Error because of ", error);
    });
});

beforeEach(async () => {
  //DROP THE COLLECTION BEFORE EVERY TEST. WITHOUT THIS, TEST WILL CAUSE SPAM ON MONGODB
  mongoose.connection.collection.MarioChar.drop((done) => {
    done();
  });
});
