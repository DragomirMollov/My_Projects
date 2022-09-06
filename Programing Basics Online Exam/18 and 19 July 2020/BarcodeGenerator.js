function barcodeGenerator(input) {
    let start ="" + input[0];
    let end = "" + input[1];

    let startA = Number(start[0]);
    let startB = Number(start[1]);
    let startC = Number(start[2]);
    let startD = Number(start[3]);
    
    let endA = Number(end[0]);
    let endB = Number(end[1]);
    let endC = Number(end[2]);
    let endD = Number(end[3]);

    let result = "";

    for ( let a = startA; a <= endA; a++) {
        for ( let b = startB; b <= endB; b++) {
            for ( let c = startC; c <= endC; c++) {
                for ( let d = startD; d <= endD; d++) {
                   if ( a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !==0 ) {
                    result +=`${a}${b}${c}${d} `;
                   }
                }
            }
        }
    }
    console.log(result);
}

// [const startNum = input[0];
//   const endNum = input[1];
//   let firstNum = "";
//   let secondNum = "";
//   let thirdNum = "";
//   let fourthNum = "";
//   let finalNum = "";
//   for (let i = startNum.charAt(0); i <= endNum.charAt(0); i++) {
//     firstNum = i;
//     if (firstNum % 2 !== 0) {
//       for (let j = startNum.charAt(1); j <= endNum.charAt(1); j++) {
//         secondNum = j;
//         if (j % 2 !== 0) {
//           for (let k = startNum.charAt(2); k <= endNum.charAt(2); k++) {
//             thirdNum = k;
//             if (k % 2 !== 0) {
//               for (let l = startNum.charAt(3); l <= endNum.charAt(3); l++) {
//                 fourthNum = l;
//                 if (l % 2 !== 0) {
//                   finalNum +=
//                     `${firstNum}${secondNum}${thirdNum}${fourthNum} `;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   console.log(finalNum);
// }]

barcodeGenerator(["2345", "6789"]);