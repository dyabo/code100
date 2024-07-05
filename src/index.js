import imageSrc from "./100.png";
import data from "./data.json";
import {
  oneDimensions,
  zeroRadius,
  zeroWidth,
  firstZeroDimensions,
  secondZeroDimensions,
} from "./dimensions";

function isPointInsideFigures(x, y) {
  // check if the point is inside the "1"
  if (
    x >= oneDimensions.x &&
    x <= oneDimensions.x + 20 &&
    y >= oneDimensions.y &&
    y <= oneDimensions.y + oneDimensions.h
  ) {
    return true;
  }

  // check if the point is inside the first "0"
  const distanceToCenter1 = Math.sqrt(
    Math.pow(x - firstZeroDimensions.center, 2) +
      Math.pow(y - oneDimensions.h, 2),
  );
  if (
    distanceToCenter1 <= zeroRadius + zeroWidth &&
    distanceToCenter1 >= zeroRadius
  ) {
    return true;
  }

  // check if the point is inside the second "0"
  const distanceToCenter2 = Math.sqrt(
    Math.pow(x - secondZeroDimensions.center, 2) +
      Math.pow(y - oneDimensions.h, 2),
  );
  if (
    distanceToCenter2 <= zeroRadius + zeroWidth &&
    distanceToCenter2 >= zeroRadius
  ) {
    return true;
  }

  return false;
}

function component() {
  // variable to calculate result
  let dotsCoversImageTricky = 0;
  let dotsCoversImageTrue = 0;

  // creating base canvas layer
  const { width, height, coords } = data;
  const canvas = document.createElement("canvas");
  canvas.id = "myCanvas";
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");

  const myImage = new Image();
  myImage.src = imageSrc;

  myImage.onload = function () {
    // drawing image as a background
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    coords.map((point) => {
      const [x, y] = point;
      isPointInsideFigures(x, y) && dotsCoversImageTrue++;
      // getting background color data
      const [red, green, blue] = ctx.getImageData(x, y, 1, 1).data;
      const isBlack = red + green + blue === 0;
      ctx.beginPath();
      // drawing dots
      ctx.arc(x, y, 3, 0, Math.PI * 2, false);
      ctx.fillStyle = isBlack ? "yellow" : "purple";
      ctx.fill();
      ctx.closePath();
      // set the result
      if (isBlack) {
        dotsCoversImageTricky++;
      }
    });
    alert(`Tricky way ${dotsCoversImageTrue}`);
    alert(`Using formulae ${dotsCoversImageTrue}`);
  };
  return canvas;
}

document.body.appendChild(component());
