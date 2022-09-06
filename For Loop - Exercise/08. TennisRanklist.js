function tennisRanklist(input) {
    let index = 0;
    let tournamentsCount = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let tempPoints = 0;
    let winCount = 0;

    for (let i = 0; i < tournamentsCount; i++) {
        let scores = input[index];
        index++;

        switch (scores) {
            case "W": tempPoints += 2000; 
            winCount++;
            break;
            case "F": tempPoints += 1200; break;
            case "SF": tempPoints += 720; break;
        }
    }
    let finalPoints = tempPoints + startPoints;
    let avgPoints = Math.floor(tempPoints / tournamentsCount);
    let winGamesPercent = winCount / tournamentsCount * 100;
    
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${winGamesPercent.toFixed(2)}%`);

} 

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);