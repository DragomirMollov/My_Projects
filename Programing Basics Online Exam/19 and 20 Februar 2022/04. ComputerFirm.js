function computerFirm(input) {
    const numberOfComputes = Number(input[0]);
    let sales = 0;
    let realSales = 0;
    let rating = 0;
    let sumRatings = 0;
   
    for (let i = 1; i <= numberOfComputes; i++) {
        let possibleSales = Number(input[i]);
        if (possibleSales >= 32 && possibleSales <= 306 ) {
      rating = Number(input[i]) % 10;
      sumRatings += rating;
      sales = Math.trunc(Number(input[i]) / 10);
      switch (rating) {
        case 2:
          realSales += 0 * sales;
          break;
        case 3:
          realSales += 0.5 * sales;
          break;
        case 4:
          realSales += 0.7 * sales;
          break;
        case 5:
          realSales += 0.85 * sales;
          break;
        case 6:
          realSales += 1 * sales;
          break;
      }
     }
    }
    console.log(realSales.toFixed(2));
    console.log((sumRatings / numberOfComputes).toFixed(2));
  }
   
computerFirm(["5", "122", "156", "202","214","185"]);



//   function plasico(input) {  
//     let index = 0;
//     let compCount = Number(input[index]);
//     index++;
     
//     let totalSales = 0;
//     let ratingCounter = 0;
//     let counter = 0;
     
     
//     for (let i = 1; i <= compCount; i++) {
//         let sales = Number(input[index])
//         if (sales >=32 && sales <= 306){
//         let currRating = Number(input[index].charAt(2));
//         let possibleSales = Number(input[index].charAt(0) + input[index].charAt(1))
//         ratingCounter += currRating;
//         counter++;
//         switch (currRating) {
//             case 6 : totalSales += possibleSales; break;
//             case 5: totalSales += possibleSales * 0.85; break;
//             case 4: totalSales += possibleSales * 0.7; break;
//             case 3: totalSales += possibleSales * 0.5; break;
//         }
//         index++;
//       }
//     } 
//     console.log(totalSales.toFixed(2));
//     console.log((ratingCounter / counter).toFixed(2))
//     }

// plasico(["5", "122", "156", "202","214","185"]);