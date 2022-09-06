function trainTheTrainers(input) {
    let index = 0;
    let numOfTrainers = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let countOfGrades = 0;
    let avgGrades = 0;

    while (command !== "Finish") {
        countOfGrades++;
        let presentationName = command;
        let tempAvgGrades = 0;
        for (let i = 0; i <  numOfTrainers; i++) {
            let tempGrades = Number(input[index]);
            index++;
            tempAvgGrades += tempGrades;
        }
        tempAvgGrades = tempAvgGrades / numOfTrainers;
        let presentation = `${presentationName} - ${tempAvgGrades.toFixed(2)}.`;
        console.log(presentation);
        avgGrades += tempAvgGrades;
        command = input[index];
        index++;
    }
    avgGrades = avgGrades / countOfGrades;
    console.log(`Student's final assessment is ${avgGrades.toFixed(2)}.`);
}

//trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
