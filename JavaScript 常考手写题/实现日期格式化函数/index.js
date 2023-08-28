function format() {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let second = date.getSeconds();

  console.log(year, month, day, hour, min, second);
}

format();
