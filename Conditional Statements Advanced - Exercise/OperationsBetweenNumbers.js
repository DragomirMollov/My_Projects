function operationBetweenNumbers(input) {
  const N1 = Number(input[0]);
  const N2 = Number(input[1]);
  const operator = input[2];
  let result = 0;
  let oddOrEven = "";

  switch (operator) {
    case "+":
      result = N1 + N2;
      if (result % 2 == 0) {
        oddOrEven = "even";
      } else {
        oddOrEven = "odd";
      }
      console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
      break;

    case "-":
      result = N1 - N2;
      if (result % 2 == 0) {
        oddOrEven = "even";
      } else {
        oddOrEven = "odd";
      }
      console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
      break;

    case "*":
      result = N1 * N2;
      if (result % 2 == 0) {
        oddOrEven = "even";
      } else {
        oddOrEven = "odd";
      }
      console.log(`${N1} ${operator} ${N2} = ${result} - ${oddOrEven}`);
      break;

    case "/":
      result = N1 / N2;
      if (N2 == 0) {
        console.log(`Cannot divide ${N1} by zero`);
        break;
      } else {
        console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
      }
      break;

    case "%":
      result = N1 % N2;
      if (N2 == 0) {
        console.log(`Cannot divide ${N1} by zero`);
        break;
      } else {
        console.log(`${N1} % ${N2} = ${result}`);
      }
      break;
  }
}

operationBetweenNumbers(["10", "12", "+"]);
operationBetweenNumbers(["10", "1", "-"]);
operationBetweenNumbers(["7", "3", "*"]);
operationBetweenNumbers(["123", "12", "/"]);
operationBetweenNumbers(["10", "3", "%"]);
operationBetweenNumbers(["112", "0", "/"]);
operationBetweenNumbers(["10", "0", "%"]);
