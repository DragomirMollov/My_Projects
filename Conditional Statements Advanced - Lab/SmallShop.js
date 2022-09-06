function smallShop(input) {
  const product = input[0];
  const town = input[1];
  const quantity = Number(input[2]);
  let price = 0;

//   switch (town) {
//     case "Sofia":
//       switch (product) {
//         case "coffee":
//           price = quantity * 0.5;
//           break;
//         case "water":
//           price = quantity * 0.8;
//           break;
//         case "beer":
//           price = quantity * 1.2;
//           break;
//         case "sweets":
//           price = quantity * 1.45;
//           break;
//         case "peanuts":
//           price = quantity * 1.6;
//           break;
//       }
//       break;
//     case "Plovdiv":
//       switch (product) {
//         case "coffee":
//           price = quantity * 0.4;
//           break;
//         case "water":
//           price = quantity * 0.7;
//           break;
//         case "beer":
//           price = quantity * 1.15;
//           break;
//         case "sweets":
//           price = quantity * 1.3;
//           break;
//         case "peanuts":
//           price = quantity * 1.5;
//           break;
//       }
//       break;
//     case "Varna":
//       switch (product) {
//         case "coffee":
//           price = quantity * 0.45;
//           break;
//         case "water":
//           price = quantity * 0.7;
//           break;
//         case "beer":
//           price = quantity * 1.1;
//           break;
//         case "sweets":
//           price = quantity * 1.35;
//           break;
//         case "peanuts":
//           price = quantity * 1.55;
//           break;
//       }
//       break;
//   }


// if (product === "coffee") {
//     switch(city) {
//         case "Sofia": price = count * 0.50; break;
//         case "Plovdiv": price = count * 0.40; break;
//         case "Varna": price = count * 0.45; break;
//     } 
// } else if (product === "water") {
//     switch(city) {
//         case "Sofia": price = count * 0.80; break;
//         case "Plovdiv": price = count * 0.70; break;
//         case "Varna": price = count * 0.70; break;
//     }
// } else if (product === "beer") {
//     switch(city) {
//         case "Sofia": price = count * 1.20; break;
//         case "Plovdiv": price = count * 1.15; break;
//         case "Varna": price = count * 1.10; break;
//     }
// } else if (product === "sweets") {
//     switch(city) {
//         case "Sofia": price = count * 1.45; break;
//         case "Plovdiv": price = count * 1.30; break;
//         case "Varna": price = count * 1.35; break;
//     }
// } else if (product === "peanuts") {
//     switch(city) {
//         case "Sofia": price = count * 1.60; break;
//         case "Plovdiv": price = count * 1.50; break;
//         case "Varna": price = count * 1.55; break;
//     }
// }



    if (town == "Sofia") {
        if (product == "coffee") {
            price = quantity * 0.5;
        } else if (product == "water") {
            price = quantity * 0.8;
        } else if (product == "beer") {
            price = quantity * 1.2;
        } else if (product == "sweets") {
            price = quantity * 1.45;
        } else if (product == "peanuts") {
            price = quantity * 1.6;
        }
    } else if (town == "Plovdiv") {
        if (product == "coffee") {
            price = quantity * 0.4;
        } else if (product == "water") {
            price = quantity * 0.7;
        } else if (product == "beer") {
            price = quantity * 1.15;
        } else if (product == "sweets") {
            price = quantity * 1.3;
        } else if (product == "peanuts") {
            price = quantity * 1.5;
        }
    } else if (town == "Varna") {
        if (product == "coffee") {
            price = quantity * 0.45;
        } else if (product == "water") {
            price = quantity * 0.7;
        } else if (product == "beer") {
            price = quantity * 1.1;
        } else if (product == "sweets") {
            price = quantity * 1.35;
        } else if (product == "peanuts") {
            price = quantity * 1.55;
        }
    }
  console.log(price);
}

smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);
