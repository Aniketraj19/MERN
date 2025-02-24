let fs = require("fs");

function reading(fn)
{
    fs.readFile("a.txt","utf-8",function(err , data){
        fn(data);
    });
}

function onDone(data)
{
    console.log(data);
}

reading(onDone);