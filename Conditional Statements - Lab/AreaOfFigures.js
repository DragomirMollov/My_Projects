/*function areaOfFigures(input) {
    const type = input[0];
    // square, rectangle, circle или triangle

    if (type === "square") {
        const a = Number(input[1]);
        const result = a * a;
        console.log(result.toFixed(3));
    } else if (type === "rectangle") {
        const a = Number(input[1]);
        const b = Number(input[2]);
        const result = a * b;
        console.log(result.toFixed(3));
    } else if (type === "circle") {
        const r = Number(input[1]);
        const result = Math.PI * Math.pow(r, 2) // same as const result = Math.Pi * r * r
        console.log(result.toFixed(3));
    } else {
        const a = Number(input[1]);
        const b = Number(input[2]);
        const result = a * b /2;
        console.log(result.toFixed(3));
    }
}

areaOfFigures(["triangle", "4.5", "20"])*/

// after refactoring - remove the repetitive code
function areaOfFigures(input) {
  const type = input[0];
  let result = "";
  const a = Number(input[1]);
  // square, rectangle, circle или triangle

  if (type === "square") {
    result = a * a;
  } else if (type === "rectangle") {
    const b = Number(input[2]);
    result = a * b;
  } else if (type === "circle") {
    // const r = Number(input[1]); wiwill not r, becouse now is coming from a
    result = Math.PI * Math.pow(a, 2); // now r is change from input of a
    // same as const result = Math.Pi * r * r
  } else {
    const b = Number(input[2]);
    result = (a * b) / 2;
  }
  console.log(result.toFixed(3));
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
