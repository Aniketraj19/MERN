function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}


function sumOfSomething(a,b,fn)
{
    console.log(a);
    console.log(b);
    console.log(fn);
    let value1 = fn(a);
    let value2 = fn(b);
    return value1 + value2;
}

console.log(sumOfSomething(3,4,cube)); //  this is one way of dooing it that is called the callback function
console.log(sumOfSomething(3,4,function (n) {
    return n * n;
  })); //  this is one way of dooing it that is called the anonymus

