function godzillaVsKong(input) {
  const budget = Number(input[0]);
  const stuntman = Number(input[1]);
  const costumesPerPerson = Number(input[2]);
  let costumesPrice = stuntman * costumesPerPerson

  const moviesDecor = budget * 0.1;
  let allMoney = 0;

  if (stuntman > 150) {
    costumesPrice *= 0.9;
    allMoney = costumesPrice + moviesDecor;
  } else {
    allMoney = costumesPrice + moviesDecor;
  }

  if (allMoney > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(allMoney - budget).toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(budget - allMoney).toFixed(2)} leva left.`
    );
  }
}

//godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
