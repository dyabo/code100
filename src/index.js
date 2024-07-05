import imageSrc from "./100.png"; // Import the image file

function component() {
  const element = document.createElement("div");

  // Create an Image element and set its source
  const myImage = new Image();
  myImage.src = imageSrc; // Use the imported image URL as the src
  element.appendChild(myImage); // Append the image to the div element

  return element;
}

document.body.appendChild(component()); // Append the div element to the body

// TODO!!
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(
  24, //x center
  160, //y center
  30, //r
  0, //start angle
  Math.PI * 2, //end angle
  false, //drawn direction
);
ctx.fillStyle = "purple";
ctx.fill();
ctx.closePath();
