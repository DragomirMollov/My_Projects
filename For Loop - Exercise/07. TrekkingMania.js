function trekkingMania(input) {
    let index = 0;
    const groups = Number(input[index]);
    index++;
    
    let musalaPeople = 0;
    let montBlancPeople = 0;
    let kilimanjaroPeople = 0;
    let k2People = 0;
    let everestPeople = 0;
    let peopleCount = 0;

    for (let i = 0; i < groups; i++) {
        let tempCount = Number(input[index]);
        index++;
        peopleCount += tempCount;
        if (tempCount <= 5) {
            musalaPeople += tempCount;
        } else if (tempCount >= 6 && tempCount <=12) {
            montBlancPeople += tempCount;
        } else if (tempCount >=13 && tempCount <= 25) {
            kilimanjaroPeople += tempCount;
        } else if (tempCount >=26 && tempCount <= 40) {
            k2People += tempCount;
        } else {
            everestPeople += tempCount;
        }
    }

    console.log(`${((musalaPeople / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((montBlancPeople / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaroPeople / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((k2People / peopleCount) * 100).toFixed(2)}%`);
    console.log(`${((everestPeople / peopleCount) * 100).toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
//trekkingMania(["5", "25", "41", "31", "250", "6"]);