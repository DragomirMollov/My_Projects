function onTimeForTheExam(input) {
  const examHour = Number(input[0]);
  const examMinutes = Number(input[1]);
  const arrivalHour = Number(input[2]);
  const arrivalMinutes = Number(input[3]);

  const totalExamMin = examHour * 60 + examMinutes; // total time of the exam in minutes
  const totalArrivalMin = arrivalHour * 60 + arrivalMinutes; // total time of the arrival time in minutes
  const differenceInTime = Math.abs(totalExamMin - totalArrivalMin);
  const hourDiff = Math.floor(differenceInTime / 60);
  let minDiff = differenceInTime % 60;
  if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
    minDiff = `0${minDiff}`;
  }

  if (totalArrivalMin === totalExamMin) {
    console.log("On time");
  } else if (totalArrivalMin > totalExamMin && differenceInTime < 60) {
    console.log("Late");
    console.log(`${minDiff} minutes after the start`);
  } else if (totalArrivalMin > totalExamMin && differenceInTime >= 60) {
    console.log("Late");
    console.log(`${hourDiff}:${minDiff} hours after the start`);
  } else if (differenceInTime <= 30) {
    console.log("On Time");
    console.log(`${minDiff} minutes before the start`);
  } else if (differenceInTime > 30 && differenceInTime < 60) {
    console.log("Early");
    console.log(`${minDiff} minutes before the start`);
  } else {
    console.log("Early");
    console.log(`${hourDiff}:${minDiff} hours before the start`);
  }
}
onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["16", "00", "15", "00"]);
onTimeForTheExam(["9", "00", "10", "30"]);
onTimeForTheExam(["14", "00", "13", "55"]);
onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["10", "00", "10", "00"]);
onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "12", "29"]);
