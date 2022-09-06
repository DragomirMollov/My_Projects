function skiTrip(input) {
  const roomForOnePersonPrice = 18;
  const apartmentPrice = 25;
  const presidentapartmentPrice = 35;

  const days = Number(input[0]);
  const roomType = input[1];
  const rating = input[2];
  let totalPrice = 0;  

//   if ( roomType === "room for one person") {
//       totalPrice = (days -1) * roomForOnePersonPrice;
//   } else if ( roomType === "apartment") {
//       totalPrice = (days - 1) * apartmentPrice;
//       if ( days < 10) {
//           totalPrice = (days -1) * 0.7;
//       } else if ( days >= 10 && days <= 15) {
//           totalPrice *= 0.65;
//       } else {
//           totalPrice *= 0.5;
//       }
//   } else if ( roomType === "president apartment") {
//       totalPrice = (days - 1) * presidentapartmentPrice;
//       if ( days < 10) {
//           totalPrice *= 0.9;
//       } else if ( days >= 10 && days <= 15) {
//           totalPrice *= 0.85;
//       } else {
//           totalPrice *= 0.8;
//       }
//   }
//   if (rating === "positive") {
//     totalPrice = (totalPrice * 1.25).toFixed(2);
//   } else {
//     totalPrice = (totalPrice * 0.9).toFixed(2);
//   }

  if (days < 10) {
    switch (roomType) {
      case "room for one person":
        totalPrice = (days -1) * roomForOnePersonPrice;
        break;
      case "apartment":
        totalPrice = (days -1) * (apartmentPrice * 0.7);
        break;
      case "president apartment":
        totalPrice = (days -1) * (presidentapartmentPrice * 0.9);
        break;
    }
  } else if (days >= 10 && days <= 15) {
    switch (roomType) {
      case "room for one person":
        totalPrice = (days -1) * roomForOnePersonPrice;
        break;
      case "apartment":
        totalPrice = (days -1) *(apartmentPrice * 0.65);
        break;
      case "president apartment":
        totalPrice = (days -1) * (presidentapartmentPrice * 0.85);
        break;
    }
  } else if (days > 15) {
    switch (roomType) {
      case "room for one person":
        totalPrice = (days -1) * roomForOnePersonPrice;
        break;
      case "apartment":
        totalPrice = (days -1) * (apartmentPrice * 0.5);
        break;
      case "president apartment":
        totalPrice = (days -1) * (presidentapartmentPrice * 0.8);
        break;
    }
  }
  if (rating === "positive") {
    totalPrice = (totalPrice * 1.25).toFixed(2);
  } else {
    totalPrice = (totalPrice * 0.9).toFixed(2);
  }
  console.log(totalPrice);
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);
