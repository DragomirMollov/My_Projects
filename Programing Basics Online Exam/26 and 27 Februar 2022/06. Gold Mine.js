function goldMine(input) {
    let locations = Number(input[0]);
    let averageGoldPerDay = 0;
    let daysToWork = 0;
    let sum = 0;
    let averageCalculation = 0; 
    let index = 1;

    for (let i = 0; i < locations; i++) {
        averageGoldPerDay = Number(input[index]);
        index ++;
        daysToWork = Number(input[index]); 
        index ++;
        for(let j = 0; j < daysToWork; j++){
            sum += Number(input[index]);
            index++;
        }

        averageCalculation = sum / daysToWork;

        if (averageCalculation >= averageGoldPerDay){
            console.log(`Good job! Average gold per day: ${averageCalculation.toFixed(2)}.`);
        } else {
            console.log(`You need ${((averageGoldPerDay - averageCalculation).toFixed(2))} gold.`);
        }
        sum = 0;
    }
}

goldMine(["2", "10", "3", "10", "10", "11","20", "2", "20", "10"]);
goldMine(["1", "5", "3", "10", "1", "3"])
 