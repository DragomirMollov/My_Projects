function building(input) {
    let floor = Number(input[0]); 
    let room = Number(input[1]); 

    for (let x = floor; x > 0; x--) {
        let res = "";
        for (let y = 0; y < room; y++) {
            if ( x === floor) {
                res += `L${x}${y} `; // space befor closing the " ` "
            } else if ( x % 2 === 0 ) {
                res += `O${x}${y} `; // space befor closing the " ` "
            } else {
                res += `A${x}${y} `; // space befor closing the " ` "
            }
            
        }
        console.log(res);
    }
}

building(["6", "4"]);
// building(["9", "5"]);
// building(["4", "4"]);