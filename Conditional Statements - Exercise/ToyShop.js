function toyShop(input) {
  const puzzlePrice = 2.6;
  const talkinDollPrice = 3;
  const tedyBearPrice = 4.1;
  const minionPrice = 8.2;
  const truckPrice = 2;

  const vacantionPrice = Number(input[0]);
  const puzzleCount = Number(input[1]);
  const talkinDollCount = Number(input[2]);
  const tedyBearCount = Number(input[3]);
  const minionCount = Number(input[4]);
  const truckCount = Number(input[5]);

  const toyCount =
    puzzleCount + talkinDollCount + tedyBearCount + minionCount + truckCount;
  let totalCost =
    puzzleCount * puzzlePrice +
    talkinDollCount * talkinDollPrice +
    tedyBearCount * tedyBearPrice +
    minionCount * minionPrice +
    truckCount * truckPrice;

  if (toyCount >= 50) {
    totalCost *= 0.75;
    // totalCost = totalCost * 0.75 / discount 25%
  }

  totalCost *= 0.9;
  // totalCost = totalCost * 0.9 / 10% for rent

  const difference = Math.abs(totalCost - vacantionPrice); // 1 one:totalCost is mony left and 2 one:vacantionPrice is mony needed

  if (totalCost >= vacantionPrice) {
    console.log(`Yes! ${difference.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
