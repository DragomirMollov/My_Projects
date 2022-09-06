function cace(input) {
  let index = 0;
  let lengthCace = Number(input[index]);
  index++;
  let withCace = Number(input[index]);
  let allCace = lengthCace * withCace;
  index++;
  let haveCace = true;
  let command = input[index];
  index++;

  while (command !== "STOP") {
    let sliceCace = Number(command);
    allCace -= sliceCace;
    if (allCace < 0) {
      haveCace = false;
      console.log(
        `No more cake left! You need ${Math.abs(allCace)} pieces more.`
      );
      break;
    }
    command = input[index];
    index++;
  }
  if (haveCace) {
    console.log(`${allCace} pieces are left.`);
  }
}
cace(["10", "10", "20", "20", "20", "20", "21"]);
cace(["10", "2", "2", "4", "6", "STOP"]);
