function shopping(input) {
  const procesorsprice = Number(input[0]);
  const videoCardsPrice = Number(input[1]);
  const ramMemmoryPrice = Number(input[2]);
  const ramMemmoryCount = Number(input[3]);
  const discountPercentage = Number(input[4]);
  const dollarPricePer1 = 1.57;

  let moneyNeeded = 0;

  let procesorAmountConvert = procesorsprice * dollarPricePer1;
  let procesorAmountDiscount = procesorAmountConvert * discountPercentage;
  let totalProcesorAmount = procesorAmountConvert - procesorAmountDiscount;
  let videCardAmountConvert = videoCardsPrice * dollarPricePer1;
  let videCardAmountDiscount = videCardAmountConvert * discountPercentage;
  let totalVideoCardAmount = videCardAmountConvert - videCardAmountDiscount;
  let ramMemmoryPriceConvert = ramMemmoryPrice * dollarPricePer1;
  let totalRamMemmoryPrice = ramMemmoryPriceConvert * ramMemmoryCount;
  moneyNeeded =
    totalProcesorAmount + totalVideoCardAmount + totalRamMemmoryPrice;
  console.log(`Money needed - ${moneyNeeded.toFixed(2)} leva.`);
}

shopping(["500", "200", "80", "2", "0.05"]);
shopping(["1200", "850", "120", "4", "0.1"]);
shopping(["200", "100", "80", "1", "0.01"]);
