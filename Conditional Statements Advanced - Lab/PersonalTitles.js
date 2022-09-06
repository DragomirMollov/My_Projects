function personalTitles(input) {
    const age = Number(input[0]);
    const gender = input[1];

    // if (age >= 16) {
    //     if (gender === "m") {
    //         console.log("Mr.");
    //     } else {
    //         console.log("Ms.");
    //     }
    // } else {
    //     if (gender === "m") {
    //         console.log("Master");
    //     } else {
    //         console.log("Miss");
    //     }
    // }


    // if (gender == "f") {
    //     if (age >= 16) {
    //         console.log("Ms.");
    //     } else {
    //         console.log("Miss");
    //     }
    // } else {
    //     if (age >= 16) {
    //         console.log("Mr.");
    //     } else {
    //         console.log("Master");
    //     }
    // }

    if (age >= 16) {
        switch (gender) {
            case "m": console.log("Mr."); break;
            case "f": console.log("Ms."); break;
        }
    } else {
        if (gender === "m") {
            console.log("Master");
        } else {
            console.log("Miss");
        }
    }
}

personalTitles(["13", "f"]);
personalTitles(["22", "f"]);
personalTitles(["35", "m"]);
personalTitles(["16", "m"]);
personalTitles(["12.5", "m"]);