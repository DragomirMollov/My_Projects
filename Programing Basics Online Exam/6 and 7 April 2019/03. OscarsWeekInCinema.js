function oscarsWeekInCinema(input) {
  const movieName = input[0];
  const roomType = input[1];
  const tickets = Number(input[2]);
  let allTickets = 0;
  let price = 0;

  if (movieName === "A Star Is Born") {
    switch (roomType) {
      case "normal":
        price = 7.5;
        break;
      case "luxury":
        price = 10.5;
        break;
      case "ultra luxury":
        price = 13.5;
    }
  } else if (movieName === "Bohemian Rhapsody") {
    switch (roomType) {
      case "normal":
        price = 7.35;
        break;
      case "luxury":
        price = 9.45;
        break;
      case "ultra luxury":
        price = 12.75;
        break;
    }
  } else if (movieName === "Green Book") {
    switch (roomType) {
      case "normal":
        price = 8.15;
        break;
      case "luxury":
        price = 10.25;
        break;
      case "ultra luxury":
        price = 13.25;
        break;
    }
  } else if (movieName === "The Favourite") {
    switch (roomType) {
      case "normal":
        price = 8.75;
        break;
      case "luxury":
        price = 11.55;
        break;
      case "ultra luxury":
        price = 13.95;
        break;
    }
  }
  allTickets = tickets * price;
  console.log(`${movieName} -> ${allTickets.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);
oscarsWeekInCinema(["Green Book", "normal", "63"]);
