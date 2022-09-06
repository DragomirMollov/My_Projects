function minNumber (input) {
    let index = 0;
    let number = input[index];
    index++;
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (number !== "Stop") {
        let num = Number(number);

        if (minNumber > number) {
            minNumber = num;
        }

        number = input[index]
        index++;
    }

    console.log(minNumber);
}

minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);
minNumber(["-10",
    "20",
    "-30",
    "Stop"]);
minNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"]);