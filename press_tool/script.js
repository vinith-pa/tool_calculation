"use strict";

function calculateEconomyFactor() {
  const data = document.forms["economicFactor"];

  const area = data.elements["area"].value;

  const rows = data.elements["noOfRows"].value;

  const stripWidth = data.elements["stripWidth"].value;

  const pitch = data.elements["pitch"].value;

  let result = 0;
  if (area != "" && rows != "" && stripWidth != "" && pitch != "") {
    result = (area * rows * 100) / (stripWidth * pitch);

    document.getElementById("result").innerText = result.toFixed(3);
  }
}
