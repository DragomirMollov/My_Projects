function excellentResut(input) {
    const grade = Number(input[0]);

    if (grade >= 5.50) {
        console.log("Excellent!")
    }
}

excellentResut(["6"]);
excellentResut(["5"]);
excellentResut(["5.50"]);
excellentResut(["5.49"]);