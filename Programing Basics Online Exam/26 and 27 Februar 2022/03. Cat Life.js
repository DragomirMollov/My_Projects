function catLife(input) {
  let catKinde = input[0];
  let gender = input[1];
  let age = 0;
    if (catKinde === "British Shorthair" || catKinde === "Siamese" || catKinde === "Persian" || catKinde === "Ragdoll" ||catKinde === "American Shorthair" || catKinde === "Siberian") {
    switch (catKinde) {
        case "British Shorthair":
        switch (gender) {
            case "m":
            age = 13;
            break;
            case "f":
            age = 14;
            break;
        }
        break;
        case "Siamese":
        switch (gender) {
            case "m":
            age = 15;
            break;
            case "f":
            age = 16;
            break;
        }
        break;
        case "Persian":
        switch (gender) {
            case "m":
            age = 14;
            break;
            case "f":
            age = 15;
            break;
        }
        break;
        case "Ragdoll":
        switch (gender) {
            case "m":
            age = 16;
            break;
            case "f":
            age = 17;
            break;
        }
        break;
        case "American Shorthair":
        switch (gender) {
            case "m":
            age = 12;
            break;
            case "f":
            age = 13;
            break;
        }
        break;
        case "Siberian":
        switch (gender) {
            case "m":
            age = 11;
            break;
            case "f":
            age = 12;
            break;
        }
        break;
    }
    let humanMonth = age * 12;
    let catMonth = humanMonth / 6;
    console.log(`${catMonth} cat months`);
  } else {
      console.log(`${catKinde} is invalid cat!`);
  }

}

catLife(["Persian", "m"]);
catLife(["Siamese", "f"]);
catLife(["Siberian", "m"]);
catLife(["Ragdoll", "f"]);
catLife(["Tom", "m"]);
