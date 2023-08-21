console.log("  *");
console.log(" ***");
console.log("*****");

function print(num) {
  let space = "";
  let star = "";
  let count = 1;
  for (let i = 1; i <= num; i++) {
    for (let j = num - i; j > 0; j--) space += " ";
    for (let k = 0; k < count; k++) star += "*";
    console.log(space + star);
    space = "";
    star = "";
    count += 2;
  }
}
console.log("-------------");
print(10);
