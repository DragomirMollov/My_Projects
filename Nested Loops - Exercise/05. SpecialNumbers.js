function specialNumber(input) {
    let n = Number(input[0]);
    
    let result = ""; // from 1111 
                     // till 9999
                     //   [0, 1, 2, 3]  

    for ( let num0 = 1; num0 <= 9; num0++ ) {
        for ( let num1 = 1; num1 <= 9; num1++ ) {
            for ( let num2 = 1; num2 <= 9; num2++) {
                for ( let num3 = 1; num3 <= 9; num3++) {
                    if ( n % num0 === 0 && n % num1 === 0 && n % num2 === 0 && n % num3 === 0 ) {
                        result += (`${num0}${num1}${num2}${num3} `);
                    }
                }
            }
        }
    }
    console.log(result);
}

//specialNumber(["3"]);
//specialNumber(["11"]);
specialNumber(["16"]);