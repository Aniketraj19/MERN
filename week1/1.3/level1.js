// strings
console.log("STRINGS");

let value = "    hello myname is aniket raj      "

value = value.trim();
console.log(value);
console.log(value.slice(3,9));
console.log(value.substr(2,6));
console.log(value.split(" "));
console.log("------------------------------------------------------------------");

// number
console.log("NUMBERS");

let num = 56.176;

console.log(parseInt(num));
console.log(parseFloat(num));

console.log("------------------------------------------------------------------");

// Arrays
console.log("Arrays");

let initialArr = [1,2,3];
initialArr.push(3);
initialArr.pop(3);
initialArr.shift(); //removes the first element from the array
initialArr.unshift(0); // add the element to the front of the array

console.log(initialArr);

