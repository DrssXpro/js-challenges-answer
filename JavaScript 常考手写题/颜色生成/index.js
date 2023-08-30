function genColor(isRGB) {
  return isRGB
    ? `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`
    : `#${randomNum(0, 255).toString(16).padStart(2, "0")}${randomNum(0, 255).toString(16).padStart(2, "0")}${randomNum(
        0,
        255
      )
        .toString(16)
        .padStart(2, "0")}`;

  function randomNum(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }
}

console.log(genColor(false));
