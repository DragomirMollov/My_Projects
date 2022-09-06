function numberPyramid(input) {
    let num = Number(input[0]);
    let curNum = 0;
    let isFound = false;

    for (let rows = 1; rows <= num; rows++) {
        let printRow = "";
        for (let cols = 1; cols <= rows; cols++){
            curNum ++;
            printRow += curNum + " ";

            if (curNum === num) {
                isFound = true;
                break;
            }
        }
        console.log(printRow);
        if (isFound) {
            break;
        }
    }
}

numberPyramid(["15"]);