function fooddelivery(input) {
  //Menu
  const chickenMenuPrice = 10.35;
  const fishMenuPrice = 12.4;
  const vegetarianMenuPrice = 8.15;
  const deliveryPrice = 2.5;
  const percentageOfTotalCostForDesert = 0.2;
  

  //INPUT
  const chickeMenuCount = Number(input[0]);
  const fishMenuCount = Number(input[1]);
  const vegetarianMenuCount = Number(input[2]);

  //SOLUTION
  const chikenCost = chickeMenuCount * chickenMenuPrice;
  const fichCost = fishMenuCount * fishMenuPrice;
  const vegetarianCost = vegetarianMenuCount * vegetarianMenuPrice;

  const totalCost = chikenCost + fichCost + vegetarianCost;
  const desertPrice = totalCost * percentageOfTotalCostForDesert;
  const finalCost = totalCost + desertPrice + deliveryPrice;
  console.log(finalCost);
}

fooddelivery(["2 ", "4 ", "3 "]);
fooddelivery(["9 ", "2 ", "6 "]);
