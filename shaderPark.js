import { sculptToMinimalRenderer } from "shader-park-core";
import { spCode } from "./spCode.js";

export default function shaderPark() {
  // Create a canvas element
  const newCanvas = document.createElement("canvas");

  // Get the body element and append the canvas to it
  const body = document.body;
  body.appendChild(newCanvas);

  let canvas = document.querySelector("canvas");
  // This converts your Shader Park code into a shader and renders it to the my-canvas element
  sculptToMinimalRenderer(canvas, spCode);
}
