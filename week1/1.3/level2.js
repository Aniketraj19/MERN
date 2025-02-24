
console.log("CLASS");
class Animal {
  constructor(name, legcount,speaks) {
    this.name = name;
    this.legcount = legcount;
    this.speaks = speaks;
  }
//static method is associated to the class rather than the object. 
// It is not needed that the object has to be instanciated for this method to be called.
  static myType(){
    console.log("hello, I am an Animal and a static method"); 
  }

  speak(){
    console.log("hi there "+this.speaks);
  }
}
Animal.myType();
const dog = new Animal("dog",4,"bhow bhow");
dog.speak();


console.log("--------------------------------------------------------");

console.log("Date Class");

let currentDate = new Date();

console.log(currentDate.getTime());

// console.log("<-------------------Counter------------------------------>");
// function nowTime(){
//   let currDate = new Date();
//   console.log(currDate.getHours()+":"+currDate.getMinutes()+":"+currDate.getSeconds());
// }

// setInterval(nowTime,1000);

console.log("<-------------------JSON------------------------------>");

const user ={
  name:"Aniket Raj",
  age:24,
  gender:"male"
}

const u1 = JSON.stringify(user); // changes the data to string format as you cannot send object data

const u2 = JSON.parse(u1); // does the opposite of stringify i.e. changes the string format to object


console.log(u1);
console.log(u2.name);