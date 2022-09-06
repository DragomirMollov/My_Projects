function examPreparation(input) {
  let index = 0;
  let badScores = input[index];
  index++;
  let taskName = input[index];

  let avgScore = 0;
  let taskCount = 0;
  let badScoresCount = 0;
  let lastTaskCount = "";

  while (taskName !== "Enough") {
    lastTaskCount = taskName = input[index];
    taskCount++;
    index++;
    let score = Number(input[index]);
    avgScore += score;
    if (score <= 4) {
      badScoresCount++;
    }
    if (badScoresCount >= badScores) {
      console.log(`You need a break, ${badScoresCount} poor grades.`);
      break;
    }

    index++;
    taskName = input[index];
  }

  if (taskName === "Enough") {
    let avgScores = (avgScore / taskCount).toFixed(2);
    console.log(`Average score: ${avgScores}`);
    console.log(`Number of problems: ${taskCount}`);
    // index -= 2;
    // let taskName = input[index]; -->   swap lastTaskCount
    console.log(`Last problem: ${lastTaskCount}`);
  }
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
