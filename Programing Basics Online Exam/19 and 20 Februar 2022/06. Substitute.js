// function substitute(input) {
//     const K = Number(input[0]);
//     const L = Number(input[1]);
//     const M = Number(input[2]);
//     const N = Number(input[3]);
//     let printFirstNumber = "";
//     let printSecondNumber = "";
//     let count = 0;
   
   
//     for (let i = K; i <= 8; i++) {
//       if (i % 2 === 0) {
//         for (let j = 9; j >= L; j--) {
//           if (j % 2 !== 0) {
//             for (let t = M; t <= 8; t++) {
//               if (t % 2 === 0) {
//                 for (let s = 9; s >= N; s--) {
//                     if(s%2 !== 0) {
//                       printFirstNumber = `${i}${j}`;
//                       printSecondNumber = `${t}${s}`;
//                       if(printFirstNumber === printSecondNumber){
//                           console.log("Cannot change the same player.")
//                       }
//                       else{
//                           console.log(`${printFirstNumber} - ${printSecondNumber}`);
//                           count++;
//                       }
//                       if(count === 6){
//                           return;
//                       }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }


  function substitude(input) {
    const K = Number(input[0]);
    const L = Number(input[1]);
    const M = Number(input[2]);
    const N = Number(input[3]);
    let counter = 1;
 
    for(let a = K; a <= 8; a++){
        for(let b = 9; b >= L; b--){
            for(let c = M; c <= 8; c++){
                for(let d = 9; d >= N; d--){
                    let FirstPlayer = `${a}${b}`;
                    let SecondPlayer = `${c}${d}`;
                    if(a % 2 === 0 && c % 2 === 0 && b % 2 !== 0 && d % 2 !== 0){
                        if(counter <= 6){
                            if(FirstPlayer !== SecondPlayer){
                                counter++;
                                console.log(`${FirstPlayer} - ${SecondPlayer}`);
                            }else{
                                console.log(`Cannot change the same player.`);
                            }
                        }
                    }
                }
            }
        }
    }
    
}


// Todor Stoqnov
// function maskify(input) {
//     let K = Number(input[0]);
//     let L = Number(input[1]);
//     let M = Number(input[2]);
//     let N = Number(input[3]);
//     let counter = 0;
//     let isFinish = false
//     for(let a = K; a <= 8; a++){
//         for(let b = 9; b >= L; b--){
//             for(let c = M; c <= 8; c++){
//                 for(let d = 9; d >= N; d--){
//                     if (a % 2 === 0 && c % 2 === 0 && b % 2 !== 0 && d % 2 !== 0){
 
//                         let numA = "" + a + b;
//                         let numB = "" + c + d
//                         if(numA !== numB){
//                             counter++;
//                             console.log(`${a}${b} - ${c}${d}`)
//                         } else {
//                             console.log("Cannot change the same player.")
//                         }
//                         if(counter === 6){
//                             isFinish = true;
//                             break;
//                         }
//                     }
//                     if(isFinish){
//                         break
//                     }
//                 }
//                 if(isFinish){
//                     break
//                 }
//             }
//             if(isFinish){
//                 break
//             }
//         }
//         if(isFinish){
//             break
//         }
//     }
// }

substitude(["7", "6", "8", "5"]);
