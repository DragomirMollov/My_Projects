function clock (input){
 
    for ( let h = 0; h < 24; h++ ){
        for ( let m = 0; m < 60; m++ ){
            // if (m < 10 ){
            //     console.log(`${h}:0${m}`); // if need to have "0" in less than 10 minutes
            // } else {
                console.log(`${h}:${m}`);
            }
           
        }
    }
// }

clock()

// function clock(){
//     let h = 0;
//     let m = 0;

//     while (h <=23 && m <= 60) {
//         console.log(`${h}:${m}`);
//         m++;
//         if (m > 59) {
//             m = 0;
//             h++;
//             if (h === 23 && m === 60) {
//                 break;
//             }
//         }
//     }
// }

// clock();