import imageSrc from "./100.png";
import data from "./data.json";

function component() {
  // variable to calculate result
  let dotsCoversImage = 0;

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
        dotsCoversImage++;
      }
    });
    alert(dotsCoversImage);
  };
  return canvas;
}

document.body.appendChild(component());
