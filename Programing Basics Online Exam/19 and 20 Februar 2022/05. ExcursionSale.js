function excursionSale(input) { 
    let index = 0;
    let seaCount = Number(input[index]);
    index++;
    let mountainCount = Number(input[index]);
    index++;
    let priceSea = 680;
    let priceMountain = 499;
    let profit = 0;
    let command = input[index]

    while (command !== "Stop"){
        switch (command) {
           
            case "sea":
                if (seaCount === 0) {
                    index++;
                    command = input[index];
                    continue;
                } else {
                profit += priceSea;
                seaCount--;
                break;
                }
            case "mountain": 
                if (mountainCount === 0) {
                    index++;
                    command = input[index];
                    continue;
                } else {
                profit += priceMountain;
                mountainCount--;
                break;
                }
        }
        if ((seaCount === 0) && (mountainCount === 0)) {
            console.log("Good job! Everything is sold.");
            break;
        }
        index++;
        command = input[index];
       
        
    }
    console.log(`Profit: ${profit} leva.`);
}    
excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
//excursionSale(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);
