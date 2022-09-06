function cinemaVoucher(input) {
  let index = 0;
  let voucherPrice = Number(input[index]);
  index++;
  let tickets = 0;
  let otherBoughts = 0;

  let nextItem = input[index];
  index++;

  while (nextItem !== "End") {
    let price = 0;
    if (nextItem.length > 8) {
      price = nextItem.charCodeAt(0) + nextItem.charCodeAt(1);
      
    } else {
      price = nextItem.charCodeAt(0);
    }

    if (price > voucherPrice) {
      break;
    }
    voucherPrice -= price;

    if (nextItem.length > 8) {
      tickets++;
    } else {
      otherBoughts++;
    }
    nextItem = input[index];
    index++;
  }

  console.log(tickets);
  console.log(otherBoughts);
}
cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"]);
cinemaVoucher(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);
