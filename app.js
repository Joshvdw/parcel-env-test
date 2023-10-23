// Parcel Setup
const parceled = true;

// import { gsap } from "gsap";

import test from "./test.js";
import shaderPark from "./shaderPark.js";

const onReady = () => {
  test();
  shaderPark();
};

if (document.readyState !== "loading") {
  onReady();
} else {
  window.addEventListener("load", onReady);
}
