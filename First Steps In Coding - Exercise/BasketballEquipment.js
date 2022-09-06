function basketballEquipment(input) {
  //  Баскетболни кецове – цената им е 40% по-малка от таксата за една година
  //  Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
  //  Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
  //  Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

            //Input
  //   Годишната такса за тренировки по баскетбол 
    const yearTax = Number(input[0]);
    const priceOfTrainers = yearTax - 0.40 * yearTax;
    const priceOfSuit = priceOfTrainers - 0.20 * priceOfTrainers;
    const priceOfBall = priceOfSuit / 4;
    const priceOfAcc = priceOfBall / 5;
    const totalSum = yearTax + priceOfTrainers + priceOfSuit + priceOfBall + priceOfAcc;
    console.log(totalSum);

}

basketballEquipment(["365"]);
basketballEquipment(["550"]);