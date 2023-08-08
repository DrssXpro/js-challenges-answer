function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = function () {
      resolve("load");
    };
    image.onerror = function () {
      reject("image error");
    };
  });
}
