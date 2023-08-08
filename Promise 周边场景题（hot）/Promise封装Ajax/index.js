function request(url, options) {
  const xhr = new XMLHttpRequest();
  const { method, data, query } = options;

  return new Promise((resolve, reject) => {
    url = handleQuery(url, query);
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response);
      }
    };

    xhr.onerror = function () {
      reject({ status: xhr.status, statusText: xhr.statusText });
    };

    xhr.send(JSON.stringify(data));
  });

  function handleQuery(url, query) {
    const queryList = [];
    for (const key in query) {
      queryList.push(`${key}=${query[key]}`);
    }
    url += "?" + queryList.join("&");
    return url;
  }
}

request("http://www.baidu.com", {
  method: "GET",
  query: {
    page: 1,
    pageSize: 10,
  },
  data: {
    a: 1,
  },
});
