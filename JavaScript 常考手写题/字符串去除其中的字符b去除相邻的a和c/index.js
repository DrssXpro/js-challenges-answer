function deleteSp(str) {
  return str.replace(/b/g, () => "").replace(/ac/g, () => "");
}

function deleteSp(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "b") continue;
    if (str[i] !== "c") stack.push(str[i]);
    if (stack.length && stack[stack.length - 1] === "a" && str[i] === "c") stack.pop();
  }
  return stack.join("");
}

console.log(deleteSp("abcdeacaaa"));
