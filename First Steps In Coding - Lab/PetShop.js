function petShop(input) {
  let dogsPackageFoods = input[0];
  let catsPackageFoods = input[1];
  let costDogsFoods = 2.5;
  let costCatFoods = 4;
  let totalCostDogsFoods = dogsPackageFoods * costDogsFoods;
  let totalCostCatFoods = catsPackageFoods * costCatFoods;
  let finallCost = totalCostDogsFoods + totalCostCatFoods;
  console.log(finallCost + ' lv.');
}

petShop(["5 ", "4 "]);
petShop(["13", "9"]);
