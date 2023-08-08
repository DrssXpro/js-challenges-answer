// const sleep = (count) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(count);
//       resolve();
//     }, 1000);
//   });

// async function print() {
//   for (let i = 1; i <= 5; i++) {
//     await sleep(i);
//   }
// }

// print();

function run(count) {
  let timer = setTimeout(() => {
    console.log(count);
    clearTimeout(timer);
    count < 5 && run(count + 1);
  }, 1000);
}

run(1);
