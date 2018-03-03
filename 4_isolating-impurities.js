
// One inpure function spoils the whole chain
"use strict";

// import x from "./3_mental-model.js";
// we're running in node, so can't use imports (ES6, browser) yet
const document = require("./4_dummy-HTML.js");
const cylinderArea = require("./3_mental-model.js");


function getDimensionsFromDOM(inputHeight, inputDiameter) {
  // encapsulate impurity => inpure logic is deferred
  return function impureGetDimensions() {
    let height = document[inputHeight];
    let diameter = document[inputDiameter];
    if (!diameter || !height) {
      return null;
    }
    return [height.value, diameter.value];
  }
}

const dimensions = getDimensionsFromDOM("inputHeight", "inputDiameter")