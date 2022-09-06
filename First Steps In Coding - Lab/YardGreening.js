function yardGreening(input) {
  let squareForGreening = input[0];
  const pricePerSquare = 7.61;
  const priceGreening = squareForGreening * pricePerSquare;
  const priceDiscount = priceGreening * 0.18;
  const totalPrice = priceGreening - priceDiscount;
  console.log(`The final price is: ${totalPrice} lv.`);
  console.log(`The discount is: ${priceDiscount} lv.`);
}
yardGreening(["550"]);
yardGreening(["150"]);
