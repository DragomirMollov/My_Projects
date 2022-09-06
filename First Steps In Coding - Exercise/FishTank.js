function fishTank(input) {
  
    const lenght = Number(input[0]);
  const width = Number(input[1]);
  const height = Number(input[2]);
  const percentOfAcc = Number(input[3]) / 100;
  const aquariumTank = lenght * width * height;
  const litersOfTank = aquariumTank / 1000;
  const litersNeeded = litersOfTank * (1 - percentOfAcc);
  console.log(litersNeeded);
  
}

fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
