function equalSumsEvenOddPosition(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let print = "";

    for (let index = start; index <= end; index++) {
        let curPosition = "" + index;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < curPosition.length; j++) {
            let currNumber = Number(curPosition[j]);
            if (j % 2 === 0) {
                evenSum += currNumber;
            } else {
                oddSum += currNumber;
            }
        }
        if ( oddSum === evenSum ) {
            print += `${index} `;
        }
    }
    console.log(print);
}

equalSumsEvenOddPosition(["100000", "100050"]);