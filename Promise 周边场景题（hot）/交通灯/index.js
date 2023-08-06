const lightMap = {
  red: () => {
    console.log("red");
  },
  yellow: () => {
    console.log("yellow");
  },
  green: () => {
    console.log("green");
  },
};

// function turnLight(time, light, cb) {
//   setTimeout(() => {
//     lightMap[light] && lightMap[light]();
//     cb && cb();
//   }, time);
// }

// const run = () => {
//   turnLight(3000, "red", () => {
//     turnLight(2000, "yellow", () => {
//       turnLight(1000, "green", run);
//     });
//   });
// };

function turnLight(time, light) {
  return new Promise((resolve) => {
    setTimeout(() => {
      lightMap[light] && lightMap[light]();
      resolve();
    }, time);
  });
}

// const run = () => {
//   turnLight(3000, "red")
//     .then(() => turnLight(2000, "yellow"))
//     .then(() => turnLight(1000, "green"))
//     .then(() => run());
// };

const run = async () => {
  await turnLight(3000, "red");
  await turnLight(2000, "yellow");
  await turnLight(1000, "green");
  run();
};

run();
