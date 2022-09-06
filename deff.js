function hairSalon(input) {
    const mensHaircut = 15;
    const ladiesHaircut = 20;
    const kidsHaircut = 10;
    const colorTouchUp = 20;
    const colorFull = 30;
    let index = 0;
    let dayTarget = Number(input[index]);
    index++;
    let command = input[index];
    
    let income = 0;
    while(command !== "closed") {
         if ( command === "haircut") {
            index++;
            command = input[index];
            switch (command) {
                case "men": 
                    income += mensHaircut;
                    break;
                case "ladies":
                    income += ladiesHaircut;
                    break;
                case "kids":
                    income += kidsHaircut;
                    break;
            }
        } else if ( command === "color") {
            index++;
            command = input[index];
            switch (command) {
                case "touch up":
                    income += colorTouchUp;
                    break;
                case "full color":
                    income += colorFull;
                    break;
            }
            
        }
        if ( income === dayTarget) {
            break;
        }  
        index++;
        command = input[index]; 
    }
 let diff = dayTarget - income;
 if (income < dayTarget) {
 console.log(`Target not reached! You need ${diff}lv. more.`);
 } else if (income = dayTarget) {
    console.log("You have reached your target for the day!");
 }
 console.log(`Earned money: ${income}lv.`);

}

hairSalon(["300", "haircut", "ladies", "haircut", "kids", "color", "touch up", "closed"]);
//hairSalon(["50", "color", "full color", "haircut", "ladies"])
