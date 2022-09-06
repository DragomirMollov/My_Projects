function worldSwimmingRecord(input) {
  const record = Number(input[0]);
  const distance = Number(input[1]);
  const secondsForOneMeter = Number(input[2]);

  const secondAdded = Math.floor(distance / 15) * 12.5;
  const swimingTime = distance * secondsForOneMeter + secondAdded;
  if (swimingTime >= record) {
    const secondSlower = swimingTime - record;
    console.log(`No, he failed! He was ${secondSlower.toFixed(2)} seconds slower.`);
  } else {
    console.log(`Yes, he succeeded! The new world record is ${swimingTime.toFixed(2)} seconds.`
    );
  }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
