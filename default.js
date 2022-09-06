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

    while(command !== "closed"){
        
            if (income === dayTarget) {
            console.log("You have reached your target for the day!");
            break;
            } else if (command === "haircut"){
            index++;
            command = input[index];
            switch (command) {
            case "men": 
                income += mensHaircut;
                 index++;
                command = input[index];
                break;
            case "ladies":
                income += ladiesHaircut;
                index++;
                command = input[index];
                break;
            case "kids":
                income += kidsHaircut;
                index++;
                command = input[index];
                break;
              }
            } else if (command === "color") {
                  index++;
                  command = input[index];
                switch (command) {
                case "touch up":
                  income += colorTouchUp;
                  index++;
                  command = input[index];
                break;
                case "full color":
                income += colorFull;
                index++;
                command = input[index];
                break;
             }
            }
    }
 
 let diff = dayTarget - income;
 if (income < dayTarget) {
 console.log(`Target not reached! You need ${diff}lv. more.`);
 }
 console.log(`Earned money: ${income}lv.`);
 

}
hairSalon(["300", "haircut", "ladies", "haircut", "kids", "color", "touch up", "closed"]);
hairSalon(["50", "color", "full color", "haircut", "ladies"]);