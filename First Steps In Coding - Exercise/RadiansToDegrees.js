function radiansToDegrees (input) {
    const radin = Number(input[0]);
    const degrees = (radin * 180) / Math.PI;
    console.log(degrees);
}

radiansToDegrees(["3.1416"]);
radiansToDegrees(["6.2832"]);