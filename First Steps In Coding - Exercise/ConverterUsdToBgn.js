function converterUsdTobgn(input) {
  const fixedValue = 1.79549;
  const usd = Number(input[0]);
  const bgn = usd * fixedValue;
  console.log(bgn);
}

converterUsdTobgn(["22"]);
converterUsdTobgn(["100"]);
converterUsdTobgn(["12.5"]);
 