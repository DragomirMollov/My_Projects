// function maxNumber (input){
//     let index = 0;
//     let number = input[index];
//     index++;
//     let maxNumber = Number.MIN_SAFE_INTEGER

//     while (number !== "Stop") {
//         let num = Number(number);

//         if (maxNumber < num) {
//             maxNumber = num
//         }

//         number = input[index];
//         index++;

//     }

//     console.log(maxNumber);
// }



    function maxNumber(input) {
        let index = 0;
        let number = input[index];
        index++;
        let maxNumber;
        if (number !== "Stop") {
            maxNumber = Number(number);
        }
        while (number !== "Stop") {
            let num = Number(number);
    
            if (maxNumber < num) {
                maxNumber = num
            }
    
            number = input[index];
            index++;
    
        }
    
        console.log(maxNumber);
    }

maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["45", "-20", "7", "99",  "Stop"]);
maxNumber(["-10", "20", "-30",  "Stop"]);
maxNumber(["-1", "-2", "Stop"]);