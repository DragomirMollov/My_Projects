function braceleStand(input) {
    let pocketMoney = Number(input[0]);
    let moneyPerDayEarned = Number(input[1]);
    let totalSpend = Number(input[2]);
    let giftPrice = Number(input[3]);
    let dayLeft = 5;

    let safeMoney = dayLeft * pocketMoney;
    let totalMoneyEarn = dayLeft * moneyPerDayEarned;
    let allMoneyEarned = totalMoneyEarn + safeMoney;
    let cleanMoney = allMoneyEarned - totalSpend;

    if (cleanMoney > giftPrice) {
        console.log(`Profit: ${cleanMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let need = giftPrice - cleanMoney; 
        console.log(`Insufficient money: ${need.toFixed(2)} BGN.`);
    }
}

braceleStand(["5.12", "32.05", "15", "150"]);
braceleStand(["2.10", "17.50", "20.20", "148.50"]);
braceleStand(["15.20", "200.00", "7.30", "1500.12"]);
