function puppyCare(input) {
  let index = 0;
  let dogFoodPerKg = Number(input[index]);
  index++;

  let allFoodPerGr = dogFoodPerKg * 1000;

  let foodCount = 0;
  let command = input[index];

  while (command !== "Adopted") {
    let nextFoodPergr = Number(input[index]);
    foodCount += nextFoodPergr;
    index++;
    command = input[index];
  }
  let diff = Math.abs(allFoodPerGr - foodCount);
  if (foodCount <= allFoodPerGr) {
    console.log(`Food is enough! Leftovers: ${diff} grams.`);
  } else {
    console.log(`Food is not enough. You need ${diff} grams more.`);
  }
}

puppyCare(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
puppyCare(["3", "1000", "1000", "1000", "Adopted"]);
puppyCare(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
