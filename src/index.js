import _ from "lodash";
import Puzzle from "./100.png";
import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported with a script
  element.innerHTML = _.join(["Hello", "code100"], " ");
  element.classList.add("image");

  const InnerLayer = new Puzzle();
  InnerLayer.src = Puzzle;

  element.appendChild(InnerLayer);

  return element;
}

document.body.appendChild(component());
