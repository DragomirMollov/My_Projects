function vacation(input) {
  let index = 0;
  let vacationPrice = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;

  let daysSpend = 0;
  let dayCount = 0;

  while (money < vacationPrice) {
    let action = input[index]; // spend or safe
    index++;
    let amountOfMoney = Number(input[index]);
    dayCount++;
    switch (action) {
      case "spend":
        money -= amountOfMoney;
        if (money < 0) {
          money = 0;
        }
        daysSpend++;
        break;
      case "save":
        money += amountOfMoney;
        daysSpend = 0;
        break;
    }
    if (daysSpend >= 5) {
      console.log(`You can't save the money.`);
      console.log(`${dayCount}`);
      break;
    }
    index++;
  }
  if (money >= vacationPrice) {
    console.log(`You saved the money for ${dayCount} days.`);
  }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);






