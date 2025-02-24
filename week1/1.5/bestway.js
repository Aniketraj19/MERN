// best way to use promises are with async function and await
// you cannot use only await it has to be wrapped in a async function
// what does await and async function do?
// it removes the need of .then and makes the code more managable and cleaner
// when do u need to call asyn function?
// // 99% of times these can be the answer-
// // network call
// // wait for sometime
// // read a file
// // database call

function asynAwait() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hello sir i am the resolved code");
    }, 10000);
  });
}

async function main(){
    const ans = await asynAwait();
    console.log(ans);
}

main();
