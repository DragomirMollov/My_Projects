function multiplyTable(input) {
    let num = "" + Number(input[0]);
    let a = Number(num[0]);
    let b = Number(num[1]);
    let c = Number(num[2]);

    for (let i = 1; i <= c; i++) {
        for ( let j = 1; j <= b; j++) {
            for ( let k = 1; k <= a; k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
            }
        }
    }   
}

//multiplyTable(["324"]);
multiplyTable(["222"]);