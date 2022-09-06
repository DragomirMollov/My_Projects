function cleverLily(input) {
    const age = Number(input[0]);
    const washingMachunePrice  = Number(input[1]);
    const toyPrice = Number(input[2]);
    let money = 0;
    let toyCounter = 0;
    let temporaryMoney = 10;

    for ( let i = 1; i <= age; i++ ) {
        if ( i % 2 === 0 ) {
            money += temporaryMoney;
            temporaryMoney += 10;
            money -= 1;
        } else {
            toyCounter++;
        }
    }
    money += toyCounter * toyPrice;
    let difference = Math.abs(money - washingMachunePrice);
    if ( money >= washingMachunePrice) {
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }
}

cleverLily(["10", "170", "6"]);
cleverLily(["21", "1570.98","3"]);




// function cleverLilly(input) {
//     const age = Number(input[0]);
//     const priceForLaundryM = Number(input[1]);
//     const priceForAToy = Number(input[2]);
//     let moneySaved = 0;
//     let toys = 0;
 
//     for (let i = 1; i <= age; i++) {
//         if (i % 2 === 0) {
//             moneySaved += (10 * (i / 2));
//             moneySaved -= 1;
//         } else {
//             toys += 1;
//         }
//     }
//     moneySaved = moneySaved + (toys * priceForAToy);
//     if (moneySaved > priceForLaundryM) {
//         console.log(`Yes! ${(moneySaved - priceForLaundryM).toFixed(2)}`);
//     } else {
//         console.log(`No! ${Math.abs(moneySaved - priceForLaundryM).toFixed(2)}`);
//     }
// }
// cleverLilly(['21', '1570.98', '3']);