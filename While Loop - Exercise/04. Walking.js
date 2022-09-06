function walking(input) { 
    let index = 0;
    let command = input[index]
    index++;
    let stepsGoal = 10000;

    while (command !== "Going home") {
        let steps = Number(command);
        stepsGoal -= steps;
        if ( stepsGoal <= 0) {
            console.log(`Goal reached! Good job!`);
            console.log(`${Math.abs(stepsGoal)} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Going home") {
        let stepsToHome = Number(input[index]);
        index++;
        stepsGoal -= stepsToHome;
        if ( stepsGoal <= 0) {
            console.log(`Goal reached! Good job!`);
            console.log(`${Math.abs(stepsGoal)} steps over the goal!`);
        }else {
            console.log(`${stepsGoal} more steps to reach goal.`);
        } 
    }
}

walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);

