function fruitShop(input) {
  const fruit = input[0];
  const days = input[1];
  const quantity = Number(input[2]);
  let price = 0;

  switch (days) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana": price = quantity * 2.5; break;
        case "apple": price = quantity * 1.2; break;
        case "orange": price = quantity * 0.85; break;
        case "grapefruit": price = quantity * 1.45; break;
        case "kiwi": price = quantity * 2.7; break;
        case "pineapple": price = quantity * 5.5; break;
        case "grapes": price = quantity * 3.85; break;
        default: console.log("error"); break;
      } break;
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana": price = quantity * 2.7; break;
        case "apple": price = quantity * 1.25; break;
        case "orange": price = quantity * 0.9; break;
        case "grapefruit": price = quantity * 1.6; break;
        case "kiwi": price = quantity * 3.0; break;
        case "pineapple": price = quantity * 5.6; break;
        case "grapes": price = quantity * 4.2; break;
        default: console.log("error"); break;
      } break;
      default: console.log("error"); break;
  }
  if (price != 0) {
    console.log(price.toFixed(2));
  }
  
}

// function fruitShop(input){
//     const fruit = input[0];
//     const dayOfWeek = input[1];
//     const quantity = Number(input[2]);
//     let price = 0;
 
//     switch(dayOfWeek){
//         case "Monday":
//         case "Tuesday":
//         case "Wednesday":
//         case "Thursday":
//         case "Friday":
//             switch(fruit){
//                 case "banana": price = quantity * 2.50; break;
//                 case "apple": price = quantity * 1.20; break;
//                 case "orange": price = quantity * 0.85; break;
//                 case "grapefruit": price = quantity * 1.45; break;
//                 case "kiwi": price = quantity * 2.70; break;
//                 case "pineapple": price = quantity * 5.50; break;
//                 case "grapes": price = quantity * 3.85; break;
//                 default: console.log(`error`); break;
//                 }  break;
//         case "Saturday":
//         case "Sunday":
//             switch(fruit){
//                 case "banana": price = quantity * 2.70; break;
//                 case "apple": price = quantity * 1.25; break;
//                 case "orange": price = quantity * 0.90; break;
//                 case "grapefruit": price = quantity * 1.60; break;
//                 case "kiwi": price = quantity * 3.00; break;
//                 case "pineapple": price = quantity * 5.60; break;
//                 case "grapes": price = quantity * 4.20; break;
//                 default: console.log(`Error`); break;
//                 } break;
//                 default: console.log(`error`); break;
//     }
 
//     if(price != 0){
//         console.log(price.toFixed(2));
//     }
 
// }

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);
