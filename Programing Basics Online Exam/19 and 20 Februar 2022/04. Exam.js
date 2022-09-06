function exam(input) {
    let allStudent = Number(input[0]);

    let groups1Count = 0;
    let groups2Count = 0;
    let groups3Count = 0;
    let groups4Count = 0;
    let gradesCount = 0;

    for (let i = 1; i <= allStudent; i++) {
        let score = Number(input[i]);
        if ( score >= 5.00) {
            groups1Count++;
        } else if ( score >= 4 && score <= 4.99 ) {
            groups2Count++;
        } else if ( score >= 3 && score <= 3.99) {
            groups3Count++;
        } else if ( score < 3 ) {
            groups4Count++;
        }
        gradesCount += score;
    }
    let group1Per = groups1Count / allStudent *100;
    let group2Per = groups2Count / allStudent * 100;
    let group3Per = groups3Count / allStudent * 100;
    let group4Per = groups4Count / allStudent * 100;
    let avarageGrade = gradesCount/ allStudent;

    console.log(`Top students: ${group1Per.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${group2Per.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${group3Per.toFixed(2)}%`);
    console.log(`Fail: ${group4Per.toFixed(2)}%`);
    console.log(`Average: ${avarageGrade.toFixed(2)}`);
}

exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
exam(["6", "2", "3", "4", "5", "6", "2.2"]);
