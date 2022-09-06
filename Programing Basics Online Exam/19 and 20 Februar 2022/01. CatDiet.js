function catDiet(input) {
  let fatPerc = Number(input[0]);
  let proteinPerc = Number(input[1]);
  let carbohydratePerc = Number(input[2]);
  let allCalories = Number(input[3]);
  let water = Number(input[4]);

  let fatGram = 9;
  let proteinGram = 4;
  let carbohydrateGram = 4;

  let fat = ((fatPerc / 100) * allCalories) / fatGram;
  let protein = ((proteinPerc / 100) * allCalories) / proteinGram;
  let carbohydrate =
    ((carbohydratePerc / 100) * allCalories) / carbohydrateGram;
  let totalFoodSuplements = fat + protein + carbohydrate;
  let calPerGramWithWater = (allCalories / totalFoodSuplements).toFixed(4);
  let wateraPerc = water / 100; //water in percent
  let clearCalPerGram = calPerGramWithWater - wateraPerc * calPerGramWithWater;

  console.log(clearCalPerGram.toFixed(4));
}

catDiet(["60", "25", "15", "2500", "60"]);
catDiet(["40", "40", "20", "3000", "40"]);
