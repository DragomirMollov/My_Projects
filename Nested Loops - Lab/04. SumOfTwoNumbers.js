function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let targetNum = Number(input[2]);
  let isFound = false;
  let counter = 0;

  for (let x = start; x <= end; x++) {
    for (let y = start; y <= end; y++) {
      counter++;
      let rezult = x + y;
      if (rezult === targetNum) {
        console.log(`Combination N:${counter} (${x} + ${y} = ${targetNum})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${targetNum}`);
  }
}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);
