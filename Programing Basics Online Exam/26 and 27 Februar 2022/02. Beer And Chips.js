function beerAndChips(input) {
  const beerPrice = 1.2;
  let name = input[0];
  let budget = Number(input[1]);
  let beerCount = Number(input[2]);
  let chipsCount = Number(input[3]);

  let beersPrice = beerPrice * beerCount;
  let chipPrice = beersPrice * 0.45;
  let chipsPrice = Math.ceil(chipPrice * chipsCount);
  let finalPrice = beersPrice + chipsPrice;
  let diff = Math.abs(finalPrice - budget);

  if (finalPrice <= budget) {
    console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
  }
}

beerAndChips(["George", "10", "2", "3"]);
beerAndChips(["Valentin", "5", "2", "4"]);
