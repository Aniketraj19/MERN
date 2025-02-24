// let date = new Date;
// console.log(date.getTime());
// console.log(date.getYear());
// console.log(date.getFullYear());

// function counter()
// {
//     let date = new Date;
//     console.log(date.getHours()+" : "+date.getMinutes()+" : "+ date.getSeconds());
// }


// setInterval(counter , 1000);

let obj = {
    name:"Aniket",
    age:21,
    gender:"male"
}

let str = JSON.stringify(obj);

let str2 = JSON.parse(str);

console.log(str);
console.log(str2);
