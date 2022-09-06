function numbersDivisibleBy(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let sum = 0;
    let result = "";
    for (let i = startNumber; i <= endNumber; i++) {
        if ( i % 9 === 0 ) {
            sum += i;
            result += `${i}\n`;
        }
    }
    console.log("The sum: " + sum);
    console.log(result);

    // for (let i = startNumber; i <= endNumber; i++) {    // zamestwame s let = sum + \n - new line 
    //     if ( i % 9 === 0 ) {
    //         console.log(i);
    //     }
   // }
}

numbersDivisibleBy(["100", "200"]);