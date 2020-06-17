const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/authors");

//Describe our test.
describe("Nesting records", () => {
  beforeEach((done) => {
    mongoose.connection.collections.authors.drop(() => {
      done();
    });
  });

  //Create tests
  it("Creates an author in sub documents", (done) => {
    var pat = new Author({
      name: "Patrick",
      age: 32,
      books: [
        {
          title: "Name of the Wind",
          pages: 400,
        },
        {
          title: "Hello World",
          pages: 200,
        },
      ],
    });
    pat.save().then(() => {
      Author.findOne({ name: "Patrick" }).then((result) => {
        assert(result.books.length === 2);
        done();
      });
    });
  });

  it("Adds a book to an author", (done) => {
    var pat = new Author({
      name: "Patrick Rothfuss",
      age: 32,
      books: [
        {
          title: "Name of the Wind",
          pages: 400,
        },
        {
          title: "Hello World",
          pages: 200,
        },
      ],
    });
    pat.save().then(() => {
      Author.findOne({ name: "Patrick Rothfuss" }, (result) => {
        // Add a book to the books array.
        result.books.push({ title: "Wise Man's Fear", pages: 500 });
        result.save().then(() => {
          Author.findOne({ name: "Patrick Rothfuss" }).then((result) => {
            assert(result.books.length === 3);
            done();
          });
        });
      });
    });
  });
});
