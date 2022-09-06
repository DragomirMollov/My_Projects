function suppliesForSchool(input) {
  //Prices
  const penPacksPrice = 5.8;
  const marketPacksPrice = 7.2; // Препарат - 1.20 лв (за литър)
  const cleaningDetergentPrice = 1.2;
  //Input From The User
  const penPacksNumber = Number(input[0]);
  const marketPacksNumber = Number(input[1]);
  const cleaningDetergentNumber = Number(input[2]);
  const discountPrice = Number(input[3]);
  //Solution to the problem
  const totalPrice =
    penPacksNumber * penPacksPrice +
    marketPacksNumber * marketPacksPrice +
    cleaningDetergentNumber * cleaningDetergentPrice;
  const finalPriceAfterDiscount =
    totalPrice - (discountPrice / 100) * totalPrice;
  console.log(finalPriceAfterDiscount);
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
