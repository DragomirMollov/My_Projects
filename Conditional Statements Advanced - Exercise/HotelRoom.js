function hotelRoom(input) {
  const month = input[0];
  const days = input[1];

  const studioPriceMayAndOctober = 50;
  const apartmentPriceMayAndOctober = 65;
  const studioPriceJuneAndSeptember = 75.2;
  const apartmentPriceJuneAndSeptember = 68.7;
  const studioPriceJulyAndAugust = 76;
  const apartmentPriceJulyAndAugust = 77;
  let totalPriceStudio = 0;
  let totalPriceApartment = 0;

  switch (month) {
    case "May":
    case "October":
      totalPriceStudio = days * studioPriceMayAndOctober;
      totalPriceApartment = days * apartmentPriceMayAndOctober;
      if (days > 7 && days < 14) {
        totalPriceStudio -= totalPriceStudio * 0.05;
      } else if (days > 14) {
        totalPriceStudio -= totalPriceStudio * 0.3;
      }
      break;
    case "June":
    case "September":
      totalPriceStudio = days * studioPriceJuneAndSeptember;
      totalPriceApartment = days * apartmentPriceJuneAndSeptember;
      if (days > 14) {
        totalPriceStudio -= totalPriceStudio * 0.2;
      }
      break;
    case "July":
    case "August":
      totalPriceStudio = days * studioPriceJulyAndAugust;
      totalPriceApartment = days * apartmentPriceJulyAndAugust;
      break;
  }

  if (days > 14) {
    totalPriceApartment -= totalPriceApartment * 0.1;
  }

  console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
