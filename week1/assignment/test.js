function time() {

  return new Promise(function (resolve) {
    setTimeout(function () {
        const d = new Date();
      resolve(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    }, 1000);
  });
}

async function main(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    console.log(await time());
  }
}

main(10);