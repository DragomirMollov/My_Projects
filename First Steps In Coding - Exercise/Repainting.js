function repaiting(input) {
  //Prices and need stuff
  const nylonPerSqMeter = 1.5;
  const paintPerLiter = 14.5;
  const thinerPerLiter = 5   ;
  const extraPaintPercent = 0.1;
  const extraNylonPerSqMeter = 2;
  const bagPrice = 0.4;

  //INPUT from User
  const nylon = Number(input[0]);
  const paint = Number(input[1]);
  const thiner = Number(input[2]);
  const workHours = Number(input[3]);

  //SOLUTION:
  const nylonCost = (nylon + extraNylonPerSqMeter) * nylonPerSqMeter;
  const paintCost = (paint + paint * extraPaintPercent) * paintPerLiter;
  const thinerCost = thiner * thinerPerLiter;
  const materialCost = nylonCost + paintCost + thinerCost + bagPrice;
  //Сумата, която се заплаща на майсторите за 1 час работа,
  // е равна на 30% от сбора на всички разходи за материали.
  const workerCostPerHour = materialCost * 0.3;
  const totalWorkCost = workHours * workerCostPerHour;
  const totalCost = totalWorkCost + materialCost;
  console.log(totalCost);
}

repaiting(["10 ", "11 ", "4 ", "8 "]);
repaiting(["5 ", "10 ", "10 ", "1 "]);
