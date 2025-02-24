// what is promise?
// it is just a class that make the async functions and callbacks more readable.
// how to make promises?
// can make a varibale with new Promise with the first argument as a function and whose 1st argumnet is resolve

let fs = require("fs");

function wrapped() {
  console.log("inside wrapped");
  return new Promise(function (resolve) {
    console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("before reading the file");
      resolve(data);
    });
  });
}

function onDone(data) {
  console.log(data);
}

wrapped().then(onDone);
