function programmingBook(input) {
  let pagesBook = 899;
  let coverBook = 2;
  let pricePerPage = Number(input[0]);
  let pricePerCover = Number(input[1]);
  let discount = Number(input[2]);
  let designerFee = Number(input[3]);
  let teamFeePercent = Number(input[4]);

  let startPrice = pricePerPage * pagesBook + pricePerCover * coverBook;
  let discountPrice = startPrice - startPrice * (discount / 100);
  let finalPrice = discountPrice + designerFee;
  let teamBill = finalPrice - finalPrice * (teamFeePercent / 100);

  console.log(`Avtonom should pay ${teamBill.toFixed(2)} BGN.`);
}

programmingBook(["0.01", "1", "10", "20", "20"]);
programmingBook(["0.05", "1.20", "40", "19.99", "20"]);
programmingBook(["0.02", "0.50", "18", "21", "50"]);
