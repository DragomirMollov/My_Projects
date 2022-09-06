function traveling(input) {
//     let destination = input[0];
//     let needMoney = Number(input[1]);
//     let index = 2;
//     let safeAmount = 0;

//     for ( let i = index; i < needMoney; i++ ) {
        
//         let amount = Number(input[index]);
//         index++;
//         safeAmount += amount;
        
//         if ( safeAmount >= needMoney ) {
//             console.log(`Going to ${destination}!`);
//             destination = input[index];
//             safeAmount = 0;
//             index++;
//             needMoney = Number(input[index]);
//             index++;
//         }
//         if ( destination === "End") {
//             break;
//         }
//     } 
// }


let index = 0;
let destination = input[index];
index++;

while (destination !== "End") {
  let budget = Number(input[index]);
  index++;

  let sum = 0;
  while (sum < budget) {
    let money = Number(input[index]);
    index++;
    sum += money;
  }
  console.log(`Going to ${destination}!`);
  destination = input[index];
  index++;
}
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
