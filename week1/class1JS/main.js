// let a = [1,2,3,4,5,0,60,7,11,100,20,10,900,80,22];
// let y=a[0];
// console.log(a[0]);
// for(let x = 1;x<a.length;x++)
// {
//     if(y<a[x])
//     {
//         y=a[x];
//     }
// }
// console.log(y);


// objects

        // const obj1 = {
        //     firstName : "Aniket",
        //     lastname : "raj"
        // }

        // console.log(obj1["firstName"]);

// Array of objects

const allUsers = [{
    firstName: "aniket",
    gender:"male"
},{
    firstName:"Dhananjay",
    gender:"male"
},{
    firstName:"Bhalu",
    gender:"female"
}]

for(let i=0;i<allUsers.length;i++)
{
    if(allUsers[i]["gender"] == "female")
    {
        console.log(allUsers[i]["firstName"]);
    }
}


// let sum = 0;
// for (let x = 0;x<1000000000000;x++)
// {
//     sum = sum +x;
// }
// console.log(sum);