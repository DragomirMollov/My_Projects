function oscarsCeremony(input) {
    const rent = Number(input[0]);
    const statuette = rent * 0.7;
    const catering = statuette * .85;
    const sound = catering * 0.5;

    let allMoney = rent + statuette + catering + sound;

    console.log(allMoney.toFixed(2));
}

oscarsCeremony(["3500"])