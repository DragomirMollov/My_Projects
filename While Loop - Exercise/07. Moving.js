function moving(input) {
  let index = 0;
  let apartmentHeight = Number(input[index]);
  index++;
  let apartmentWidth = Number(input[index]);
  index++;
  let apartmentLenght = Number(input[index]);
  index++;

  let apartmentVolume = apartmentHeight * apartmentWidth * apartmentLenght;
  let haveSpace = true;
  let command = input[index];
  index++;

  while (command !== "Done") {
      let boxex = Number(command);
      apartmentVolume -= boxex;

      if ( apartmentVolume < 0) {
          haveSpace = false;
          console.log(`No more free space! You need ${Math.abs(apartmentVolume)} Cubic meters more.`);
          break;
      }
      command = input[index];
      index++;
  }
  if (haveSpace) {
      console.log(`${apartmentVolume} Cubic meters left.`);
  }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
