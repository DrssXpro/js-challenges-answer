const url = "www.baidu.com";

// com.baidu.www

function reverseUrl(url) {
  return url.split(".").reverse().join(".");
}

function reverseUrl(url) {
  const result = [];
  let current = "";
  let resultUrl = "";
  url += ".";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === ".") {
      result.push(current);
      current = "";
    } else {
      current += url[i];
    }
  }
  for (let i = result.length - 1; i >= 0; i--) {
    resultUrl += i === 0 ? result[i] : result[i] + ".";
  }
  return resultUrl;
}

console.log(reverseUrl(url));
