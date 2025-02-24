function some(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + i;
  }
  return sum;
}

function calling() {
  console.log(some(500));
}

setTimeout(calling, 4000);

const fs = require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("setTimeout is an async function that is provided by js");
console.log(
  "Which means that it does not wait for the task to be finished and does other things or it can delegate task to some other function and proceed i am last"
);
